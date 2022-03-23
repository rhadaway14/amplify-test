import styled from 'styled-components';

export const Case = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Cardo, sans-serif;
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #000;
`;

export const ANC = styled.a`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    border: 2px solid #000;
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    font-size: 20px;
    transition-delay: 1.25s;
    
    &:hover {
        background: white;
        color:black
        // border: 2px solid #fff;
    }
    &:before {
        content: '';
        position: absolute;
        top: 6px;
        left: -2px;
        width: calc(100% + 4px);
        height: calc(100% - 12px);
        background: #fff;
        // background: red;
        transition: 0.5s ease-in-out;
        transform: scaleY(1);
        transition-delay: 0.5s
    }
    &:hover:before {
        transform: scaleY(0);
        
    }
    &:after {
        content: '';
        position: absolute;
        left: 6px;
        top: -2px;
        height: calc(100% + 4px);
        width: calc(100% - 12px);
        background: #fff;
        // background: red;
        transition: 0.5s ease-in-out;
        transform: scaleX(1);
        z-index: 3;
    }
    &:hover:after {
        transform: scaleX(0);
    }
`;

export const BSpan = styled.span`
    position: relative;
    color: black;
    z-index: 4;
`;