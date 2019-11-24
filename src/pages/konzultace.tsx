import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Layout, Wrapper, BurgerHeader } from '../components';
import { StaticQuery, graphql, Link } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Helmet from 'react-helmet';
import config from '../../config/SiteConfig';
import { media } from '../utils/media';
import PageProps from '../models/PageProps';

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
  flex: 1 0 33%;
  max-height: 67%;
  margin: 0;
  padding: 0;
`;

const HomepageContent: any = styled.div`
  max-width: 30rem;
  text-align: ${(props: any) => (props.center ? 'center' : 'left')};
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 32px rgba(130, 122, 122, 0.6);
  background-color: #132457;
  color: #ffffff;
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

const SubSection = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 32px rgba(130, 122, 122, 0.6);
  background-color: #fff;
  color: #000;
  font-size: 1rem;
  width: 90%;
`;
// const sectionQuery=(props:any)=>)

const contentOptions = {
  renderMark: {
    // @ts-ignore
    [MARKS.BOLD]: text => `<pre>${text}<custom-bold>`,
  },
  renderNode: {
    // @ts-ignore
    [BLOCKS.PARAGRAPH]: (node, next) => `<p>${next(node.content)}</p>`,
  },
};
const logo = () => <Logo src={'/assets/logo.png'} alt="Logo Neziskovky.cz" />;
export default class KonzultacePage extends React.Component<PageProps> {
  public render() {
    return (
      <Layout>
        <BurgerHeader menuItems={header} banner={'Konzultance'} logo={logo} />
        <Wrapper fullWidth={true}>
          <Helmet title={`Consultations | ${config.siteTitle}`} />
          <Homepage>
            <HomepageContent center={true}>
              {/*<img src={config.siteLogo} alt="Neziskovky.cz uvodni stranka" tab-index={0} />*/}

              <Section aria-label={'sekce obsahujici informace o  Založení neziskové organizace'}>
                <StaticQuery
                  query={graphql`
                    query MyQuery {
                      allContentfulSection {
                        totalCount
                        sections: nodes {
                          title
                          updatedAt
                          body {
                            content {
                              nodeType
                              content {
                                marks {
                                  type
                                }
                                data {
                                  uri
                                }
                                content {
                                  nodeType
                                  value
                                  content {
                                    value
                                    nodeType
                                  }
                                }
                                value
                              }
                            }
                          }
                        }
                      }
                    }
                  `}
                  render={({ allContentfulSection: { sections } }) => {
                    console.log(sections);
                    // @ts-ignore
                    return sections.map(({ title, updatedAt, body: { content } }, index) => (
                      <Fragment key={index}>
                        <h2>{title}</h2>
                        <h3>{updatedAt}</h3>
                      </Fragment>
                    ));
                  }}
                />
                <h2>Co balíček obsahuje?</h2>

                <SubSection>
                  úvodní konzultaci s právníkem (30 minut) sestavení zakladatelských dokumentů neziskové organizace (zakládací smlouva,
                  stanovy atd.)
                  <br />
                  sestavení souvisejících dokumentů (čestná prohlášení, souhlas s umístěním sídla, prohlášení správce vkladu aj.)
                  <br />
                  sestavení návrhu na zápis do veřejného rejstříku řešení případných požadavků soudu, budou-li v rámci řízení o zápisu do
                  rejstříku vzneseny související poradenství Cena nezahrnuje: službu notáře - sepsání notářského zápisu tam, kde jej zákon
                  vyžaduje (nadace)
                  <br />
                  Cena: od 5.590,- Kč* (včetně DPH)*cena závisí na zvolené právní formě od 5.590,- Kč* (včetně DPH)
                  <br />
                  *cena závisí na zvolené právní formě Pro vice info kontaktujte nas na nadace@neziskovky.cz
                  <br />
                </SubSection>
              </Section>
            </HomepageContent>
          </Homepage>
        </Wrapper>
      </Layout>
    );
  }
}
