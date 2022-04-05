export default function ComHeader(){

const nomeApp= "App Delivery" 
  let array=[2,2,4,4] 
  let filaEntrega= array.reduce((total,atual)=> total +atual);
  const url = "https://i2.wp.com/jornal.usp.br/wp-content/uploads/2020/07/20200720_food_delivery.jpg?resize=1200%2C630&ssl=1" 
 
  return ( 
    <div> 
    <img src={url} className="App-logo" alt="logo" /> 
    <h1>  {nomeApp.toUpperCase()}     </h1> 
    <a className="App-link" href="https://facens.br/" target="_blank" > 
      Facens </a> 
    <p> Fila de Espera: {filaEntrega}</p> 
    </div> 
    ) }