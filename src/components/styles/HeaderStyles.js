import { css } from 'emotion'

export default css`
    .rms-item {
        padding: 0px !important;
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
        /* padding: 5vmin;
    box-sizing: border-box;
    display: flex;
    gap: 5vmin;
    flex-wrap: wrap;
    place-content: center;
    font-family: system-ui; */
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

    .new-to-rms:hover {
        background-color: white !important;
        cursor: alias !important;
    }
    .nav-link {
        color: rgba(0, 0, 0, 0.9) !important;
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
    /* .light .image-url {
    background-image: url(../../public/assets/logo.jpg);
} */
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

    .with-label {
        text-align: center;
    }
`
