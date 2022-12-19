import { Footer, Copyright } from "./styles";

import Logo from "../Logo";

export default function index() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Footer>
      <Logo />
      <Copyright>Copyright &copy; githero{year}.</Copyright>
    </Footer>
  );
}
