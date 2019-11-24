import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import theme from '../../config/Theme';
import { media } from '../utils/media';
import './layout.scss';
import { SEO } from './SEO';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'VAGRundschriftDLig';
    src: url('fonts/hinted-VAGRundschriftD-Lig.woff2') format('woff2'),
        url('fonts/hinted-VAGRundschriftD-Lig.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'VAGRundschriftD';
    src: url('fonts/hinted-VAGRundschriftD.woff2') format('woff2'),
        url('fonts/hinted-VAGRundschriftD.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  ::selection {
    color: ${theme.colors.white};
    background: ${theme.colors.hover};
  }
  body {
    background: ${theme.colors.white};
    color: ${theme.colors.grey.default};
    font-family: ${theme.fonts.main};
    @media ${media.phone} {
      font-size: 14px;
    }
  }
  a {
    color: ${theme.colors.white};
    text-decoration: none;
    transition: all ${theme.transitions.normal};
  }
  a:hover {
    color: ${theme.colors.hover};
  }
  h1, h2, h3, h4 {
    color: ${theme.colors.white};
  }
  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }
  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
  .textRight {
    text-align:right;
  }
`;

const Footer = styled.footer`
  background-color: ${theme.colors.bg};
  color: ${theme.colors.white};
  text-align: center;
  padding: 3rem 0;
  p {
    position: relative;
    left: 50%;
    text-align: left;
  }
  img {
    width: 15%;
    height: auto;
    position: absolute;
    left: 25%;
  }
`;

export class Layout extends React.PureComponent<{}> {
  public render() {
    const { children } = this.props;

    return (
      <>
        <SEO postSEO={false} />
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            {children}
            <Footer>
              <img src={`assets/nadace_neziskovky_cz_logo_pink.svg`} alt="Logo nadace neziskovky" />
              <p>
                <b>Nadace Neziskovky.cz</b>
                <br />
                Vlkova 628/36, 130 00 Praha 3 - Žižkov
                <br />
                tel.:{' '}
                <a href="tel:+420730517966" aria-label={'+ 4 2 0. 7 3 0. 5 1 7. 9 6 6.'}>
                  +420 730 517 966
                </a>
                , e-mail: <a href="mailto:nadace@neziskovky.cz">nadace@neziskovky.cz</a>
              </p>
            </Footer>
          </>
        </ThemeProvider>
      </>
    );
  }
}
