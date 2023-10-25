import style from '../styles/Card.module.css'

function Card({nameCountry, imgCountry}) {
    console.log("Card Montado")
    return (  
        <>
            <div className= {`${style.card} ${style.active}`}>

                <div className= {style.cardAdelante} >
                    <p>Pais</p>
                </div>

                <div className= { `${style.cardDetras}`} >
                    <p>{nameCountry}</p>
                    <img src={imgCountry} alt="" />
                </div>

            </div>
        </>
    );
}

export default Card;