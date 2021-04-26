import { css } from 'emotion'

const FeaturesStyles = css`
  .justify-content {
    justify-content: center;
  }
  .mr3 {
    margin-right: 3rem;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    button {
      padding: 7px;
    }
    .justify-content {
      justify-content: space-around !important;
    }
    .mr3 {
      margin-right: 2rem;
    }
    p {
      min-height: 92px !important;
    }
  }
  .dark .feature-button:not(:hover) {
    border-color: #fff;
    color: #fff;
  }
  .light .feature-button:not(:hover) {
    border-color: black;
    color: black;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    .justify-content div {
      width: 100%;
    }
  }
  p {
    font-size: 14px;
  }
  .btn-outline-secondary {
    font-size: 12px;
  }
`

export default FeaturesStyles
