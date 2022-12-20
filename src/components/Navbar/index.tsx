import { Navbar, Stack, Anchor } from "./styles";

import Logo from "../Logo";
import Menu from "../Menu";
import Avatar from "../Avatar";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export default function NavbarComponent() {
  const { currentUser } = useContext(UserContext);

  return (
    <Navbar>
      <Logo />
      <Stack>
        {currentUser ? (
          <Avatar img={currentUser?.photoURL} href="/profile" />
        ) : (
          <>
            <Anchor variant="text" href="/signin">
              Sign in
            </Anchor>
            <Anchor variant="contained" href="/signup">
              Sign Up
            </Anchor>
          </>
        )}

        <Menu />
      </Stack>
    </Navbar>
  );
}
