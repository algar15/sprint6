import React from 'react';

const Inicio = ({ setInitiated }) => {
    return (
        <div className="container">
            <button onClick={setInitiated}>
                Començar
            </button>
        </div>
    )
}

export default Inicio;
