import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Button, Article, Header, BurgerHeader } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';

const Homepage = styled.main`
  display: flex;
  height: 100vh;
  flex-direction: row;
  @media ${media.tablet} {
    height: 100%;
    flex-direction: column;
  }
  @media ${media.phone} {
    height: 100%;
    flex-direction: column;
  }
`;
const Logo = styled.img`
  display: fixed;
`;

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;
const header = () => (
  <Fragment>
    <li>Menu</li>
    <li>
      <Link className="navLink" to={'Domu'}>
        Konzultace
      </Link>
    </li>
    <li>
      <Link className="navLink" to={'Detail'}>
        Vzdělávání
      </Link>
    </li>
    <li>
      <Link className="navLink" to={'Home'}>
        Jak založit NNO
      </Link>
    </li>
    <li>
      <Link className="navLink" to={'Home'}>
        Pro Firmy a donory
      </Link>
    </li>
    <li>
      <Link className="navLink" to={'Home'}>
        Práce v NNO
      </Link>
    </li>
    <li>
      <Link className="navLink" to={'Home'}>
        O nás
      </Link>
    </li>
  </Fragment>
);

export default class IndexPage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <BurgerHeader menuItems={header} banner={'Neziskovky.cz'} />
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
          <Homepage>
            <HomepageContent center={true}>
              <Logo src={'/assets/logo.png'} alt="Logo Neziskovky.cz" />
              <img src={config.siteLogo} alt="Neziskovky.cz uvodni stranka" tab-index={0} />
            </HomepageContent>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
