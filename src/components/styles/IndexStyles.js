import { css } from 'emotion'

const IndexStyles = css`
  .navbar {
    // position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    /*background-color: #131921;*/
    padding: 0px !important;
    /*color: #fff !importan;*/
  }

  .content {
    padding: 20px;
    margin: 0 auto;
    margin-top: 60px;
    max-width: 600px;
    font-size: 20px;
    line-height: 1.3em;

    h1 {
      font-size: 2rem;
    }

    img {
      width: 100%;
    }

    code {
      background-color: #cbe9ff;
      border-radius: 2px;
      font-size: 1em;
      padding: 0 5px;
    }

    a {
      text-decoration: none;
      color: #006688;
    }

    button {
      color: #006688;
      background-color: transparent;
      border: none;
      font-size: 1em;
      padding: 0;
    }
  }

  body.dark-mode .content code {
    background-color: #1b2938;
  }

  body.dark-mode .content a {
    color: #ee09;
  }

  body.dark-mode .content button {
    color: #ee09;
  }

  //----------------------headerstyles

  .header-top {
    width: 100% !important;
  }
  .description {
    padding-top: 1.5rem;
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
    // display: -webkit-box !important;
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
    padding-top: 5px;
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
      z-index: 9999 !important;
    }
    .dark .navbar-collapse {
      background: #131921;
      margin-top: 8px;
      padding: 14px;
      z-index: 9999 !important;
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
    .item-label {
      display: none !important;
    }
    .with-label {
      text-align: inherit !important;
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
  .dark-mode-toggle {
    display: flex;
    margin: 0 auto;
    & > button {
      font-size: 1.2em;
      background: none;
      border: none;
      color: #ffe600;
      cursor: pointer;
      transition: color 0.3s ease;
      &:last-child {
        color: #666;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .toggle-control {
    position: relative;
    padding: 0 4px;
    display: flex;
    align-items: center;
  }

  input[type='checkbox'].dmcheck {
    width: 40px;
    height: 10px;
    background: #555;
    position: relative;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    vertical-align: 2px;
    outline: none;

    &:checked + label {
      left: 30px;
    }

    &:focus-visible {
      outline: solid 2px white;
    }

    & + label {
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;
      position: absolute;
      left: 2px;
      background: #fff;
      opacity: 0.9;
      background-color: #f6f6f6;
    }
  }

  //--------toggle button

  .dark-mode-toggle > button {
    color: #999;
    &:last-child {
      color: lightblue;
    }
  }

  //---------------toggleStyles

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin-top: -12px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 1px;
    bottom: 0px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
    top: 13px;
    width: 50px;
  }

  .slider.round:before {
    border-radius: 50%;
    height: 21px;
    width: 22px;
  }

  .home-content hr {
    margin: 0.3rem 0 !important;
  }
  a,
  span,
  button {
    font-size: 14px;
  }
  .item-label {
    display: block;
  }
  .with-label {
    text-align: center;
  }
  a:hover {
    color: #ea1b83 !important;
    background-image: linear-gradient(to right, rgb(178, 188, 75), rgb(254, 198, 78), rgb(226, 17, 142), rgb(86, 75, 143));
    we: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .dark a:hover {
    color: #ea1b83 !important;
    background-image: linear-gradient(to right, rgb(178, 188, 75), rgb(254, 198, 78), rgb(226, 17, 142), rgb(86, 75, 143));
    we: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
  .header-top a {
    font-weight: bold;
  }
  .power-btn {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.8rem;
  }
  .power {
    marginright: '45px';
  }
  .item-list:hover {
    background-image: linear-gradient(to right, rgb(178, 188, 75), rgb(254, 198, 78), rgb(226, 17, 142), rgb(86, 75, 143));
    we: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

export default IndexStyles
