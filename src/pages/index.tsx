import React, { Fragment } from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Wrapper, Button, Article, Header, BurgerHeader } from '../components';
import PageProps from '../models/PageProps';
import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import rgba from 'polished/lib/color/rgba';
import darken from 'polished/lib/color/darken';
import lighten from 'polished/lib/color/lighten';
import { EventCard } from '../components/EventCard';

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
        <BurgerHeader menuItems={header} />
        <Wrapper fullWidth={true}>
          <Helmet title={`Homepage | ${config.siteTitle}`} />
        </Wrapper>
        <EventCard
          imgSrc="assets/bg/1.jpg"
          date="29. 6. 2020"
          price="4200 Kč"
          title={'Kdo to tu řídí? Ředitelé Cesty domů a Sue Ryder otevřeli černé skříňky'}
        />
      </Layout>
    );
  }
}
