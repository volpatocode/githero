import { createContext, ReactNode } from "react";
import { useRouter } from "next/router";

type UtilsContextProps = {
  children: ReactNode;
};

type UtilsContextType = {
  forceHome: () => void;
  refreshPage: () => void;
};

export const UtilsContext = createContext<UtilsContextType>(
  {} as UtilsContextType
);

export const UtilsContextProvider = ({ children }: UtilsContextProps) => {
  const router = useRouter();

  function forceHome() {
    router.push("/").then(() => {
      router.reload();
    });
  }

  function refreshPage() {
    router.reload();
  }

  //   useEffect(() => {
  //     if (isNavbarMenuOpen) {
  //       document.body.style.overflowY = "hidden";
  //     } else {
  //       document.body.style.overflowY = "auto";
  //     }
  //   }, [isNavbarMenuOpen]);

  return (
    <UtilsContext.Provider value={{ refreshPage, forceHome }}>
      {children}
    </UtilsContext.Provider>
  );
};
