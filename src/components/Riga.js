import Utente from "./Utente";
import Commessa from "./Commessa";

const Riga = ({ element, isUt }) => {
    
    //const [ut, setUt] = useState(true);

    

    return <div style={{'display': 'block'}}>
        {isUt && <Utente element={element}></Utente>}
        {!isUt && <Commessa element={element}></Commessa>}


    </div>
};
export default Riga;



