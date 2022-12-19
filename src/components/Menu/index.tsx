import { useContext, useState } from "react";
import { Menu, Modal, Anchor, Stack } from "./styles";

import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import Avatar from "../Avatar";
import { UserContext } from "../../contexts/UserContext";
import { menuType } from "../../types/types";

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

export function MenuModal({ handleMenu }: menuType) {
  const { currentUser } = useContext(UserContext);

  return (
    <Modal>
      <Stack>
        {currentUser?.displayName && (
          <Anchor href="/profile">
            <Avatar img={currentUser?.photoURL} size={1} />
            {currentUser?.displayName}
          </Anchor>
        )}
        <Anchor onClick={handleMenu} href="/">
          Home
        </Anchor>
        <Anchor onClick={handleMenu} href="/">
          Profile
        </Anchor>
        <Anchor onClick={handleMenu} href="/">
          Create Event
        </Anchor>
        <Anchor onClick={handleMenu} href="/">
          Contact
        </Anchor>
      </Stack>
    </Modal>
  );
}
