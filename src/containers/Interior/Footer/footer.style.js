import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import map from 'common/assets/image/interior/map.png';

const FooterWrapper = styled.footer`
  width: 100%;
  padding: 70px 0 40px;
  background-color:#fff2d9;
  background-image: url(${map?.src});
  background-repeat: no-repeat;
  background-position: top center;

  .col-one {
    .logo {
      width: 100px;
      margin-bottom: 20px;
    }
  }

  .widget_title {
    color: black;
    font-size: 14px;
    margin-bottom: 16px;
  }

  .text {
    color: black;
    font-size: 14px;
    margin-bottom: 9px;
  }

  .copyright {
    width: 100%;
    margin-top: 81px;
    padding-top: 30px;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #212121;
    @media only screen and (max-width: 480px) {
      justify-content: center;
      margin-top: 10px;
      padding-top: 25px;
      flex-direction: column;
    }

    p {
      color: #464646;
      margin: 0;

      svg {
        margin-left: 10px;
      }
    }
  }
  .custom-margin {
    margin-left: 40%;
    
  }
`;

export const CurvIcon = styled.div`
  background-color: ${themeGet('colors.lightBg', '#fbfafe')};

  svg {
    width: 100%;
    margin-bottom: -5px;
    fill: black;
  }
`;

export const List = styled.ul`
  width: 100%;
`;

export const ListItem = styled.li`
  a {
    color: ${themeGet('colors.lightText', '#7E7E7E')};
    font-size: 14px;
    line-height: 35px;
    transition: all 0.3s ease;

    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: black;
      padding-left: 5px;
    }
  }
`;

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 30px;

  li {
    margin-right: 30px;
    @media only screen and (max-width: 991px) {
      margin-right: 20px;
    }
    &:last-child {
      margin-right: 0;
    }

    a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      color: ${themeGet('colors.lightText', '#7E7E7E')};
      position: relative;
      i {
        position: relative;
        z-index: 1;

        svg {
          width: 15px;
          height: auto;
        }
      }

      &:hover {
        color: black;
      }
    }
  }
`;

export default FooterWrapper;
