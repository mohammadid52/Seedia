import { css } from 'emotion'

const FooterStyles = css`
  .dropdown:hover > .dropdown-menu {
    display: block !important;
    height: 180px;
    width: 225px;
    overflow-y: auto;
  }
  .navbar-collapse {
    display: table-cell !important;
  }
  .col-md-3,
  .col-md-2,
  .col-md-9 {
    float: left;
    min-height: 185px;
  }
  .dropdown .navbar-light .navbar-nav .nav-link {
    color: #ddd !important;
  }
  li {
    color: #a8a7a7 !important;
    font-size: 14px;
  }
  .light li {
    color: #a39d9d !important;
    font-size: 14px;
  }
  .light li:hover {
    // color: #807979 !important;
    color: #ea1b83 !important;
    background-image: linear-gradient(to right, rgb(178, 188, 75), rgb(254, 198, 78), rgb(226, 17, 142), rgb(86, 75, 143));
    we: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
  }
  .dark li:hover {
    // color: #e0dcdc !important;
    color: #fff !important;
    background-image: linear-gradient(to right, rgb(178, 188, 75), rgb(254, 198, 78), rgb(226, 17, 142), rgb(86, 75, 143));
    we: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-weight: bold;
  }
  li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  ul {
    list-style: none;
    padding-left: 0;
  }
  .dropdown-toggle {
    color: #ddd !important;
  }
  .dropdown-menu {
    min-height: 320px;
    top: -335px;
    width: 920px;
    right: 15px;
    background-color: #fff;
    padding-top: 10px;
    min-height: 255px;
    border: 1px solid #e7e7e7;
    position: absolute;
    z-index: 9999;
    -moz-box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.4);
    box-shadow: 5px 2px 10px rgb(0 0 0 / 40%);
    -moz-border-radius: 0 0 2px 2px;
    border-radius: 0 0 3px 3px;
    top: -267px;
    right: 27px;
  }
  .light p {
    color: #767676 !important;
    font-weight: 500;
  }
  .light .copy-right {
    color: #333 !important;
    font-size: 12px;
  }
  .dark .copy-right {
    color: #fff !important;
    font-size: 12px;
  }
  .dark .navbar-collapse {
    background: #262d31 !important;
  }
  @media only screen and (max-width: 767px) {
    .navbar-collapse {
      display: block !important;
    }
    .col-md-3,
    .col-md-2 {
      float: left;
      min-height: 185px;
      width: 50%;
    }
    .col-md-9 {
      width: 100%;
      min-height: 115px;
    }
  }
  .light .button {
    border: 1px solid #ddd;
    background: #f5f5f5;
    color: black !important;
    padding: 6px 12px;
    border-radius: 4px;
  }
  .dark .button {
    border: 1px solid #ddd;
    background: #262d31;
    color: #fff;
    padding: 6px 12px;
    border-radius: 4px;
  }
`

export default FooterStyles
