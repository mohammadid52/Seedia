import { css } from 'emotion'

const SectionStyles = css`
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
  .promote{
    background-color:#f1ece5;
    padding-top:40px;
    padding-bottom:40px;

  }
  
  .buisness{
    padding-top:40px;
    padding-bottom:40px;
  }
  #dark{
    background: #262d31 !important;
    color:white;
    
    padding:50px;

  }
  .nopadding{
      padding:10px!important;
  }
  .pmin{
      min-height:0px!important;
      margin:0px!important;
  }
  .paddingtop{
      padding-top:20px!important;
  }
  #dark > li >a{
    color:white;
  }
  #dark > div > li >.dropdown-item{
    color:white;
  }
  .btnimg{
      position:relative;
      cursor:pointer;
  }
  .btntext{
      position:absolute;
      top: 26px;
    color: white;
    right: 32px;
    
  }
  .btntextme{
    position:absolute;
    top: 26px;
  color: white;
  right:44px;

  }
  .btntextmes{
    position:absolute;
    top: 26px;
  color: white;
  right:61px;
  }
  .btntextmed{
    position:absolute;
    top: 26px;
  color: white;
  right:49px;
  }
`

export default SectionStyles
