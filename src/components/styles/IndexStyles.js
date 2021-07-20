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
    .my-rms {
        margin-left: -120px;
        position: absolute;
        width: 255px !important;
        padding: 14px !important;
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
    .padding-top {
        padding-top: 40px;
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
    .switch {
        display: inline-block;
        position: relative;
    }

    .switchinput {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        width: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }

    .switchlabel {
        margin-left: -14px;
        position: relative;
        display: inline-block;
        width: 80px;
        height: 42px;
        background-color: #2b2b2b;
        border: 5px solid #5b5b5b;
        border-radius: 9999px;
        cursor: pointer;
        -webkit-transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
        transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    }

    .switchindicator {
        position: absolute;
        top: 50%;
        left: 51%;
        -webkit-transform: translate(-50%, -50%) translateX(-72%);
        -ms-transform: translate(-50%, -50%) translateX(-72%);
        -webkit-transform: translate(-50%, -50%) translateX(-72%);
        -ms-transform: translate(-50%, -50%) translateX(-72%);
        transform: translate(-50%, -50%) translateX(-72%);
        display: block;
        width: 26px;
        height: 26px;
        background-color: #7b7b7b;
        border-radius: 9999px;
        box-shadow: 10px 0px 0 0 rgba(#000000, 0.2) inset;
    }
    .switchindicator::before,
    .switchindicator::after {
        position: absolute;
        content: '';
        display: block;
        background-color: #ffffff;
        border-radius: 9999px;
    }

    .switchindicator::before {
        top: 7px;
        left: 7px;
        width: 9px;
        height: 9px;
        background-color: #ffffff;
        opacity: 0.6;
    }

    .switchindicator::after {
        bottom: 8px;
        right: 6px;
        width: 6px;
        height: 6px;
        background-color: #ffffff;
        opacity: 0.8;
    }

    .switchdecoration {
        position: absolute;
        top: 65%;
        left: 50%;
        display: block;
        width: 5px;
        height: 5px;
        background-color: #ffffff;
        border-radius: 9999px;
        animation: twinkle 0.8s infinite -0.6s;
    }

    .switchdecoration::after,
    .switchdecoration::before {
        position: absolute;
        display: block;
        content: '';
        width: 5px;
        height: 5px;
        background-color: #ffffff;
        border-radius: 9999px;
    }
    .switchdecoration::before {
        top: -20px;
        left: 10px;
        opacity: 1;
        animation: twinkle 0.6s infinite;
    }

    .switchdecoration::after {
        top: -7px;
        left: 30px;
        animation: twinkle 0.6s infinite -0.2s;
    }

    @keyframes twinkle {
        50% {
            opacity: 0.2;
        }
    }

    .switchindicator,
    .switchindicator::after,
    .switchindicator::before {
        transition: all 0.4s cubic-bezier(0.46, 0.03, 0.52, 0.96);
    }

    .switchinput:checked + .switchlabel {
        background-color: #8fb5f5;
        border-color: #347cf8;

        .switchindicator {
            background-color: #ecd21f;
            box-shadow: none;
            transform: translate(-50%, -50%) translateX(72%);

            &::before,
            &::after {
                display: none;
            }
        }

        .switchdecoration {
            top: 50%;
            transform: translate(0%, -50%);
            animation: cloud 8s linear infinite;

            width: 20px;
            height: 20px;

            &::before {
                width: 10px;
                height: 10px;
                top: auto;
                bottom: 0;
                left: -8px;
                animation: none;
            }

            &::after {
                width: 15px;
                height: 15px;
                top: auto;
                bottom: 0;
                left: 16px;
                animation: none;
            }

            &,
            &::before,
            &::after {
                border-radius: 9999px 9999px 0 0;
            }

            &::after {
                border-bottom-right-radius: 9999px;
            }
        }
    }
    .my-rms > li > a:hover {
        border-left: 4px solid #d63384;
        padding-left: 8px;
    }
    .dropdown-menu {
        border: 1px silide gray !important;
    }
    .darkto {
        width: 207px;
    }
    @keyframes cloud {
        0% {
            transform: translate(0%, -50%);
        }
        50% {
            transform: translate(-50%, -50%);
        }
        100% {
            transform: translate(0%, -50%);
        }
    }
    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        display: flex;
        padding: 0px !important;
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

    .header-top {
        width: 100% !important;
    }
    .description {
        padding-top: 1.5rem;
    }

    .header-container {
        background-color: #fff;
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
    .dropdown:hover > .dropdown-menu {
        display: block;
    }
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
    /* .light .image-url {
    background-image: url(../../public/assets/logo.jpg);
} */
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

    .flex {
        padding: 5px;
    }

    .dark-mode-toggle {
        display: flex;
        height: 140px !important;
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

    .dark-mode-toggle > button {
        color: #999;
        &:last-child {
            color: lightblue;
        }
    }

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

    .with-label {
        text-align: center;
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
        -webkit-background-clip: text;
    }

    .dark a:hover {
        color: #ea1b83 !important;
        background-image: linear-gradient(
            to right,
            rgb(178, 188, 75),
            rgb(254, 198, 78),
            rgb(226, 17, 142),
            rgb(86, 75, 143)
        );
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
    .flex {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .item-list:hover {
        background-image: linear-gradient(
            to right,
            rgb(178, 188, 75),
            rgb(254, 198, 78),
            rgb(226, 17, 142),
            rgb(86, 75, 143)
        );
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
    .dark-mode-toggle {
        align-items: center;
        display: flex;
        height: 72px;
        justify-content: center;
    }
    .nav-link {
        font-weight: normal !important;
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
    .dropdown-item {
        font-weight: normal !important;
    }
`
