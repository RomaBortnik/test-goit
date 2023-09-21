import { css } from '@emotion/react';

import woffRobotoRegular from '../fonts/AnyConv.com__Roboto-Regular.woff';
import woff2RobotoRegular from '../fonts/AnyConv.com__Roboto-Regular.woff2';
import woffRobotoMedium from '../fonts/AnyConv.com__Roboto-Medium.woff';
import woff2RobotoMedium from '../fonts/AnyConv.com__Roboto-Medium.woff2';
import woffRobotoBold from '../fonts/AnyConv.com__Roboto-Bold.woff';
import woff2RobotoBold from '../fonts/AnyConv.com__Roboto-Bold.woff2';

import woffKalamLight from '../fonts/AnyConv.com__Kalam-Light.woff';
import woff2KalamLight from '../fonts/AnyConv.com__Kalam-Light.woff2';
import woffKalamRegular from '../fonts/AnyConv.com__Kalam-Regular.woff';
import woff2KalamRegular from '../fonts/AnyConv.com__Kalam-Regular.woff2';
import woffKalamBold from '../fonts/AnyConv.com__Kalam-Bold.woff';
import woff2KalamBold from '../fonts/AnyConv.com__Kalam-Bold.woff2';

import woffArchitectsDaughterRegular from '../fonts/AnyConv.com__ArchitectsDaughter-Regular.woff';
import woff2ArchitectsDaughterRegular from '../fonts/AnyConv.com__ArchitectsDaughter-Regular.woff2';

export const GlobalStyles = css`
  @font-face {
    font-family: 'Roboto';
    font-weight: 400;
    font-style: normal;
    src: url('${woffRobotoRegular}') format('woff'),
      url('${woff2RobotoRegular}') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    src: url('${woffRobotoMedium}') format('woff'),
      url('${woff2RobotoMedium}') format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 700;
    font-style: normal;
    src: url('${woffRobotoBold}') format('woff'),
      url('${woff2RobotoBold}') format('woff2');
  }

  @font-face {
    font-family: 'Kalam';
    font-weight: 300;
    font-style: normal;
    src: url('${woffKalamLight}') format('woff'),
      url('${woff2KalamLight}') format('woff2');
  }

  @font-face {
    font-family: 'Kalam';
    font-weight: 400;
    font-style: normal;
    src: url('${woffKalamRegular}') format('woff'),
      url('${woff2KalamRegular}') format('woff2');
  }

  @font-face {
    font-family: 'Kalam';
    font-weight: 700;
    font-style: normal;
    src: url('${woffKalamBold}') format('woff'),
      url('${woff2KalamBold}') format('woff2');
  }

  @font-face {
    font-family: 'Architects Daughter';
    font-weight: 400;
    font-style: normal;
    src: url('${woffArchitectsDaughterRegular}') format('woff'),
      url('${woff2ArchitectsDaughterRegular}') format('woff2');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Architects Daughter', 'Roboto', 'Kalam', serif, sans-serif;
    font-style: normal;
    overflow-x: hidden;
  }

  body.backdrop {
    overflow: hidden;
  }

  ul,
  ol {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
