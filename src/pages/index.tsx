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
    <li>Navigation</li>
    <li>
      <Link className="navLink" to={'Domu'}>
        Home
      </Link>
    </li>
    <li>Navigation</li>
    <li>
      <Link className="navLink" to={'Detail'}>
        Detail
      </Link>
    </li>
    <li>Navigation</li>
    <li>
      <Link className="navLink" to={'Home'}>
        Home
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
