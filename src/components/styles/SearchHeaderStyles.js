import { css } from 'emotion'

const SearchHeaderStyles = css`
    .input-search {
        width: 75%;
        height: 100%;
        border: none;
    }
    .input-search:focus {
        outline: none !important;
    }
    button {
        background: #fff;
        padding: 2px 8px;
        border: 1px solid #1d1818;
        border-radius: 2px;
    }
    .dropdown-menu {
        padding: 14px;
        z-index: 1 !important;
        position: absolute;
        border: 1px solid gray !important;
    }
    .dropdown-menu input {
        margin-right: 8px;
    }
    .dropdown-menu label {
        margin-right: 8px;
    }
    .dropdown-menu a {
        padding-left: 0 !important;
    }
    .light .navbar {
        background: #fff !important;
    }
    .dark .navbar {
        background-color: #313231 !important;
    }
    .collapse:not(.show) {
        display: block !important;
    }
    .col-md-6,
    .col-lg-6,
    .col-lg-2 {
        float: left;
    }
    .country-list ul {
        // margin-left: 15px;
    }
    .search-country {
        background-color: white;
        height: 38px !important;
    }
    .you-are-on:hover {
        background-color: white !important;
        cursor: alias !important;
    }
    .css-yk16xz-control {
        border: none !important;
        border-radius: 0px !important;
        height: 100% !important;
    }
    .css-1pahdxg-control:hover {
        border-color: white !important;

        box-shadow: none !important;
        border-radius: 0px !important;
    }
    .css-1pahdxg-control:focus-within {
        border-color: white !important;

        box-shadow: none !important;
        border-radius: 0px !important;
    }
    .light .search-panel {
        border: 5px solid transparent;
        box-shadow: 0 0px 0px 2px rgba(64, 60, 67, 0.1);
    }
    .dark .search-panel {
        border: 5px solid transparent;
        box-shadow: 0 0px 0px 2px rgba(64, 60, 67, 0.1);
    }

    .search-quote {
        border: 2px solid transparent;
        // border-radius: 4px;
        margin-left: 12px !important;
        margin-right: 12px !important;
        height: 2.5rem;
        border-top: none;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        box-shadow: 0 0px 0px 2px rgba(64, 60, 67, 0.1);
    }
    .dark.search-quote {
        background-color: #fff;
    }
    .dark .navbar {
        background-color: #262d31 !important;
    }
    .dark .navbar-collapse {
        background: #262d31 !important;
    }
    .dark .search-panel {
        border: none !important;
    }
    .product {
        border-left: none !important;
    }
    @media only screen and (max-width: 767px) {
         {
            padding: 0 18px;
            width: 90% !important;
        }
        .col-md-6 {
            width: 100% !important;
            margin-bottom: 12px;
            div,
            a {
                margin: 0 !important;
            }
        }
        .input-search {
            width: 60%;
        }
        .dropdown-toggle::after {
            position: absolute;
            margin-top: 12px;
            right: 12px;
        }
        .country-list ul {
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
        .search-quote {
            // border: 2px solid black !important;
            height: auto !important;
            // margin: 0 !important;
            margin-left: -12px !important;
            margin-right: -12px !important;
        }
        .dark.search-quote {
            height: auto !important;
            margin-left: 2px !important;
            margin-right: 2px !important;
        }
        .search-quote p {
            margin-bottom: 1rem !important;
        }
        .light .search-panel {
            border: none !important;
        }
        .light .column {
            border: 2px solid black !important;
            border-radius: 4px !important;
            height: 42px !important;
        }
        .light .search-country {
            height: 34px !important;
        }
        .col {
            margin-top: 8px !important;
        }
        .link-tag {
            margin-top: 0px !important;
        }
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        .light .navbar-collapse {
            margin-left: 24px;
            margin-right: 24px;
        }
        .input-search {
            width: 60%;
        }
        button {
            right: 0;
        }
        .col-md-6 {
            width: 50%;
            display: inline-block;
            float: none;
        }
        .light .highlite-area {
            border: 2px solid;
            margin-right: 12px;
        }
        .country-list ul {
            margin: 0 15px 0 0 !important;
        }

        .light .search-panel {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }
        .products .css-yk16xz-control {
            border-radius: 0px !important;
        }
        .light .item {
            border-radius: 0px !important;
        }
        .input-search {
            height: 37px !important;
        }
        .col {
            margin-top: 8px;
        }
    }
    @media only screen and (min-width: 1024px) and (max-width: 1600px) {
        .light .search-panel {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }
        .dark .search-panel {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
            border-color: white !important;
        }
        .products .css-yk16xz-control {
            border-radius: 0px !important;
        }

        .input-search {
            height: 37px !important;
            width: 80% !important;
        }
        .dark .input-search {
            height: 38px !important;
        }
        .light .column {
            height: 38px !important;
            border-left: 1px solid #dfe1e5;
        }
        .dark .column {
            height: 38px !important;
            border-left: 0.8px solid #dfe1e5;
        }
        .light .search-area {
        }
        .country-list {
            border-right: none !important;
        }

        .dark .search-panel {
            border: 1px solid #fff;
        }
        .col {
            margin-top: 8px;
        }
    }
    @media only screen and (min-width: 1714px) and (max-width: 2059px) {
        .light .search-panel {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }
        .products .css-yk16xz-control {
            border-radius: 0px !important;
        }
        .products {
            height: 37px !important;
        }

        .input-search {
            height: 37px !important;
        }
        .light .column {
            height: 37px !important;
            border-left: 1px solid #dfe1e5;
        }
        .dark .column {
            border-left: 1px solid #dfe1e5;
        }
        .light .search-area {
        }
    }
    .dark .css-4ljt47-MenuList {
        color: black !important;
    }
    // .light .highlite-area {
    //
    //   border-radius: 5px !important;
    //   height: 42px;
    // }
    .highlite-area {
        background-color: white;
    }
    .left-auto {
        left: auto !important;
    }
    .country-list .dropdown-toggle {
        padding: 4px 8px !important;
    }
    .country-list .dropdown-toggle::after {
        right: 0;
        position: absolute;
        margin-top: 12px;
        margin-right: 8px;
    }
    .light .country-list {
        background: #fff;
        border-radius: 4px;
        height: 38px;
    }
    @media only screen and (min-width: 992px) and (max-width: 1023px) {
        .highlite-area {
            margin-bottom: 16px;
        }
        .search-quote {
            border-radius: 4px;
            margin-left: 12px !important;
            margin-right: 12px !important;
            height: 2.5rem;

            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        .light .search-panel {
            border-bottom-left-radius: 0 !important;
            border-bottom-right-radius: 0 !important;
        }
        .light .column {
            height: 38px !important;
            border-left: 1px solid #dfe1e5;
        }
        .dark .column {
            border-left: 1px solid #dfe1e5;
        }
    }
    .css-4ljt47-MenuList {
        max-height: 200px !important;
    }
    // .light .search-area {
    //   border-radius: 0px !important;
    // }
    // .dark .search-area {
    //   border-radius: 0px !important;
    //   height: 38px !important;
    //   border-right: 1px solid black !important;
    // }
    .search-area {
    }
    .column {
        height: 38px !important;
    }
    .light .search-panel {
        border-radius: 0px;
    }
    .css-26l3qy-menu {
        color: black !important;
        width: 200px;
    }
    .department-section .css-26l3qy-menu {
        width: 265px;
    }
    .css-11unzgr {
        max-height: 200px !important;
    }
    .dark .search-link {
        color: #fff;
        text-decoration: none;
        border-right: 1px solid #dfe1e5;
    }
    .light .search-link {
        color: black;
        text-decoration: none;
        border-right: 1px solid #dfe1e5;
    }
    .dark .spotlights {
        border-right: none !important;
    }
    .light .spotlights {
        border-right: none !important;
    }
    .search-link:hover {
        color: #0d6efd;
        text-decoration: underline;
    }
    .css-yt9ioa-option,
    .css-1n7v3ny-option,
    .css-9gakcf-option {
        font-size: 14px !important;
    }
    .css-1n7v3ny-option {
        font-size: 14px !important;
    }
    p,
    a,
    .radio-inline,
    span {
        font-size: 14px !important;
    }
    .dropdown-menu {
        width: 272px;
    }
    .col {
        margin-left: 3px;
        margin-right: 3px;
        padding-left: 0px;
        padding-right: 0px;
        margin-top: 2px;
    }
    .link-tag {
        text-align: center;
        display: grid;
        margin-top: 6px;
        font-weight: 500;
        color: #4e474b !important;
    }

    .link-tag:hover {
        color: #0d6efd !important;
    }
    .country-list .dropdown-toggle::after {
        color: black;
    }

    .css-1uccc91-singleValue {
        font-size: 14px;
    }

    .css-g1d714-ValueContainer {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        -webkit-box-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: 2px 8px;
        -webkit-overflow-scrolling: touch;
        position: relative;
        overflow: hidden;
        box-sizing: border-box;
        height: 100%;
    }

    .dark .input-box {
        background-color: #fff;
    }
    .pointer-span:hover {
        background-image: linear-gradient(
            to right,
            rgb(178, 188, 75),
            rgb(254, 198, 78),
            rgb(226, 17, 142),
            rgb(86, 75, 143)
        );
        we: text;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        // font-weight: 500;
    }
    .pointer-span {
        // font-weight: 500;
        color: #15c;
    }
    .site-info {
        font-size: 13px !important;
        margin-top: 2px;
        margin-left: 10px;
    }
`

export default SearchHeaderStyles
