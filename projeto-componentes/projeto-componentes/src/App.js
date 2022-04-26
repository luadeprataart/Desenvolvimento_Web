import "./App.css";
import Header from "./componentes/header";
import Relogio from "./componentes/relogio";
import { useState } from "react";
import { toast } from "react-toastify";
import Exibir from "./componentes/exibir.js";

function App() {
  const [nome, setNome] = useState();
  const [cidade, setCidade] = useState();
  const [endereco, setEndereco] = useState();
  const [estado, setEstado] = useState();
  const [tel, setTel] = useState();

  const [cliente, setcliente] = useState([]);

  function enviarValidar(e) {
    e.preventDefault();

    if (nome === undefined) toast.error("Erro. Nome não pode estar vazio");
    else {
      toast.success("Dados Cadastrados! ");
      let novo = { nome: nome, tel: tel };
      setcliente((prev) => {
        [...prev, novo];
      }); //melhor maneira para ele não se perder
      //setcliente([...cliente, novo]); //
    }
  }

  function changeName(e) {
    setNome(e.target.value);
  }
  function changeAdress(e) {
    setEndereco(e.target.value);
  }
  function changeCity(e) {
    setCidade(e.target.value);
  }
  function changeState(e) {
    setEstado(e.target.value);
  }
  function changeTel(e) {
    setTel(e.target.value);
  }

  return (
    <div className="App">
      <Relogio />

      <Header />

      <form onSubmit={enviarValidar}>
        <div className="centro">
          <div className="form">
            <center>
              <h2>Dados:</h2>
            </center>

            <br></br>

            <div className="componte">
              <label htmlFor="nome">Nome: </label>
              <input
                className="compontemaior"
                id="nome"
                value={nome}
                onChange={changeName}
              ></input>

              <label htmlFor="tel"> Tel: </label>
              <input id="tel" value={tel} onChange={changeTel}></input>
            </div>
            <div className="componte">
              <label htmlFor="endereco">Endereço: </label>
              <input
                className="compontemaior"
                id="endereco"
                value={endereco}
                onChange={changeAdress}
              ></input>
            </div>
            <div className="componte">
              <label htmlFor="cidade"> Cidade: </label>
              <input id="cidade" value={cidade} onChange={changeCity}></input>

              <label htmlFor="estado"> Estado: </label>
              <input
                className="estado"
                id="estado"
                value={estado}
                onChange={changeState}
              ></input>
            </div>
            <br></br>
            <input type="submit" className="btn"></input>
          </div>
        </div>
      </form>

      <Exibir conteudo={cliente} />
    </div>
  );
}

export default App;
