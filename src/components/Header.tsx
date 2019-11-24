import React, { useEffect, Fragment } from 'react';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
import rgba from 'polished/lib/color/rgba';
import { media } from '../utils/media';
import config from '../../config/SiteConfig';

import { TimelineMax, Expo } from 'gsap/TweenMax';

import './Header.scss';

const HeaderWrapper: any = styled.header`
  position: relative;
  background: linear-gradient(
      -185deg,
      ${props => rgba(darken(0.1, props.theme.colors.primary), 0.6)},
      ${props => rgba(lighten(0.1, props.theme.colors.grey.dark), 0.8)}
    ),
    url(${(props: any) => props.banner}) no-repeat;
  background-size: cover;
  padding: 8rem 2rem 10rem;
  text-align: center;
  ::after {
    background: transparent url(/assets/mask.svg) no-repeat bottom left;
    background-size: 101%;
    bottom: -2px;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    width: 100%;
  }
  @media ${media.tablet} {
    padding: 4rem 2rem 6rem;
  }
  @media ${media.phone} {
    padding: 1rem 0.5rem 2rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 999;
  a {
    color: white;
    &:hover {
      opacity: 0.85;
      color: white;
    }
  }
`;

const Menu = styled.header`
  display: inline-flex;
  width: 100vw;
  background-color: pink;
  justify-content: space-around;
`;

interface Props {
  banner?: string;
  menuItems: any;
  logo?: any;
}

export class Header extends React.PureComponent<Props> {
  public render() {
    return (
      <HeaderWrapper banner={this.props.banner || config.defaultBg}>
        <Content>{this.props.children}</Content>
      </HeaderWrapper>
    );
  }
}
// const Logo=div.styled;
export const BurgerHeader = (props: Props) => {
  useEffect(() => {
    const whiteSection: HTMLCollectionOf<Element> = document.getElementsByClassName('menu');
    const t1 = new TimelineMax({ paused: true });
    const t2 = new TimelineMax({ paused: true });
    t1.to('.one', 0.3, {
      y: 6,
      rotation: 45,
      ease: Expo.easeInOut,
    });
    t1.to('.two', 0.3, {
      y: -6,
      marginLeft: '0px',
      width: '40px',
      rotation: -45,
      ease: Expo.easeInOut,
      delay: -0.3,
    });
    t1.to('.menu', 1, {
      top: '0%',
      ease: Expo.easeInOut,
      delay: -0.4,
    });
    t1.staggerFrom('.menu ul li', 0.4, { x: window.innerWidth, opacity: 0, ease: Expo.easeOut }, 0.1);
    t1.reverse();
    // if (document == null) {
    //   return <div/>;
    // }
    t2.to('span', 0.6, { backgroundColor: '#111', ease: Expo.easeOut });
    document.querySelector('.menu')!.addEventListener('click', () => {
      t1.reversed(!t1.reversed());
      // @ts-ignore
      if (window.scrollY >= whiteSection[0].offsetTop) {
        t2.reversed(!t2.reversed());
      }
    });
    document.querySelectorAll('.navLink').forEach(a => {
      a.addEventListener('click', () => {
        t1.reversed(!t1.reversed());
      });
    });

    document.addEventListener('scroll', () => {
      // @ts-ignore
      if (window.scrollY >= whiteSection[0].offsetTop && t1.reversed()) {
        t2.play();
      } else {
        t2.reverse();
      }
    });
  });

  const onClick = () => {
    console.log('click');
    document.querySelector('.hamburger')!.addEventListener('click', () => {
      const whiteSection: HTMLCollectionOf<Element> = document.getElementsByClassName('menu');
      const t1 = new TimelineMax({ paused: true });
      const t2 = new TimelineMax({ paused: true });

      t1.reversed(!t1.reversed());
      // @ts-ignore
      if (window.scrollY >= whiteSection[0].offsetTop) {
        t2.reversed(!t2.reversed());
      }
    });
  };
  const onNavigate = () => {
    const t1 = new TimelineMax({ paused: true });
    document.querySelector('.hamburger')!.addEventListener('click', () => {
      document.querySelectorAll('.navLink').forEach(a => {
        a.addEventListener('click', () => {
          t1.reversed(!t1.reversed());
        });
      });
    });
  };
  return (
    <Fragment>
      <Menu>
        <div>{props.logo()}</div>
        <h1>{props.banner}</h1>
        <div className="hamburger" onClick={onClick}>
          <span className="one" />
          <span className="two" />
        </div>
        <div className="menu">
          <div className="data">
            <ul>{props.menuItems()}</ul>
          </div>
        </div>
      </Menu>
    </Fragment>
  );
};
