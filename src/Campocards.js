import React from "react"
import styled from "styled-components"
import Seta from "./img/seta_play.png"
import Virar from "./img/seta_virar.png"
import Certo from "./img/icone_certo.png"
import Erro from "./img/icone_erro.png"
import quase from "./img/icone_quase.png"
function Zap(props) {
    console.log(props)
    const [estado, setEstado] = React.useState(props.estado)
    const [zap, setZap] = React.useState(props.estadozap)
    function Abrepergunta() {
        setEstado(estado + 1);
    }
    function funcaoZAP (){
        setZap(2)
        setEstado(estado + 1);
        props.concluir(1);
    }
    function funcaoErro (){
        setZap(1)
        setEstado(estado + 1);
        props.concluir(3);
    }
    function funcaoQuase(){
        setZap(3)
        setEstado(estado + 1);
        props.concluir(2);
        console.log(zap)
    }

    if (estado === 1) {
        return (
            <Perguntaaberta>
                <p> {props.question} </p>
                <img src={Virar} onClick={Abrepergunta} />
            </Perguntaaberta>
        )
    }
    if (estado === 2) {
        return (
            <Perguntaaberta>
                <p>{props.answer}</p>
                <caixabotoes>
                    <button onClick={funcaoErro}> Não lembrei</button>
                    <button onClick={funcaoQuase}>Quase não lembrei</button>
                    <button onClick={funcaoZAP}> Truco com Zap!</button>
                </caixabotoes>
            </Perguntaaberta>
        )
    }
    if (estado === 3) {
        return (
            <Perguntaconcluida concluido = {zap}>
                <p>Pergunta {props.numero}</p>
                <img src = { zap === 3? quase : (zap === 2 ? Certo : Erro )} />
            </Perguntaconcluida>
        )
    } else {


        return (
            <div className='pergunta-fechada'>
                <p> Pergunta {props.numero} </p>
                <img src={Seta} onClick={Abrepergunta} />
            </div>
        )
    }
}

export default function Campocards(props) {


    const zaps = [
        { zap :0,  situacao: 0, index: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript" },
        { zap :0, situacao: 0, index: 2, question: "O React é ___", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { zap :0, situacao: 0, index: 3, question: "Componentes devem iniciar com ____", answer: "Letra Maiúscula" },
        { zap :0, situacao: 0, index: 4, question: "Podemos colocar ___ dentro do JSX", answer: "expressões" },
        { zap :0, situacao: 0, index: 5, question: "O ReactDOM nos ajuda ____?", answer: "Interagindo com a DOM para colocar componentes React" },
        { zap :0, situacao: 0, index: 6, question: "Usamos o npm para ____?", answer: "gerenciar os pacotes necessários e suas dependencias" },
        { zap :0, situacao: 0, index: 7, question: "Usamos props para____", answer: "Passar diferentes informações para os componentes" },
        { zap :0, situacao: 0, index: 8, question: "Usamos estado (state) para ___", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ];

    return (
        <Caixacampo comecou={props.comecou} >
            {zaps.map((s, index) => <Zap
                numero={s.index}
                question={s.question}
                answer={s.answer}
                estado={s.situacao}
                estadozap = {s.zap}
                concluidos = {props.terminados}
                concluir = {props.funcao}
            />)}
        </Caixacampo>

    )
}
const Perguntaaberta = styled.div`
width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img{ position: absolute;
    bottom: 10px;
    right: 10px;}`; 
const Perguntaconcluida = styled.div`
text-decoration: line-through;
color: ${(props) => props.concluido === 1? "#FF3030" : (props.concluido === 3? "#FF922E" : "#2FBE34") };
width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
const Caixacampo = styled.div`
z-index: ${(props) => props.comecou === true ? '1' : '0'};
position: absolute;
top: 100px;
overflow-y: scroll;
width: 375px;
height: 350px;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 100px;
box-sizing: border-box;
background-color: #FB6B6B;
caixabotoes{
    height: 35px;
    width: 375px;
    align-items:center;
    justify-content: space-around;

}
button{
    width: 85px;
    height:33px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;  
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-right: 5px;
}`
