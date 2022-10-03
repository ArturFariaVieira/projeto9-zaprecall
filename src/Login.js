import React from "react"
import styled from "styled-components"
import Logo from "./img/logo.png"
export default function Login(props) {
    return (
        <Caixalogin comecou = {props.comecou}>
            <img src={Logo} alt="logologin" />
            <h2>Zapp Recall</h2>
            <input 
            placeholder="Qual a sua meta de Zapps?" 
            value= {props.metazapps}
            onChange = {e => props.setmeta(e.target.value)}/> 
            
            <select
            value = {props.baralho}
            onChange = {e => props.setbaralho(e.target.value)}>
                <option id="placeholder">Escolha seu deck</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>

            </select>
            <button onClick={() => props.func(props.metazapps, props.baralho )}>Iniciar Recall!</button>
        </Caixalogin>
    )
    }
const Caixalogin = styled.div`
z-index: ${(props) => props.comecou === false? '1' : '0'};
position: absolute;
width: 375px;
min-height: 667px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px;
padding: 0px;
padding-bottom: 100px;
box-sizing: border-box;
background-color: #FB6B6B;
button{
    
    margin-top:15px;
    width: 255px;
    height: 54px;
    background: #FFFFFF;
    border: 1px solid #D70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: Righteous;
    color: #D70900;
    font-size: 18px;
}
select {
    
    margin-top: 15px;
    height: 43px;
    width: 255px;
    border-radius: 5px;
    background: #FFFFFF;
}

input{
    height: 43px;
    width: 246px;
    border-radius: 5px;
    background: #FFFFFF;
}
img{
    height:161px;
    width: 136px;
}
h2{
    font-family: Righteous;
    color: white;
    font-size: 36px;
}`;