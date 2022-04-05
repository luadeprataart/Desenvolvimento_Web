

export default function Fila() { 
    const dados= [{ nome: "Ana",
    endereço: "Rua123", 
    telefone: "13325"
},
{ nome: "Gui",
    endereço: "Rua143", 
    telefone: "13225"
}]
     
    return ( 
    <> <ul className="FilaEspera"> 
         {dados.map(dados => (<li> {dados.nome} - {dados.endereço} , {dados.telefone}</li>))} 
      </ul> 
   </> 
    );  } 