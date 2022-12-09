import { ReactNode, useState } from "react";
import { Menu, Modal, Anchor, Stack } from "./styles";

import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";

export type navbarType = {
  handleMenu?: () => void;
  setIsMenuOpen?: (oldState: boolean) => void;
};

export default function MenuIcon() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
      <Menu onClick={handleMenu}>
        {!isMenuOpen ? (
          <Icon
            path={mdiMenu}
            title="Open"
            size={1.5}
            color="rgba(255, 255, 255, 0.95)"
          />
        ) : (
          <Icon
            path={mdiClose}
            title="Close"
            size={1.5}
            color="rgba(255, 255, 255, 0.95)"
          />
        )}
      </Menu>
      {isMenuOpen && (
        <MenuModal setIsMenuOpen={setIsMenuOpen} handleMenu={handleMenu} />
      )}
    </>
  );
}

export function MenuModal({ handleMenu }: navbarType) {
  return (
    <Modal>
      <Stack>
        <Anchor onClick={handleMenu} href="/">
          Home
        </Anchor>
        <Anchor onClick={handleMenu} href="/about">
          About
        </Anchor>
        <Anchor onClick={handleMenu} href="/contact">
          Contact
        </Anchor>
      </Stack>
    </Modal>
  );
}
