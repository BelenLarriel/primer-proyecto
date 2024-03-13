import { useState } from 'react'

import './App.css'


const Subelemento = ({ nombre, seleccionado, onSeleccionar }) => {
  return (
    <div
      className={`subelemento ${seleccionado ? 'seleccionado' : ''}`}
      onClick={() => onSeleccionar(nombre)}
    >
      {nombre}
    </div>
  );
};

const ElementoConSubelementos = ({ elemento, subelementos, onSeleccionar }) => {
  const [expandir, setExpandir] = useState(false);

  const handleExpandir = () => {
    setExpandir(!expandir);
  };

  return (
    <div>
      <div
        className={`elemento-con-subelementos ${expandir ? 'expandir' : ''}`}
        onClick={() => {
          onSeleccionar(elemento);
          handleExpandir();
        }}
      >
        {elemento}
      </div>
      {expandir &&
        subelementos.map((subelemento) => (
          <Subelemento
            key={subelemento}
            nombre={subelemento}
            seleccionado={false}
            onSeleccionar={onSeleccionar}
          />
        ))}
    </div>
  );
};

const ElementoSinSubelementos = ({ elemento, onSeleccionar }) => {
  return (
    <div
      className="elemento-sin-subelementos"
      onClick={() => onSeleccionar(elemento)}
    >
      {elemento}
    </div>
  );
};

const App = () => {
  const [elementoSeleccionado, setElementoSeleccionado] = useState(null);

  const handleSeleccionar = (elemento) => {
    setElementoSeleccionado(elemento);
  };

  const data = [
    { element: 'Alaska', subElements: ['Bascom'] },
    { element: 'Connecticut', subElements: [] },
    { element: 'Wisconsin', subElements: ['Oretta', 'Konterra', 'Guthrie'] },
    { element: 'Nebraska', subElements: ['Jennings', 'Harviell', 'Alfarata', 'Bluffview', 'Escondida'] },
    { element: 'Georgia', subElements: [] }
  ];

  return (
    <div>
      {data.map((item, index) =>
        item.subElements.length > 0 ? (
          <ElementoConSubelementos
            key={index}
            elemento={item.element}
            subelementos={item.subElements}
            onSeleccionar={handleSeleccionar}
          />
        ) : (
          <ElementoSinSubelementos
            key={index}
            elemento={item.element}
            onSeleccionar={handleSeleccionar}
          />
        )
      )}
      <div className={`mensaje-seleccion ${elementoSeleccionado ? 'visible' : ''}`}>
        Elemento seleccionado: {elementoSeleccionado}
      </div>
    </div>


    
  );
};


export default App;