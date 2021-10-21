/*

Crear componente que va a mostrar 3 botones con los nombres rojo, azul, amarillo.
Si yo hago click en el rojo me va a mostrar el cuadro rojo
Si yo hago click en el azul me va a mostrar el cuadro azul
Si yo hago click en el amarillo me va a mostrar el cuadro amarillo

*/
import { useState } from "react";
import "./index.css";

const Index = () => {
  const [color, setColor] = useState("gray");

  const handleColor = (color) => {
    switch (color) {
      case "rojo":
        setColor("rgb(248, 79, 79)");
        break;
      case "azul":
        setColor("rgb(86, 86, 248)");
        break;
      case "amarillo":
        setColor("rgb(180, 180, 3)");
        break;
      default:
        setColor("gray");
    }
  };

  return (
    <>
      <div className="cuadro" style={{ backgroundColor: color }}></div>
      <div className="buttons">
        <button onClick={() => handleColor("rojo")} className="btn btn-rojo">
          Rojo
        </button>
        <button onClick={() => handleColor("azul")} className="btn btn-azul">
          Azul
        </button>
        <button
          onClick={() => handleColor("amarillo")}
          className="btn btn-amarillo"
        >
          Amarillo
        </button>
      </div>
    </>
  );
};

export default Index;
