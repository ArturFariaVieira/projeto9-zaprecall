import React from "react"
import styled from "styled-components"
import Logo from "./img/logo.png"
import Campocards from "./Campocards"
import Certo from "./img/icone_certo.png"
import Erro from "./img/icone_erro.png"
import quase from "./img/icone_quase.png"

export default function Corpo(props) {
   
    
    const [concluidos, setConcluidos]= React.useState(0)
    const [arrayicones, setArrayicones] = React.useState([0])
    let concluir = function (index){
        setConcluidos(concluidos+1)
        if(index === 1){
            let newarray = arrayicones;
            newarray.push(Certo)
            setArrayicones(...newarray)
            console.log(arrayicones)
        }
        if(index === 2){
            let icone = quase;
            setArrayicones(...quase)
            console.log(arrayicones)
        }
        if(index === 3){
            
            setArrayicones(...Erro)
            console.log(arrayicones)
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
                <Caixaicones>
                    {arrayicones.map((s) => 
                        <>
                            <img src={s}/>
                        </>
                    )}
                </Caixaicones>

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
        margin-left: 30px;
    }
    font-family: Righteous;
    color: white;
    font-size: 16px;
    margin-left: 50px;
    margin-top: 15px;
    display: flex;
    height: 50px;
    &&:img{
        height:52px;
        width: 60px;
        margin-right: 40px;
        margin-top: 15px;

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
    font-size: 16px;    
    background-color: white;
    h2{
        align-items: center;
        justify-content: center;
    }
   
};
    
}`;
const Caixaicones = styled.div`
display: flex;
height: 50px;
width: 375px;
align-items: center;
justify-content: center;
    &&:img{
        height:52px;
        width: 60px;
        margin-right: 40px;
        margin-top: 15px;

    };
`