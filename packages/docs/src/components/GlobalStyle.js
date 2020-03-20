import { createGlobalStyle, css } from 'styled-components';

const fontImports = css`
  @font-face {
    font-family: 'Plex Sans';
    src: url(${({ theme }) => theme.typeFaces.plexSans.light}) format('woff2');
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-style: normal;
  }

  @font-face {
    font-family: 'Plex Sans';
    src: url(${({ theme }) => theme.typeFaces.plexSans.regular}) format('woff2');
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-style: normal;
  }

  @font-face {
    font-family: 'Plex Sans';
    src: url(${({ theme }) => theme.typeFaces.plexSans.regular}) format('woff2');
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    font-style: italic;
  }

  @font-face {
    font-family: 'Plex Sans';
    src: url(${({ theme }) => theme.typeFaces.plexSans.bold}) format('woff2');
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${({ theme }) => theme.typeFaces.poppins.black}) format('woff2');
    font-weight: ${({ theme }) => theme.fontWeight.black};
    font-style: normal;
  }
`;

export const DocsStyles = createGlobalStyle`
 ${fontImports}
`;

export default DocsStyles;
