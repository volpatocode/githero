export type UserFormData = {
  displayName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  photoURL?: string;
};

export type anchorType = {
  variant: "text" | "contained";
  href: string;
};

export type buttonType = {
  text?: string;
  variant?: "google" | "github";
  bgColor?: "transparent" | "green" | "blue" | "white" | "black";
  color?: "transparent" | "green" | "blue" | "white" | "black";
  border?: "transparent" | "green" | "blue" | "white" | "black";
  borderRadius?: "sm" | "md" | "lg" | "xl" | "full";
  fontSize?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "sm" | "md" | "lg";
  image?: any;
  width?: string;
  bold?: boolean;
};

export type menuType = {
  handleMenu?: () => void;
  setIsMenuOpen?: (oldState: boolean) => void;
};

export type navbarType = {
  anchors?: boolean | true;
};
