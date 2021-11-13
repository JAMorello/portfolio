import proyecto001 from "../assets/proyecto001/proyecto001.jpg";
import SHA001 from "../assets/proyecto001/SHA001.jpg";
import SHA002 from "../assets/proyecto001/SHA002.jpg";
import SHA003 from "../assets/proyecto001/SHA003.jpg";
import proyecto002 from "../assets/proyecto002/proyecto002.jpg";
import BEL001 from "../assets/proyecto002/BEL001.jpg";
import BEL002 from "../assets/proyecto002/BEL002.jpg";
import proyecto003 from "../assets/proyecto003/proyecto003.jpg";
import proyecto004 from "../assets/proyecto004/proyecto004.jpg";
import HWP001 from "../assets/proyecto004/HWP001.jpg";
import HWP002 from "../assets/proyecto004/HWP002.jpg";
import proyecto005 from "../assets/proyecto005/proyecto005.jpg";
import TDA001 from "../assets/proyecto005/TDA001.jpg";
import proyecto006 from "../assets/proyecto006/proyecto006.jpg";
import HPB001 from "../assets/proyecto006/HPB001.jpg";
import HPB002 from "../assets/proyecto006/HPB002.jpg";
import proyecto007 from "../assets/proyecto007/proyecto007.jpg";
import DSK001 from "../assets/proyecto007/DSK001.jpg";
import DSK002 from "../assets/proyecto007/DSK002.jpg";
import DSK003 from "../assets/proyecto007/DSK003.jpg";

const proyectos = [
  {
    name: "001: Superheroes App",
    img: proyecto001,
    extraImgs: [SHA001, SHA002, SHA003],
    quote: null,
    text: "Una aplicación web aplicación web responsive para armar un equipo de superheroes. Se hace validación de formularios, peticiones HTTP a API, etc. Para Alkemy Labs (Arg.).",
    extendedText: (
      <p>
        Este proyecto fue creado para el desafío React de{" "}
        <a
          href="https://www.alkemy.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Alkemy Labs
        </a>
        . La aplicación web fue construida para armar un grupo de 6 superhéroes
        del universo Marvel y DC Comics y poder ver sus estadísticas
        individuales y como equipo. La app es responsive, efectúa una validación
        de formularios (Login page), realiza peticiones HTTP a{" "}
        <a
          href="https://superheroapi.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          SuperHero API
        </a>
        , los datos de inicio de sesión, así como el equipo construido por el
        usuario, persisten en el almacenamiento local del navegador.
      </p>
    ),
    technologies: [
      "React",
      "Formik",
      "Axios",
      "react-router",
      "react-icons",
      "Bootstrap 5",
    ],
    demoLink: null,
    codeLink: "https://github.com/JAMorello/superheroes-app",
  },
  {
    name: "002: Belstaff App",
    img: proyecto002,
    extraImgs: [BEL001, BEL002],
    text: "Una aplicación web donde se visualizan productos. Hecho a partir de un challenge sobre web scraping, en equipo, para Scale AI (EE.UU.).",
    quote: null,
    extendedText: (
      <p>
        La aplicación web fue creada luego de participar en un desafío pago
        ofrecido por{" "}
        <a
          href="https://scale.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          Scale AI
        </a>{" "}
        , quienes estaban en busca de postulantes para un proyecto importante.
        Ese desafío consistió en desarrollar un scraper que extrae datos (y
        metadatos) de productos (principalmente ropa) de la web oficial de la
        marca Belstaff. Con algunas variaciones en los datos extraídos y el
        alcance, y tomando como inspiración una herramienta utilizada por el
        equipo de Quality Assurance, el mismo scraper se usó luego para crear
        esta aplicación.
      </p>
    ),
    technologies: ["Puppeteer", "React", "Chakra-UI"],
    demoLink: "https://vigorous-torvalds-d3c3b8.netlify.app/",
    codeLink: "https://github.com/JAMorello/belstaff-app",
  },
  {
    name: "003: Data Science",
    img: proyecto003,
    extraImgs: [],
    text: "A lo largo del tiempo iré aquí agregando pequeños proyectos/ejercicios relacionados con Data Science, Machine Learning, y demás.",
    quote: (
      <blockquote>
        <p>
          «The goal is to turn data into information, and information into
          insight.»
        </p>
        <small class="pull-right">
          Carly Fiorina, ex CEO of Hewlett-Packard
        </small>
      </blockquote>
    ),
    extendedText: (
      <p>
        En mi repositorio de GitHub se encuentran todos mis proyectos de Ciencia
        de Datos y Machine Learning, en los que empleo las diferentes
        herramientas del campo para hacer análisis exploratorios de datos,
        ingeniería de datos, creación de modelos predictivos, etc. Allí también
        se encuentra el registro de todos los recursos sobre el campo con los
        que me encuentro aprendiendo así como los certificados de cursos dados.
        Últimos proyectos: una web app de texto predictivo (inglés) hecho en R
        utilizando técnicas de NLP y una deep neural network (con Python) capaz
        de identificar la raza de un perro a partir de una foto.
      </p>
    ),
    technologies: [
      "Python",
      "R",
      "Data Science",
      "Machine Learning",
      "Deep Learning",
    ],
    demoLink: null,
    codeLink: "https://github.com/JAMorello/data-science-exercises",
  },
  {
    name: "004: Hard Working People",
    img: proyecto004,
    extraImgs: [HWP001, HWP002],
    text: "Una aplicación web cómica sobre una empresa ficticia. Hecha con React y Chakra-UI.",
    quote: (
      <blockquote>
        <p>
          «Will robots inherit the earth? <br />
          Yes, and they will kill our children.»
        </p>
        <small class="pull-right">The evil brother of Marvin Minsky</small>
      </blockquote>
    ),
    extendedText: (
      <p>
        ¿Conoce nuestra fabulosa empresa llamada "Hard Working People"? ¿Sí?
        ¡Genial! ¿Sabes qué tipo de trabajo hacemos, cómo lo hacemos y quién lo
        hace? ¡Todo lo que eres capaz de pensar es la respuesta correcta!
        Excepto, obviamente, el hecho de que todas las tareas las realiza
        nuestra increíble tripulación de robots superinteligentes. ¿Quién
        necesita humanos de todos modos? Al contrario, los "despachamos"
        rápidamente. En esta aplicación web puede conocer a nuestro equipo:
        revise una lista generada aleatoriamente de nuestros trabajadores y
        verifique sus estadísticas. También puede crear un equipo de
        trabajadores y evaluar su eficiencia. ¡Pero recuerda! Un efecto
        secundario es que los grandes grupos de trabajo son muy caóticos. ¡Con
        niveles de caos por las nubes, pueden ir en una matanza en lugar de
        trabajar!
      </p>
    ),
    technologies: ["React", "Chakra UI"],
    demoLink: "https://vigorous-torvalds-d3c3b8.netlify.app/",
    codeLink: "https://github.com/JAMorello/people-app",
  },
  {
    name: "005: TO-DO List App",
    img: proyecto005,
    extraImgs: [TDA001],
    text: "Una aplicación web donde que implementa un CRUD, opciones de búsqueda y filtro, y night mode.",
    quote: null,
    extendedText: (
      <p>
        Esta aplicación web permite hacer todas las cosas básicas que se esperan
        de una lista de tareas pendientes ¡y más! No solo es una aplicación que
        implementa CRUD, sino que guarda las tareas en el Local Storage, puede
        hacer una búsqueda de palabras a través de toda la lista de tareas
        pendientes así como filtrar por categorías. También se implementa un
        modo nocturno, cambiando los colores de la aplicación.
      </p>
    ),
    technologies: ["React", "Chakra UI"],
    demoLink: "https://stoic-meninsky-b64800.netlify.app/",
    codeLink: "https://github.com/JAMorello/todo-app",
  },
  {
    name: "006: H+ Bot",
    img: proyecto006,
    extraImgs: [HPB001, HPB002],
    text: "Un bot de twitter que sigue a pensadores y asociaciones transhumanistas y twitea sobre asuntos relacionados con el futuro.",
    quote: (
      <blockquote>
        <p>
          «Will robots inherit the earth? <br />
          Yes, but they will be our children.»
        </p>
        <small class="pull-right">Marvin Minsky</small>
      </blockquote>
    ),
    extendedText: (
      <p>
        El script realiza acciones en Twitter a partir de información recabada
        al acceder a las API de Twitter, The New York Times, y Reddit, así como
        a la página web de la wiki H+Pedia. Almacena los datos en una base de
        datos relacional. Actualmente sigue a 57 usuarios y tiene alrededor de
        230 followers.
      </p>
    ),
    technologies: [
      "Python",
      "Tweepy",
      "PRAW",
      "requests",
      "Beautiful Soup",
      "PostgreSQL",
    ],
    demoLink: "https://twitter.com/HplusBot",
    codeLink: "https://github.com/JAMorello/HPlus_Bot",
  },
  {
    name: "007: Dungeon of the Silver Key",
    img: proyecto007,
    extraImgs: [DSK001, DSK002, DSK003],
    text: "Un dungeon crawler básico basado en texto. Inspirado en H.P. Lovecraft y los juegos de Ficción Interactiva.",
    quote: (
      <blockquote>
        <p>
          «No está muerto lo que puede yacer eternamente;
          <br />y con el paso de los extraños eones, incluso la Muerte puede
          morir.»
        </p>
        <small class="pull-right">H.P. Lovecraft</small>
      </blockquote>
    ),
    extendedText: (
      <p>
        Este proyecto tuvo como base el código del repositorio de{" "}
        <a
          href="https://github.com/Mili-NT/Dungeon-Of-The-Silver-Key"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600"
        >
          @Mili-NT
        </a>
        . Inicialmente el trabajo consistió en reducir la gran cantidad de
        líneas de código repetidas (de 4k bajó a 2k); estructurar creando
        archivos separados con sus funciones particulares; implementar clases;
        etc. Se tiene en mente hacer una versión 2 del juego, con el objetivo de
        mejorar el flujo, acercarlo más a los clásicos juegos de Interactive
        Fiction.
      </p>
    ),
    technologies: ["Python", "colorama", "tabulate", "pyfliget"],
    demoLink: null,
    codeLink: "https://github.com/JAMorello/Dungeon-of-the-Silver-Key-v2",
  },
];

export default proyectos;
