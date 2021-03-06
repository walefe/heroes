import { createGlobalStyle } from 'styled-components';

import "font-awesome/css/font-awesome.css";

createGlobalStyle`
 width: 400px;
    background: #fff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100px;
        margin: 10px 0 40px;
    }
    p {
        color: #ff3333;
        margin-bottom: 15px;
        border: 1px solid #ff3333;
        padding: 0 20px;
        width: 100%;
        text-align: center;
    }
    Input {
        flex: 1;
        height: 46px;
        margin-bottom: 15px;
        padding: 0 20px;
        color: #777;
        font-size: 15px;
        width: 100%;
        border: 1px solid #ddd;
        &::placeholder {
            color: #999;
        }
    }
    button {
        color: #fff;
        font-size: 16px;
        background: #fc6963;
        height: 56px;
        border: 0;
        border-radius: 5px;
        width: 100%;
    }
    button:hover {
     opacity: 0.8;
     cursor: pointer;
    }
    hr {
        margin: 20px 0;
        border: none;
        border-bottom: 1px solid #cdcdcd;
        width: 100%;
    }
    a {
        font-size: 16;
        font-weight:bold;
        color: #999;
        text-decoration: none;
    }
`;