import { css } from 'emotion'

const ToggleStyles = css`
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
  .switch {
    display: inline-block;
    position: relative;
}

.switch__input {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
}

.switch__label {
  margin-left:-14px;
  position: relative;
  display: inline-block;
  width: 80px;
  height: 42px;
  background-color: #2B2B2B;
  border: 5px solid #5B5B5B;
  border-radius: 9999px;
  cursor: pointer;
  -webkit-transition: all 0.4s cubic-bezier(.46,.03,.52,.96);
  transition: all 0.4s cubic-bezier(.46,.03,.52,.96);
}

.switch__indicator {
  position: absolute;
    top: 50%;
    left: 51%;
    -webkit-transform: translate(-50%,-50%) translateX(-72%);
    -ms-transform: translate(-50%,-50%) translateX(-72%);
    -webkit-transform: translate(-50%,-50%) translateX(-72%);
    -ms-transform: translate(-50%,-50%) translateX(-72%);
    transform: translate(-50%,-50%) translateX(-72%);
    display: block;
    width: 26px;
    height: 26px;
    background-color: #7B7B7B;
    border-radius: 9999px;
    box-shadow: 10px 0px 0 0 rgba(#000000,0.2) inset;

    &::before,
    &::after {
        position: absolute;
        content: '';
        display: block;
        background-color: #FFFFFF;
        border-radius: 9999px;
    }

    &::before {
        top: 7px;
        left: 7px;
        width: 9px;
        height: 9px;
        background-color: #FFFFFF;
        opacity: 0.6;
    }

    &::after {
        bottom: 8px;
        right: 6px;
        width: 6px;
        height: 6px;
        background-color: #FFFFFF;
        opacity: 0.8;
    }
}

.switch__decoration {
    position: absolute;
    top: 65%;
    left: 50%;
    display: block;
    width: 5px;
    height: 5px;
    background-color: #FFFFFF;
    border-radius: 9999px;
    animation: twinkle 0.8s infinite -0.6s;

    &::before,
    &::after {
        position: absolute;
        display: block;
        content: '';
        width: 5px;
        height: 5px;
        background-color: #FFFFFF;
        border-radius: 9999px;
    }

    &::before {
        top: -20px;
        left: 10px;
        opacity: 1;
        animation: twinkle 0.6s infinite;
    }

    &::after {
        top: -7px;
        left: 30px;
        animation: twinkle 0.6s infinite -0.2s;
    }
}

@keyframes twinkle {
    50% { opacity: 0.2; }
}

.switch__indicator {
    &,
    &::before,
    &::after {
        transition: all 0.4s cubic-bezier(.46,.03,.52,.96);
    }
}

.switch__input:checked + .switch__label {
    background-color: #8FB5F5;
    border-color: #347CF8;

    .switch__indicator {
        background-color: #ECD21F;
        box-shadow: none;
        transform: translate(-50%, -50%) translateX(72%);

        &::before,
        &::after {
            display: none;
        }
    }

    .switch__decoration {
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

  
`

export default ToggleStyles
