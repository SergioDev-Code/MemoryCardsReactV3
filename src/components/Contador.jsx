import { useEffect, useState, useRef} from 'react';
import style from '../styles/Contador.module.css';


function Contador({restablecer, numData, contenedorCartas, styleCard}) {
    console.log("Contador Montado");
    const [ contador, setContador] = useState();
    const contenedorContador = useRef();

    useEffect(() => {
        contenedorContador.current.classList.remove(style.desactive);
        contenedorCartas.current.style.pointerEvents = "none";
       setContador(5)
    }, [restablecer, numData]);

    useEffect(() => {
        
        const intervalo = setInterval(() => {
            console.log(contador)
            if (contador > 0) {
                setContador(contador-1);
                
            }else{
                contenedorContador.current.classList.add(style.desactive);
                contenedorCartas.current.style.pointerEvents = "auto";
                const cards = Array.from(contenedorCartas.current.children)
                cards.map((card)=>{
                    card.classList.remove(styleCard)
                })
                clearInterval(intervalo);
            }
        }, 1000);
        
        return ()=>{
            clearInterval(intervalo)
        }
    }, [contador]);
    return (  
        <>
            {console.log("- Contador Retornado")}
            <div className={style.contenedorContador} ref={contenedorContador}>

                <span className={style.contador}>{contador}</span>

            </div>
        </>
    );
}

export default Contador;