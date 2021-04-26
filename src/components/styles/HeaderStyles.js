import { css } from 'emotion'

const HeaderStyles = css`
   {
    width: 100%;
  }

  .right-header-column,
  .left-header-column {
  }
  .header-container {
    // background-color: #fff;
    min-height: 60px !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    margin-top: -13px;
    height: 60px !important;
    display: -webkit-box !important;
  }

  .header-column {
    float: left;
    height: 100%;
    display: inline-flex;
  }

  .header-name {
    font-family: Arial;
    font-style: italic;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
    color: #181818;
    margin-top: 15px;
    margin-left: 4rem;
  }
  // .dropdown:hover > .dropdown-menu {
  //   display: block;
  // }
  .new-to-rms:hover {
    background-color: white !important;
    cursor: alias !important;
  }
  .dark .nav-link {
    color: #fff !important;
  }
  .dark .dropdown-toggle {
    color: #fff !important;
  }
  .dark .join-community {
    color: #fff !important;
  }
  @media only screen and(minWidth: 300px) and (maxwidth: 575px) {
    .left-header-column {
      width: 10% !important;
    }

    .right-header-column {
      width: 60% !important;
    }
  }
  @media only screen and (minwidth: 576px) and (maxwidth: 640px) {
    .left-header-column {
      width: 10% !important;
    }

    .right-header-column {
      width: 60% !important;
    }
  }
  .navbar {
    padding-bottom: 0px;
    height: 100%;
  }
  .header-container .container-fluid {
    height: 100%;
  }
  .header-container .navbar-brand {
    display: none;
  }
  .header-container .underline:hover {
    // text-decoration: underline;
    border-radius: 4px;
  }
  .header-container .dropdown-menu li:hover {
    border: none;
  }
  .header-container .dropdown-menu p {
    min-width: 115px !important;
  }
  .header-container .navbar-nav {
    padding-top: 5px !important;
  }
  .right-header-column .navbar-nav {
    padding-top: 20px !important;
  }
  .header-container li {
    font-size: 16px !important;
  }
  .header-container .dropdown-menu {
    padding: 14px;
  }
  .header-container .dropdown-item {
    padding-left: 0px;
  }
  .header-container .dropdown-item input {
    margin-left: 8px;
    margin-top: 5px;
  }
  .header-container .navbar-light .navbar-nav .nav-link {
    // color: #fff !important;
  }
  .light .dropdown-toggle {
    color: rgba(0, 0, 0, 0.9) !important;
  }
  .light .join-community {
    color: rgba(0, 0, 0, 0.9) !important;
  }
  .navbar-toggler {
    border: none !important;
  }
  .navbar-toggler:focus {
    box-shadow: none !important;
  }
  @media only screen and (max-width: 991px) {
    .light .navbar-collapse {
      background: #fff;
      margin-top: 8px;
      padding: 14px;
    }
    .dark .navbar-collapse {
      background: #131921;
      margin-top: 8px;
      padding: 14px;
    }
    .navbar-collapse {
      z-index: 1 !important;
    }
    .navbar-toggler {
      padding-top: 20px;
    }
    .right-header-column ul {
      margin-left: 0 !important;
    }
    .container-fluid {
      padding: 0 !important;
    }
    .header-column {
      width: 100%;
    }
    button[aria-expanded='true'] {
      padding-top: 27px;
    }
    .header-container .navbar-nav {
      padding-top: 0px;
    }
  }
  .light .image-url {
    background-image: url(../../public/assets/logo.jpg);
  }
  .description {
    font-family: 'Times New Roman', Times, serif;
  }
  .my-rms {
    margin-left: -120px;
    position: absolute;
    width: 225px;
  }
  .sign-in {
    margin-left: -100px;
    position: absolute;
    width: 175px;
  }
  .sell {
    margin-left: -110px;
    position: absolute;
    width: 160px;
  }
  .dropdown-item:hover {
    background-color: #fff !important;
    font-weight: bold;
  }
  hr {
    margin: 0rem 0 !important;
  }
  a,
  span,
  button {
    font-size: 14px;
  }
  .description {
    padding-top: 1.5rem;
  }
  .item-label {
    display: block;
  }
  .with-label {
    text-align: center;
  }
`

export default HeaderStyles
