import { css } from 'emotion'

const SidebarStyles = css`
    #header {
        width: 220px;
    }
    #header .pro-sidebar.collapsed {
        width: 80px;
        min-width: 80px;
    }
    #header .pro-sidebar {
        position: fixed;
    }

    #header .pro-sidebar {
        height: 100vh;
    }
    .pro-sidebar {
        color: #adadad;
        height: 100%;
        width: 270px;
        min-width: 270px;
        text-align: left;
        transition: width, left, right, 0.3s;
        position: relative;
        z-index: 1009;
    }
    .pro-sidebar > .pro-sidebar-inner {
        background: #1d1d1d;
        height: 100%;
        position: relative;
        z-index: 101;
    }
    .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout {
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        z-index: 101;
    }

    .company-logo {
        float: right;
        margin-right: 16px;
        margin-top: -48px;
    }
    .company-logo img {
        width: 4rem;
        height: 4rem;
        user-select: none;
        margin-bottom: 1rem;
    }

    #header .pro-sidebar-inner {
        background-color: #fff;
        box-shadow: 0.5px 0.866px 2px 0 rgba(0, 0, 0, 0.15);
    }

    #header .pro-sidebar-inner .pro-sidebar-layout {
        overflow-y: hidden;
    }

    #header .closemenu {
        color: #000;
        right: 0;
        z-index: 9999;
        line-height: 20px;
        border-radius: 50%;
        font-weight: 700;
        font-size: 40px;
        top: 55px;
        cursor: pointer;
        margin-top: 18px;
        margin-left: 18px;
    }

    .pro-sidebar
        > .pro-sidebar-inner
        > .pro-sidebar-layout
        .pro-sidebar-header {
        border-bottom: 1px solid hsla(0, 0%, 67.8%, 0.2);
    }

    .pro-sidebar
        > .pro-sidebar-inner
        > .pro-sidebar-layout
        .pro-sidebar-content {
        -webkit-flex-grow: 1;
        flex-grow: 1;
    }

    .pro-sidebar .pro-menu {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    #header .pro-sidebar-inner .pro-sidebar-layout ul {
        padding: 0 5px;
    }
    .pro-sidebar > .pro-sidebar-inner > .pro-sidebar-layout ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    #header .pro-sidebar-inner .pro-sidebar-layout .active {
        background-image: linear-gradient(
            to right top,
            #e5e5e5,
            #e5e5e5,
            #e5e5e5,
            #e5e5e5,
            #e5e5e5
        );
    }

    .pro-sidebar.collapsed .pro-menu > ul > .pro-menu-item {
        position: relative;
    }

    .pro-sidebar .pro-menu .pro-menu-item.active {
        color: #d8d8d8;
    }

    .pro-sidebar .pro-menu .pro-menu-item {
        font-size: 15px;
        user-select: none;
    }

    .pro-sidebar.collapsed .pro-menu > ul > .pro-menu-item:before {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        cursor: pointer;
    }
    #header .pro-menu-item:hover {
        background-image: linear-gradient(
            to right top,
            #f2f2f2,
            #f2f2f2,
            #f2f2f2,
            #f2f2f2,
            #f2f2f2
        );
    }
    #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item {
        color: #000;
        margin: 10px 0;
        font-weight: 700;
    }
    .pro-sidebar .pro-menu .pro-menu-item > .pro-inner-item {
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        padding: 8px 35px 8px 20px;
        cursor: pointer;
    }
    #header
        .pro-sidebar-inner
        .pro-sidebar-layout
        ul
        .pro-inner-item
        .pro-icon-wrapper {
        background-color: #fff;
        color: #000;
        border-radius: 3px;
    }

    .pro-sidebar
        .pro-menu.square
        .pro-menu-item
        > .pro-inner-item
        > .pro-icon-wrapper {
        border-radius: 0;
    }
    .pro-sidebar
        .pro-menu.shaped
        .pro-menu-item
        > .pro-inner-item
        > .pro-icon-wrapper {
        background-color: #2b2b2b;
    }

    .pro-sidebar
        .pro-menu
        .pro-menu-item
        > .pro-inner-item
        > .pro-icon-wrapper {
        margin-right: 10px;
        font-size: 14px;
        width: 35px;
        min-width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        display: inline-block;
    }
    .pro-sidebar
        .pro-menu
        .pro-menu-item
        > .pro-inner-item
        > .pro-icon-wrapper
        .pro-icon {
        display: -webkit-flex;
        display: flex;
        height: 100%;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: center;
        justify-content: center;
    }

    .pro-sidebar
        .pro-menu
        .pro-menu-item
        > .pro-inner-item
        > .pro-item-content {
        -webkit-flex-grow: 1;
        flex-grow: 1;
        -webkit-flex-shrink: 1;
        flex-shrink: 1;
    }

    .pro-sidebar
        .pro-menu
        .pro-menu-item
        > .pro-inner-item
        > .pro-item-content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .pro-sidebar
        > .pro-sidebar-inner
        > .pro-sidebar-layout
        .pro-sidebar-footer {
        border-top: 1px solid hsla(0, 0%, 67.8%, 0.2);
    }
    .pro-sidebar .pro-menu {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .pro-sidebar .overlay {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 100;
        display: none;
    }
`

export default SidebarStyles
