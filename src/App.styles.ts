import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
    margin: 0;
`;

export const Header = styled.div`
    width: 100%;
    height: 100px;
    background-color: #1A2029;
    display: flex;         
    justify-content: space-around;    
    position: fixed;
    left: 0;
    top: 0;
`;

export const HeaderItem = styled.div`
    margin: auto;
    h2 {
        font-size: 35px;
        font-family: 'Montserrat', sans-serif;
        color: #FFF;
        margin-top: -5px;
    }
    div {
        display: flex;  
        justify-content: center;
    }
    a {
        text-decorantion: none;
        color:#FFF;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
`;

export const HeaderNav = styled.div`

`;

export const Init = styled.div`
    width: 100%;
    height: 80vh;
    margin-top: 90px;
    background-color: #1A2029; 
    display: flex;       
    align-content: center;   
    justify-content: space-evenly;    
`;

export const InitItem = styled.div`    
    margin: auto;
    p {
        color: #FFF;        
        font-family: 'Montserrat', sans-serif;
        font-weight: 300;
        font-size: 17px;
    }
    .dev {
        width: 400px;
    }
    .wave {
        width: 35px;
    }
`;

export const H1 = styled.h1`
    color: #FFF;
    margin-top: 0px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 45px;
    letter-spacing: 8px;
`;


export const Introduction = styled.div`
`;

export const Techs = styled.div`
`;

export const Portfolio = styled.div`
`;

export const Footer = styled.div`
`;