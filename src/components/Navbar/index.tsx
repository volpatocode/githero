import { Navbar, Stack, Button } from "./styles";

import Logo from "../Logo";
import Menu from "../Menu";

export default function index() {
  return (
    <Navbar>
      <Logo />
      <Stack>
        <Button variant="text">Sign in</Button>
        <Button variant="contained">Sign Up</Button>
        <Menu />
      </Stack>
    </Navbar>
  );
}
