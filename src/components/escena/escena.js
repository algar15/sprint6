import React, { useState } from 'react';
import { Cuadrado, SelectedTextBtn } from '../../styled'

const Escena = ({ heroTexts }) => {
    const [selectedText, setSelecteText] = useState(0)

    const handleIncrement = () => {
        if (selectedText + 1 < heroTexts.length) {
            setSelecteText(selectedText + 1)
        }
    }

    const handleSubstract = () => {
        if (selectedText - 1 >= 0) {
            setSelecteText(selectedText - 1)
        }
    }

    return (
        <>
            <div className="container" style={{backgroundImage: `url(${process.env.PUBLIC_URL}${selectedText + 1}.jpg)`, backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
                <div className="buttonsContainer">
                    <SelectedTextBtn onClick={handleSubstract}>Anterior</SelectedTextBtn>
                    <SelectedTextBtn onClick={handleIncrement}>Seguent</SelectedTextBtn>
                </div>
                {heroTexts.map((text, index) => (
                    <Cuadrado className={index === selectedText ? "bgRed" : "bgWhite"}>
                        <p>{text}</p>
                    </Cuadrado>
                ))}
            </div>
        </>
    )
}

export default Escena;