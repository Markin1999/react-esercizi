import Saluto from "./saluto";

function Dashboard(props) {
  return (
    <div>
      <Saluto nome={props.nome}></Saluto>

      <h3>Nome utente: {props.nome}</h3>
      <h3>Cognome utente: {props.cognome}</h3>
      <h3>Telefono: {props.telefono}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  );
}
export default Dashboard;
