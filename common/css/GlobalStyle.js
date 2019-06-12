import { createGlobalStyle } from 'styled-components'
import { themeColor } from './constant'

export const GlobalStyle = createGlobalStyle`
  body,html,h1,h2,h3,h4,h5,p{
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  table {
    th {
      &:last-child {
         text-align: center;
      }
    }
    td {
      &:last-child {
        text-align: center;
      }
    }
  }
  @font-face {
    font-display: auto;
    font-family: 'DIN-Regular';
    src: url('../../assets/iconfont/DIN/DIN-Regular.otf');
  }
  @font-face {
    font-display: auto;
    font-family: 'DIN-Bold';
    src: url('../../assets/iconfont/DIN/DIN-Bold.otf');
  }
  .ant-select-dropdown-menu-item:hover:not(.ant-select-dropdown-menu-item-disabled) {
    background-color: #cce28c;
  }
  .ant-select-dropdown.ant-select-dropdown--multiple {
    .ant-select-dropdown-menu-item-selected {
      .ant-select-selected-icon {
        color: ${themeColor};
      }
    }
  }
  .ant-select-selection__choice__remove {
    .anticon {
      color: #fff;
    }
  }
  .ant-select-selection--multiple {
    .ant-select-selection__choice {
      background-color: ${themeColor};
      color: #fff;
    }
  }
  .ant-spin-dot-item {
    background-color: ${themeColor};
  }
  .ant-btn {
    color: ${themeColor};
    border-color: ${themeColor};
    &:hover, &:focus {
      color: ${themeColor};
      border-color: ${themeColor};
      opacity: 0.7;
    }
  }
  .ant-btn-primary {
    color: #fff;
    background-color: ${themeColor};
    border-color: ${themeColor};
    &:hover, &:focus {
      color: #fff;
      background-color: ${themeColor};
      border-color: ${themeColor};
      opacity: 0.7;
    }
  }
  .ant-switch-checked {
    background-color: ${themeColor};
  }
  .ant-popover-inner-content {
    color: ${themeColor};
  }
  .ant-tooltip-inner {
    background-color: #fff;
    color: ${themeColor};
  }
  .ant-tooltip-placement-top .ant-tooltip-arrow {
    border-top-color: #fff;
  }
 `
