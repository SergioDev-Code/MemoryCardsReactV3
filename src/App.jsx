import { useState, useEffect, useRef } from 'react'
import style from './App.module.css'
import styleCard from './styles/Card.module.css'
import getApi from './components/DataApi'
import Card from './components/Card'
import Contador from './components/Contador'

let item = 0
let cardUno = undefined
let cardDos = undefined
function App() {
  console.log("- App Montado")
  const [restablecer, setRestablecer] = useState(1);
  const [numData, setNumData] = useState(3);
  const dataApi = getApi(numData);
  const contenedorCartas = useRef();
  let itemGame = 0

  function handleRestablecer(){
    setRestablecer(restablecer+1)
  }
  function handleNumSelect(e){
    console.log(e.target.value)
    setNumData(e.target.value)
  }

  function game(cardUno, cardDos){
    let namePaisCardUno = cardUno.children[1].children[0].textContent;
    let namePaisCardDos = cardDos.children[1].children[0].textContent;

    if(namePaisCardUno != namePaisCardDos){
      console.log("Diferentes")
      setTimeout(() => {
        cardUno.classList.remove(styleCard.active)
        cardDos.classList.remove(styleCard.active)

        cardUno.parentNode.style.pointerEvents ="auto";
      }, 1200);
    }else{
      console.log("Iguales")
      cardUno.style.pointerEvents = "none";
      cardDos.style.pointerEvents = "none";
      cardUno.parentNode.style.pointerEvents ="auto";
      itemGame++
      
      if (itemGame === parseInt(numData)) {
        console.log("Ganaste --------- ")
      }
    }
  }

  function handleActiveCard(e){
    if (e.target.classList.contains(styleCard.card)) {
      e.target.classList.add(styleCard.active);

      if (cardUno === undefined) {
        cardUno = e.target;
      }else if(e.target != cardUno) {
        cardDos = e.target
        e.target.parentNode.style.pointerEvents ="none";
        
        game(cardUno, cardDos);
        cardUno = undefined;
        cardDos = undefined;
      }
    }
  }
  
  return (
    <>
      {console.log("- App Retornado")}

      <div className={style.contenedor}>

        <div className={style.contenedorCabezera}>
          <button className={style.button18} onClick={handleRestablecer}>Restablecer</button>
          <select name="" id="" onChange={handleNumSelect}>
            <option value="3">6 Cartas</option>
            <option value="4">8 Cartas</option>
            <option value="5">10 Cartas</option>
            <option value="6">12 Cartas</option>
          </select>
        </div>

        <div className={style.contenedorCartas} ref= {contenedorCartas} onClick={handleActiveCard} >
          {
            dataApi.map( (data)=>(
              <Card key={data.idd.suffixes+`${item++}`} nameCountry= {data.name.common}imgCountry={data.flags.png} ></Card>
            ))
          }

          <Contador restablecer={restablecer} numData={numData} contenedorCartas={contenedorCartas} styleCard={styleCard.active}> </Contador>
        </div>  
      </div>
    </>
  )
}

export default App
