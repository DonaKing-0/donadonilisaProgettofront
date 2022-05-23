import { useState } from "react";


const Opzioni = ({ select }) => {

    const [utenti, setUtenti]= useState('#7d879b');
    const [commesse, setCommesse]= useState();
    const [f, setF]= useState('utenti');


    const filtra= (filt)=>{
        if(filt=='utenti'){
            setUtenti('#7d879b');
            setCommesse();
            setF('utenti');
        }else{
            setUtenti();
            setCommesse('#7d879b');
            setF('commesse');
        }
        select(filt);
    }    

    return <div>
        <div className="input-group mb-3">
        </div>
        <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-secondary" style={{'backgroundColor': utenti}} onClick={()=>{filtra('utenti')}} >Utenti</button>
            <button type="button" className="btn btn-secondary" style={{'backgroundColor': commesse}} onClick={()=>{filtra('commesse')}} >Commesse</button>
        </div>
    </div>;
};

export default Opzioni;
