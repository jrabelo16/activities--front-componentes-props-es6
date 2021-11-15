import alert from "./assets/alert.svg";
import close from "./assets/close.svg";
import cookie from "./assets/cookie.svg";

function Card({ imagem, children, botao, color }) {
  return (
    <div className="card">
      <button className="close">
        <img src={close} alt="close" />
      </button>
      <img className="imagem" src={imagem} alt={imagem} />
      {children}
      <button style={{ background: `${color}` }}>{botao}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Card imagem={cookie} botao="Tudo bem!" color="#ED6755">
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </Card>

      <Card imagem={alert} botao="Extender login" color="#1C1B5E">
        Você será deslogado imediatamente!
      </Card>
    </div>
  );
}

export default App;
