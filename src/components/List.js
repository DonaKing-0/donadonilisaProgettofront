import Riga from "./Riga";
import { useEffect, useState } from "react";
import { getUsers, getOrders } from "../api";
import Opzioni from "./Opzioni";
import Intestazione from "./Intestazione";



const List = () => {

    const stileleggi = {
        backgroundColor: '#282c34',
        borderRadius: '10px',
        border: 'none',
        color: 'white',
        fontSize: '20px',
    };

    const [user, setUser] = useState([]);
    const [orders, setOrder] = useState([]);
    const [list, setList] = useState([]);
    const [isUt, setIsUt] = useState(true);


    useEffect(() => {
        (async () => {
            const listaut = await getUsers();
            const listacomm = await getOrders();
            setUser(listaut);
            setList(listaut);
            setOrder(listacomm)
        })();

        return () => {
            // this now gets called when the component unmounts
        };
    }, []);




    const select = (filtro) => {
        if (filtro == 'utenti') {
            setList(user);
            setIsUt(true);
            console.log("Cambiato in utenti: ")          
        } else {
            setList(orders);
            setIsUt(false);
            console.log("Cambiato in ordini: ")
        }
    }


    return (
        <div>
            <div style={{ 'display': 'block' }}>
                <Opzioni select={select}></Opzioni>

                <Intestazione isUt={isUt}></Intestazione>

                <div className="btn-group dropup" style={{ 'display': 'none' }}>
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false" style={{ 'margin': '5px', 'height': '42px', 'width': '42px' }}></button>

                    <div className="dropdown-menu">

                    </div>
                </div>

            </div>

            <br></br>
            {
                list.map((element) => {
                    return <Riga key={element.id} element={element} isUt={isUt} listaUtenti={user}></Riga>;
                })}
        </div>

    )
};


export default List;
