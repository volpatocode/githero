import { Navbar, Stack, Anchor, Button } from "./styles";

import Logo from "../Logo";

export default function index() {
  return (
    <Navbar>
      <Logo />
      <Stack>
        <Anchor>Home</Anchor>
        <Anchor>Events</Anchor>
        <Anchor>Profile</Anchor>
      </Stack>
      <Stack>
        <Button variant="text">Sign in</Button>
        <Button variant="contained">Sign Up</Button>
      </Stack>
    </Navbar>
  );
}
