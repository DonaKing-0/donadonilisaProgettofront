import Riga from "./Riga";
import { useEffect, useState } from "react";
import { getUsers, getOrders } from "../api";
import Opzioni from "./Opzioni";
import Intestazione from "./Intestazione";



const List = (/*{ addedProducts }*/) => {

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
            console.log({ listaut })
            setUser(listaut);
            setList(listaut);
            console.log({ listacomm })
            setOrder(listacomm)
        })();

        return () => {
            // this now gets called when the component unmounts
        };
    }, []);






    //non inserisce update
    const agg = (elem, filtro) => {
        console.log(filtro);
        // db.tasks.insert(elem);
        /* const nuova =db.tasks.list();
 console.log(db.tasks.list())
         setList(nuova);*/
        //select(filtro);
        document.getElementById('idbottone').click();
    }

    /* const select=(filtro)=>{
         if(filtro=='attive'){
             const filt= db.tasks.getnotcomplete();
             setList(filt);
         }else if(filtro=='fatte'){
             const filt= db.tasks.getcomplete();
             setList(filt);
         }else{
             const nuova =db.tasks.list();
             setList(nuova);
         }
     }
 
  const forceUpdate = useForceUpdate();
         function useForceUpdate(){
             const [value, setValue] = useState(0); // integer state
             return () => setValue(value => value + 1); // update the state to force render
         }*/

    const select = (filtro) => {
        if (filtro == 'utenti') {
            setList(user);
            setIsUt(true);
            console.log("Cambiato in utenti: ")
            console.log(list);            
        } else {
            setList(orders);
            setIsUt(false);
            console.log("Cambiato in ordini: ")
            console.log(list);
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
                    return <Riga key={element.id} element={element} isUt={isUt}></Riga>;
                })}
        </div>

    )
};




export default List;
