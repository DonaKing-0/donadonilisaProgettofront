import Utente from "./Utente";
import Commessa from "./Commessa";

const Riga = ({ element, isUt, listaUtenti }) => {

    return <div style={{'display': 'block'}}>
        {isUt && <Utente element={element}></Utente>}
        {!isUt && <Commessa element={element} listaUtenti={listaUtenti}></Commessa>}


    </div>
};
export default Riga;



