import mario from "./assets/mario-hisashi.png";
import kelvin from "./assets/kelvin-costa.png";
import anna from "./assets/anna-bia.png";
import charles from "./assets/charles-santos.png";

function CriarUser({ nome, arroba, seguidores, seguindo, foto }) {
  return (
    <div className="card">
      <img src={foto} alt={nome}></img>
      <h1>{nome}</h1>
      <h2>{arroba}</h2>
      <div>
        <p>{seguidores + " seguidores"}</p>
        <p>{seguindo + " seguindo"}</p>
      </div>
    </div>
  );
}

function App() {
  const users = [
    {
      id: 1,
      nome: "Mario Hisashi",
      arroba: "@hisashi.mario",
      seguidores: 96,
      seguindo: 48,
      foto: mario,
    },
    {
      id: 2,
      nome: "Anna Bia",
      arroba: "@annabia",
      seguidores: 507,
      seguindo: 489,
      foto: anna,
    },
    {
      id: 3,
      nome: "Kelvin Costa",
      arroba: "@kelvin_costin",
      seguidores: 1077,
      seguindo: 852,
      foto: kelvin,
    },
    {
      id: 4,
      nome: "Charles Santos",
      arroba: "@charlito",
      seguidores: 184,
      seguindo: 264,
      foto: charles,
    },
  ];

  return (
    <div className="App">
      {users.map((user) => {
        return <CriarUser key={user.id} {...user} />;
      })}
    </div>
  );
}

export default App;
