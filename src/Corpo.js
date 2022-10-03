import React from "react"
import styled from "styled-components"
import Logo from "./img/logo.png"
import Campocards from "./Campocards"

export default function Corpo(props) {
   
    
    const [concluidos, setConcluidos]= React.useState(0)
    const [textometa, setTextometa] = React.useState("")
    const [zaps, setZaps] = React.useState(0)

    let concluir = function (num){
        setConcluidos(concluidos+1)
        console.log(props.metazapps)
        console.log(concluidos)
        if(num === 1){
            setZaps(zaps+1)
        }
        if(concluidos === 7){
            
            if(zaps >= props.metazapps){
                setTextometa("Parabéns, você atingiu sua meta!")
            }
            else{
                setTextometa("Oh não! Você não bateu a meta, mula.")
            }
        }
        
        
    }
    return(
        <Caixacorpo comecou = {props.comecou}>
            <header> 
                <img src={Logo}/>
                <h2> Zap Recall</h2>
            </header>
            <Campocards terminados={concluidos} funcao = {concluir}  />
            <footer>
                <h2>{concluidos}/ 8 CONCLUÍDOS</h2>
                <h2>{textometa}</h2>

            </footer>
            
        </Caixacorpo>
    )
}
const Caixacorpo = styled.div`

z-index: ${(props)=> props.comecou === true? '1' : '0'};
position: absolute;
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
align-items: center;

margin: 0px;
padding: 0px;
padding-bottom: 100px;
box-sizing: border-box;
background-color: #FB6B6B;
header{
    h2{
        margin-left: 10px;
        font-family: Righteous;
        color: white;
    }
    
    font-size: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    display: flex;
    height: 50px;
    img{
        height:60px;
        width: 60px;
        margin-right: 10px;
        margin-top:10px;

    };
};
footer{
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 375px;
    position: absolute;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    font-family: Righteous;
    color: black;
    font-size: 12px;    
    background-color: white;
     
}`;
    

