import {
  createContext,
  ReactNode,
  useState,
  useEffect,
  SetStateAction,
} from "react";
import { useRouter } from "next/router";

import { auth, db, storage } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import Avatar from "../components/Avatar";
import { UserFormData } from "../types/types";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isAuthorized: boolean;
  setIsAuthorized: (newState: boolean) => void;
  isLoading: boolean;
  setIsLoading: (newState: boolean) => void;
  isUserLoading: boolean;
  setIsUserLoading: (newState: boolean) => void;
  signUpUser: (data: UserFormData) => void;
  signInUser: (data: UserFormData) => void;
  logOut: () => void;
  resetPassword: (data: UserFormData) => void;
  errorFirebase: string;
  handlePhoto: (e: any) => void;
  handlePhotoUpload: () => void;
  photo: any;
  photoURL: any;
  currentUser: any;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const currentUser = auth?.currentUser;
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUserLoading, setIsUserLoading] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [errorFirebase, setErrorFirebase] = useState("");
  const [photoURL, setPhotoURL] = useState(<Avatar />);

  const router = useRouter();

  // User listener

  useEffect(() => {
    setIsUserLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthorized(true);
        setIsUserLoading(false);
      } else {
        setIsAuthorized(false);
        setIsUserLoading(false);
      }
    });
  }, []);

  // User Login/register functions
  async function signUpUser(data: UserFormData) {
    setIsLoading(true);
    const res = await createUserWithEmailAndPassword(
      auth,
      data?.email,
      data?.password
    );
    await setDoc(doc(db, "users", res?.user?.uid), {
      email: data?.email,
      uid: res?.user?.uid,
    })
      .then(() => {})
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function signInUser(data: UserFormData) {
    setIsLoading(true);
    await signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {})
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function logOut() {
    setIsLoading(true);
    await signOut(auth)
      .then(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }

  async function resetPassword(data: UserFormData) {
    setIsLoading(true);
    await sendPasswordResetEmail(auth, data.email)
      .then(() => {
        router.push("/help/emailsent");
      })
      .catch((error) => setErrorFirebase(error.message))
      .finally(() => setIsLoading(false));
  }

  // Profile picture

  useEffect(() => {
    if (currentUser?.photoURL) {
      //@ts-ignore
      setPhotoURL(currentUser?.photoURL);
    } else {
      setPhotoURL(<Avatar />);
    }
  }, [currentUser?.photoURL]);

  async function upload(file: any, currentUser: any, loading: any) {
    setIsLoading(true);
    const randomstring = new Date().getTime();
    const fileRef = ref(
      storage,
      `user/profilepicture/${currentUser?.uid + randomstring + ".png"}`
    );

    await uploadBytes(fileRef, file);
    const updatedPhotoURL = await getDownloadURL(fileRef);

    await updateProfile(currentUser, { photoURL: updatedPhotoURL });
    await updateDoc(doc(db, "users", currentUser?.uid), {
      photoURL: updatedPhotoURL,
    }).then(() => {
      // refreshPage();
    });
  }

  async function handlePhotoUpload() {
    await upload(photo, currentUser, isLoading);

    setIsLoading(false);
  }

  function handlePhoto(e: { target: { files: SetStateAction<null>[] } }) {
    if (e.target.files[0]) {
      setIsLoading(true);
      setPhoto(e.target.files[0]);
      setIsLoading(false);
    }
  }

  return (
    <UserContext.Provider
      value={{
        isAuthorized,
        setIsAuthorized,
        isLoading,
        setIsLoading,
        isUserLoading,
        setIsUserLoading,
        signUpUser,
        signInUser,
        logOut,
        resetPassword,
        errorFirebase,
        handlePhoto,
        handlePhotoUpload,
        photo,
        currentUser,
        photoURL,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
