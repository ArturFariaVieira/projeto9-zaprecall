import React from "react"
import styled from "styled-components"
import Login from "./Login"
import Corpo from "./Corpo"
import style from "./css/style.css"

export default function App() {
    const [meta, setMeta] = React.useState("")
    const [deck, setDeck] = React.useState("")
    const [começou, setComeçou] = React.useState(false)
    
    let começar = function (meta, deck){
        setComeçou(true)
        setMeta(meta)
        setDeck(deck)
        console.log(meta)
        console.log(deck)
    }
    return(
        <>  
            
            <Login metazapps = {meta} setmeta = {setMeta} baralho= {deck} setbaralho= {setDeck} comecou = {começou} setcomecou = {setComeçou} func = {começar}/>                
            <Corpo metazapps = {meta} setmeta = {setMeta} baralho= {deck} setbaralho= {setDeck} comecou = {começou} setcomecou = {setComeçou} />
            
        </>
        )
}
