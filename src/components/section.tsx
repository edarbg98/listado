import React, { useState } from "react";
import "./section.css";

const Sections = () => {
  const [section, setSection] = useState("");
  const sectionFuction = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSection(e.target.value);
  };

  const [confirmar, setConfirmar] = useState<string[]>([]);
  const confirmarFction = () => {
    setConfirmar((anteiores) => [...anteiores, section]);
    setSection("");
  };

  const [visible, setVisible] = useState<boolean>(true);
  const visibleFuction = () => {
    setVisible(false);
  };

  const [mostrar, setMostrar] = useState<boolean>(true);
  const mostrarFuction = () => {
    setMostrar(true);
    setVisible(true);
  };

  return (
    <section>
      <input type="text" placeholder="Ej: React" onChange={sectionFuction} value={section} />
      <button type="button" onClick={confirmarFction}>
        Confirma
      </button>
      <div className="contenedor">
        {mostrar &&
          visible &&
          confirmar.map((texto, indice) => <p key={indice}>{texto}</p>)}

        <br />
      </div>
        <button type="button" onClick={visibleFuction}>
          Ocultar
        </button>
        <button type="button" onClick={mostrarFuction}>
          Mostrar
        </button>
    </section>
  );
};

export default Sections;
