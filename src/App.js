import React, {useState} from 'react';
import Escena from './components/escena/escena';
import Inicio from './components/escena/inicio';
 
const App = _=> {
  const [initiated, setInitiated] = useState(false)

  const heroText = ["El nostre heroi estava surant per l'espai sideral quan a la llunyania va albirar una nau espacial",
  "Sentia curiositat per l'interior de la nau i es va posar a inspeccionar-la. Va arribar a una sala amb dues portes",  
  "L'heroi va decidir travessar la porta que el portava a casa",
  "Mentrestant, altres heroes no van tenir tanta sort en la seva elecció..."] 
  
  return (
    <>
      {initiated && <Escena heroTexts={heroText}/>}
      {!initiated && <Inicio setInitiated={setInitiated}/>}
    </>
  )
};

export default App;
