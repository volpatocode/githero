import { Navbar, Stack, Anchor } from "./styles";

import Logo from "../Logo";
import Menu from "../Menu";
import { navbarType } from "../../types/types";

export default function index({ anchors }: navbarType) {
  return (
    <Navbar>
      <Logo />
      <Stack>
        {anchors  && (
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
