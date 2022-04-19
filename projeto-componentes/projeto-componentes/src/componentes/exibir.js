export default function Exibir({ conteudo }) {
  let lista = conteudo.map((dados) => {
    return (
      <li>
        {dados.nome} - {dados.tel}
      </li>
    );
  });

  return <ul>{lista}</ul>;
}
