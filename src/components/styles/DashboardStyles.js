import { css } from 'emotion'

const DashboardStyles = css`
    .sidebar-toggled {
        padding-left: 13rem;
    }

    .left-col-panel {
        max-width: 850px !important;
    }

    .col-lg-2 {
        width: 16.6666666667%;
    }

    .card {
        position: relative;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: column;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;

        border: 1px solid rgba(0, 0, 0, 0.125);
    }

    .card-body {
        // margin-bottom: 2rem;
        border-color: rgb(255, 255, 255);
        color: rgb(51, 51, 51);
        padding: 1rem !important;
        background-color: rgb(255, 255, 255) !important;
    }

    .feed-identity {
        background-image: var(--entity-background-person);
        background-position: center center;
        background-size: 462px;
    }

    .profile-image {
        padding: 12px 12px 16px;
        border-bottom-color: var(--color-border-faint);
    }

    .profile-img-large {
        border-radius: 7rem !important;
        height: 170px !important;
        width: 170px !important;
    }
    .my-items {
        margin-top: -8px;
    }

    .light.my-items:hover {
        background-image: linear-gradient(
            to right top,
            rgb(242, 242, 242),
            rgb(242, 242, 242),
            rgb(242, 242, 242),
            rgb(242, 242, 242),
            rgb(242, 242, 242)
        );
        margin-top: -8px;
    }

    .more-activities {
        margin-top: -8px;
        margin-bottom: 0rem !important;
    }

    .light.more-activities:hover {
        background-image: linear-gradient(
            to right top,
            rgb(242, 242, 242),
            rgb(242, 242, 242),
            rgb(242, 242, 242),
            rgb(242, 242, 242),
            rgb(242, 242, 242)
        );
        margin-top: -8px;
    }

    h6 {
        font-weight: 600;
        text-align: center;
    }

    h6:hover,
    .add-photo:hover,
    .post-new-feed .post-options:hover {
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
        cursor: pointer;
    }

    .light h6 {
        cursor: pointer;
    }

    .profile-name {
        font-family: Roboto;
        font-weight: bold;
        font-size: 22px;
        line-height: 100%;
        vertical-align: top;
        color: rgb(24, 24, 24);
    }

    .add-photo {
        color: rgb(0, 115, 177);
        text-align: center;
    }

    .profile-img-small {
        border-radius: 38px !important;
        width: 55px !important;
        height: 55px !important;
        float: left !important;
    }

    .input-search-button {
        font-weight: 500;
        margin: 0px 0px 0px 1rem;
        font-size: 1rem;
        text-align: left;
        line-height: 1.5;
        border: 1px solid darkgray;
        height: 3.5rem;
        background-color: rgb(255, 255, 255);
        color: dimgray;
        width: 83%;
        border-radius: 35px !important;
        padding-left: 16px !important;
    }

    .light .card-width {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px;
    }
    .profile-img-medium {
        border-radius: 38px !important;
        width: 75px !important;
        height: 75px !important;
        float: left !important;
    }
    .contact-button {
        background: linear-gradient(
                to right,
                rgb(178, 188, 75),
                rgb(254, 198, 78),
                rgb(226, 17, 142),
                rgb(86, 75, 143)
            )
            white;
        border-radius: 16px;
        font-weight: 500;
        border: 2px solid;
        height: 55px;
        padding: 10px;
    }

    .submit-post-btn {
        background: linear-gradient(
                to right,
                rgb(178, 188, 75),
                rgb(254, 198, 78),
                rgb(226, 17, 142),
                rgb(86, 75, 143)
            )
            white;
        border-radius: 12px;
        font-weight: 500;
        border: 2px solid;
    }

    .like-section {
        text-align: center;
        border-radius: 6px !important;
    }

    .light.like-section:hover {
        background-image: linear-gradient(
            to right top,
            rgb(229, 229, 229),
            rgb(229, 229, 229),
            rgb(229, 229, 229),
            rgb(229, 229, 229),
            rgb(229, 229, 229)
        ) !important;
    }
    .post-options {
        padding: 10px;
    }
    .post-options .item-label {
        margin-left: 0.5rem;
    }

    .visitor-head {
        font-family: Arial;
        font-style: italic;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
        color: rgb(24, 24, 24);
    }

    .view-all {
        font-family: Arial;
        font-style: italic;
        font-weight: bold;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;
    }
    .view-all ul li::marker {
        content: '•';
        color: rgb(2, 117, 177) !important;
        display: inline-block;
        width: 1em;
    }

    .view-all ul li p {
        color: rgb(120, 113, 113);
        font-weight: 100;
    }

    .view-all ul li h6,
    .view-all ul li p {
        margin-left: 1rem;
    }
`

export default DashboardStyles
