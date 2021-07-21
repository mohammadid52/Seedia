import { css } from 'emotion'

const AuthStyles = css`

.loginContainer.light {
    background-color: #fff !important;
    color: #333;
    transition: background-color 0.3s ease;
}
.loginContainer {
    background-color: #262d31 !important;
    color: #fff;
}

.container {
    display: grid;
    float: left;
    max-width: 560px;
    height: 100%;
    position: absolute;
    width: 100% !important;
}

.logo {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}
.bodylogin{
    display:flex
}

.create-account {
    text-align: center;
    margin-top: 0.5rem;
    font-size: 18px;
}

.agreement {
    margin-top: 1rem;
    font-size: 13px;
}

.card_layout {
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 12px;
    padding: 24px 32px 32px;
    border-radius: 8px;
    margin: 0px auto;
    background: rgb(255, 255, 255);
    width:460px;
}

.box-area {
    width: 528px;
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 12px;
    padding: 10px 32px 5px;
    border-radius: 8px;
    margin: 0px auto;
    background: rgb(255, 255, 255);
}
.business-account,
.student-account {
    display: block;
    margin: auto;
    width: 300px;
    background-color: rgb(255, 255, 255);
    color: black;
    border-color: black;
}

p {
    margin-bottom:1rem;
}
.forgot-password {
    position: relative;
    margin-top: 8px;
    background-color: rgba(0, 0, 0, 0);
    border: 0px;
    text-align: center;
    text-decoration: none;
    transition-duration: 167ms;
    transition-property: background-color, box-shadow, color, -webkit-box-shadow;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    color: rgb(0, 96, 151);
    font-weight:600;
    font-size:1rem;
    transition: all 150ms ease-in-out;
}

.footer {
    margin-top:2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.save-button {
    
    width: 335px;
    border: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    cursor: pointer;
    
    display: inline-block;
    font-size: 1rem;
    font-weight: 600;
    font-family: inherit;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
    outline-width: 2px;
    padding: 0px 24px;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition-duration: 167ms;
    transition-property: background-color, box-shadow, color, -webkit-box-shadow;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    vertical-align: middle;
    z-index: 0;
    background-image: linear-gradient(to right, rgb(178, 188, 75), rgb(254, 198, 78), rgb(226, 17, 142), rgb(86, 75, 143));
    border-radius: 28px !important;
}
.join-now {
    margin: 40px 0px 0px !important;
    font-size:16px !important;
}
.log-in-span {
    text-decoration: none;
    font-weight: 600;
    background-color: transparent;
    border: 0px;
    color: rgb(0, 115, 177);
}
}
}
`

export default AuthStyles
