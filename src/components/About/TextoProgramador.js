import { useState } from "react";

const TextoProgramador = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="z-40">
      <p className=" text-justify pb-2">
        Comencé a incursionar en el mundo de la programación en el 2017,
        aprendiendo lo más básico a través de Python. La curiosidad me llevó, en
        2018, a ingresar en el programa Codo a Codo del gobierno de CABA, donde
        profundicé sobre los fundamentos de programación, me acerqué a Java y
        aprendí acerca de bases de datos.
      </p>
      <p className=" text-justify pb-2">
        Decidido al fin a meterme de lleno en la profesión, en el 2019 finalicé
        el CBC correspondiente a la Licenciatura en Ciencias de la Computación
        de la UBA, aunque estoy por decidirme si hacer (en la UNSAM) la
        Licenciatura en Ciencia de Datos o la Tecnicatura en Programación
        Informática.
      </p>
      <div className={`${showMore ? "block" : "hidden"}`}>
        <p className=" text-justify pb-2">
          A lo largo del 2020, ahondé en mis estudios sobre programación y
          ciencia de datos empleando Python y R. Creando interfaces de usuario
          para proyectos de ciencia de datos, descubrí que me fascina el
          desarrollo web front-end. En 2021 me dediqué a aprender las bases de
          programación web (HTML, CSS, JavaScript) así como el framework React.
        </p>
        <p className="text-justify pb-2">
          Mi objetivo a mediano plazo es desarrollar proyectos que aúnen mis dos
          intereses: la inteligencia artificial y las interfaces de usuario.
          Espero unirme a un equipo de personas con ideas afines para continuar
          aprendiendo, acumulando conocimientos técnicos, desarrollando
          habilidades interpersonales, y contribuyendo en el contexto de un
          proyecto desafiante.
        </p>
      </div>
      <div className="flex justify-center sm:justify-start ">
        <button
          className="text-blue-500 font-bold z-30"
          onClick={() => setShowMore(!showMore)}
        >
          <p>{showMore ? "Leer menos..." : "Leer más..."}</p>
        </button>
      </div>
    </div>
  );
};

export default TextoProgramador;
