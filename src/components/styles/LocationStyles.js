import { css } from 'emotion'

const LocationStyles = css`
   {
    background-color: white;
    top: 100%;
    left: 0;
    width: 300px;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    display: table-cell;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 8px 12px;
  }

  li:hover {
    background-color: rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
  @media only screen and (min-width: 1024px) {
    border-radius: 4px;
    position: absolute;
    bottom: 48%;
    height: 430px;
    overflow: auto;
    top: -192px;
    left: 4%;
    width: 65%;
    li {
      width: 19%;
      float: left;
    }
  }
  .country-listing li:hover {
    background-color: #fff !important;
    color: #141414 !important;
  }
  .country-listing li {
    font-size: 12px !important;
    color: #525452 !important;
  }
  #dark{
    background: #262d31 !important;
    color:white;
  }
  #dark > li >a{
    color:white;
  }
  #dark > div > li >.dropdown-item{
    color:white;
  }
`

export default LocationStyles
