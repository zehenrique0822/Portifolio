import * as C from './App.styles';
import './App.css';

const App = () => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderItem><h2><pre>{`<José Henrique/>`}</pre></h2></C.HeaderItem>
        <C.HeaderItem>
          <nav>
            <ul>
            <li><a>Sobre</a></li>
            <li><a>Portifolio</a></li>
            <li><a>CURRICULO</a></li>
            </ul>
          </nav>
        </C.HeaderItem>
        <C.HeaderItem><a>Tema</a></C.HeaderItem>
      </C.Header>
      <C.Init>
        <C.InitItem>
          <div><p>// Olá, me chamo José Henrique<img className="wave" src="../assets/gif/wave.gif" alt='' /></p></div>
          <C.H1>FRONT-END <br/> WEB DEVELOPER</C.H1>
          <p>Desenvolvedor FrontEnd - React.JS + Typescript e <br/> Apaixonado por tecnologia.</p>
          <p><pre>{`FaleComigo();`}</pre></p>
        </C.InitItem>
        <C.InitItem>
          <img className="dev" src="../assets/img/dev.svg" alt='' />
        </C.InitItem>
      </C.Init>
    </C.Container>
  );
}

export default App;
