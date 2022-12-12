import { createGlobalStyle } from "styled-components";

export const theme = {
  primary1000: "rgba(13, 17, 23, 1)",
  primary900: "rgba(13, 17, 23, .9)",
  primary800: "rgba(13, 17, 23, .8)",
  primary700: "rgba(13, 17, 23, .7)",
  primary600: "rgba(13, 17, 23, .6)",
  primary500: "rgba(13, 17, 23, .5)",
  primary400: "rgba(13, 17, 23, .4)",
  primary300: "rgba(13, 17, 23, .3)",
  primary200: "rgba(13, 17, 23, .2)",
  primary100: "rgba(13, 17, 23, .1)",

  secondary1000: "rgba(57, 211, 83, 1)",
  secondary900: "rgba(57, 211, 83, .9)",
  secondary800: "rgba(57, 211, 83, .8)",
  secondary700: "rgba(57, 211, 83, .7)",
  secondary600: "rgba(57, 211, 83, .6)",
  secondary500: "rgba(57, 211, 83, .5)",
  secondary400: "rgba(57, 211, 83, .4)",
  secondary300: "rgba(57, 211, 83, .3)",
  secondary200: "rgba(57, 211, 83, .2)",
  secondary100: "rgba(57, 211, 83, .1)",

  tertiary1000: "rgba(88, 166, 255, 1)",
  tertiary900: "rgba(88, 166, 255, .9)",
  tertiary800: "rgba(88, 166, 255, .8)",
  tertiary700: "rgba(88, 166, 255, .7)",
  tertiary600: "rgba(88, 166, 255, .6)",
  tertiary500: "rgba(88, 166, 255, .5)",
  tertiary400: "rgba(88, 166, 255, .4)",
  tertiary300: "rgba(88, 166, 255, .3)",
  tertiary200: "rgba(88, 166, 255, .2)",
  tertiary100: "rgba(88, 166, 255, .1)",
};

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

body {
    color: white;
    background: rgba(13, 17, 23, 1);
  }

`;

export default GlobalStyle;
