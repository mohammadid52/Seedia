import { css } from 'emotion'

const HeaderV2Styles = css`
    .rms-item {
        padding: 0px !important;
    }
    .profile-img-medium {
        border-radius: 38px !important;
        width: 75px !important;
        height: 75px !important;
        user-select:none;
        float: left !important;
    }
    }
    .flex {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .iconmenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px;
    }

    .iconmenu span {
        font-weight: bold !important;
    }
    .iconmenu:hover span {
        color: #dc3545;
    }
    .right-header-column,
    .left-header-column {
    }
    .my-rms > li > a:hover {
        border-left: 4px solid #d63384;
        padding-left: 8px;
    }
    .neon-red {
        --neon: #ff5161;
        --neon-glow: #d30302;
        position: relative;
    }

    .drakneon {
        color: white;
        position: absolute;
        bottom: -16px;
        left: 11px;
        font-size: 2rem;
    }

    .neon-pink {
        --neon: #ff53cd;
        --neon-glow: #e10361;
    }

    .neon-purple {
        --neon: #9461fd;
        --neon-glow: #4003e6;
    }

    .neon-blue {
        --neon: #2dd9fe;
        --neon-glow: #00a3d5;
    }

    .neon-green {
        --neon: #00fe9b;
        --neon-glow: #02c435;
    }

    .neon-yellow {
        --neon: #ffdb4e;
        --neon-glow: #b48505;
    }

    .neon-white {
        --neon: #fefefe;
        --neon-glow: #ffffff;
    }

    @media (dynamic-range: high) {
        .neon-red {
            --neon-glow: color(display-p3 1 0 0);
        }

        .neon-pink {
            --neon-glow: color(display-p3 1 0 1);
        }

        .neon-purple {
            --neon-glow: color(display-p3 0 0 1);
        }

        .neon-blue {
            --neon-glow: color(display-p3 0 1 1);
        }

        .neon-green {
            --neon-glow: color(display-p3 0 1 0);
        }

        .neon-yellow {
            --neon-glow: color(display-p3 1 1 0);
        }

        .neon-white {
            --neon-glow: color(display-p3 1 1 1);
        }
    }

    .ring {
        border: 5px solid var(--neon);
        box-shadow: 0 0 50px var(--neon-glow), inset 0 0 60px var(--neon-glow);
        border-radius: 50%;
        width: 34px;
        height: 34px;
        position: relative;
        box-sizing: border-box;
        margin-bottom: 100px;
    }

    .power-btn {
        display: flex;
        justify-content: space-evenly;

        height: 45px;
    }

    html {
        block-size: 100%;
        inline-size: 100%;
        background-color: hsl(0 0% 5%);
    }

    body {
        min-block-size: 100%;
        min-inline-size: 100%;
        margin: 0;
        padding: 5vmin;
        box-sizing: border-box;
        display: flex;
        gap: 5vmin;
        flex-wrap: wrap;
        place-content: center;
        font-family: system-ui;
    }
    #dark {
        background: #262d31 !important;
        color: white;
    }
    #dark > li > a {
        color: white;
    }
    #dark > div > li > .dropdown-item {
        color: white;
    }
    .dropdown-menu {
        border: 1px solid gray !important;
    }
    .darkto {
        width: 207px;
    }
    .dark-mode-toggle {
        align-items: center;
        display: flex;
        height: 72px;
        justify-content: center;
    }
    .header-container {
        // background-color: #fff;
        min-height: 60px !important;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: calc(10px + 2vmin);
        // color: white;
        display: flex !important;
        border-bottom: 1px solid #ddd;
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
        padding-top: 0px;
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
    a:hover {
        color: #ea1b83 !important;
        background-image: linear-gradient(
            to right,
            rgb(178, 188, 75),
            rgb(254, 198, 78),
            rgb(226, 17, 142),
            rgb(86, 75, 143)
        );
    
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }
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
        width: 255px !important;
        padding: 14px !important;
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
        color:#000000E6 ;
        font-size:14px !important;
        font-weight:400;
    }
    .with-label {
        text-align: center;
    }

    .nav-item {
        margin-bottom: 0.5rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
    }

    .pointer-span:hover {
        color: #ea1b83 !important;
        background-image: linear-gradient(
            to right,
            rgb(178, 188, 75),
            rgb(254, 198, 78),
            rgb(226, 17, 142),
            rgb(86, 75, 143)
        );
    
        -webkit-text-fill-color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
    }

    .header-container .profile-page.navbar-nav {
        margin-left: 7rem;
        padding-top: 5px !important;
    }
    
    .pointer-span {
        color: rgb(17, 85, 204);
    }
    .header-container .dropdown-menu {
        padding: 14px;
    }
    @media (min-width: 992px) {
        .navbar-expand-lg .navbar-nav .dropdown-menu {
            position: absolute;
        }
    }

    .my-rms {
        margin-left: -120px !important;
        position: absolute;
        width: 255px !important;
        padding: 14px !important;
        
    }

    .dropdown-menu {
        border: 1px solid gray !important;
    }

    .navbar-nav .dropdown-menu {
        position: static;
    }

    .dropdown-menu.show {
        display: block;
    }

    .dropdown-menu[data-bs-popper] {
        top: 100%;
        left: 0;
        margin-top: .125rem;
    }

    .end-0 {
        right: 0!important;
    }

    .dropdown-menu {
        position: absolute;
        z-index: 1000;
        display: none;
        min-width: 10rem;
        padding: .5rem 0;
        margin: 0;
        font-size: 1rem;
        color: #212529;
        text-align: left;
        list-style: none;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0,0,0,.15);
        border-radius: .25rem;
    }
    .dropdown, .dropend, .dropstart, .dropup {
        position: relative;
    }
    .header-container .dropdown-menu {
        padding: 14px;
    }

     .button-list {
        text-align: center;
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
    }

    .header-container .dropdown-item {
        padding-left: 0px;
    }
    .header-container li {
        text-align: center;
        font-size: 16px !important;
    }
    .sell-button {
        padding: 6px 8px;
        width: 170px;
        border: 1px solid !important;
        border-radius: 5px;
        margin-bottom: 6px;
        color: rgba(0, 0, 0, 0.87);
        padding: 6px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        box-sizing: border-box;
        transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
    }
    .dropdown-item {
        display: block;
        width: 100%;
        padding: .25rem 1rem;
        clear: both;
        font-weight: 400;
        color: #212529;
        text-align: inherit;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border: 0;
    }

    .account-item {
        padding: 3px !important;
    }
    .my-rms > li > a:hover {
        border-left: 4px solid rgb(214, 51, 132);
        padding-left: 8px;
    }

    .sell {
        margin-left: -110px;
        position: absolute;
        width: 270px;
    }

     .business-app {
        margin-left: auto;
        position: absolute;
        width: 540px;
        left: auto;
        padding: 14px !important;
        right: 0px !important;
    }

    .iconmenu {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        align-items: center;
        padding: 12px;
    }
    .loop-div {
        display: inline-block;
        width: 165px;
        text-align: center;
        margin-bottom: 8px;
        padding-top: 4px;
        vertical-align: top;
        margin-top: 10px;
    }
`

export default HeaderV2Styles
