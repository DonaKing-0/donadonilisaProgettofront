import { BsFillPaletteFill } from "react-icons/bs";
import { useState } from "react";

const Utente = ({ element }) => {
    
    const [colore, setColore] = useState('#282c34');
    
    const stileleggi = {
        borderRadius: '10px',
        border: 'none',
        color: 'white',
        fontSize: '20px',
    };

    let t;

    if(element.name=== undefined && element.surname=== undefined){
        t='-';
    }else{
        t=element.name+' '+element.surname;
    }
    
    const [stiletxt, setStiletxt] = useState(stileleggi);
    const [testo, setTesto] = useState(element.email);
    const [testo2, setTesto2] = useState(element.role);
    const [testo3, setTesto3] = useState(t);
    const [disp, setDisp] = useState('block');

    const cambiacolore = (color) => {
        setColore(color);
    }

    return <div style={{'display': disp}}>

        <input type={"text"} readOnly value={testo} style={Object.assign({ backgroundColor: colore }, stiletxt)}></input>  
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type={"text"} readOnly value={testo2} style={Object.assign({ backgroundColor: colore }, stiletxt)}></input> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type={"text"} readOnly value={testo3} style={Object.assign({ backgroundColor: colore }, stiletxt)}></input> 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <div className="btn-group dropup">
            <button type="button" className="btn btn-secondary dropdown-toggle"  data-toggle="dropdown" aria-expanded="false" style={{'margin': '15px', 'height': '42px', 'width': '42px'}}><BsFillPaletteFill /></button>

            <div className="dropdown-menu">
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#ff9933'}} onClick={()=>{cambiacolore('#ff9933')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#6699ff'}} onClick={()=>{cambiacolore('#6699ff')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#33cccc'}} onClick={()=>{cambiacolore('#33cccc')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#00cc99'}} onClick={()=>{cambiacolore('#00cc99')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#73bf73'}} onClick={()=>{cambiacolore('#73bf73')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#009933'}} onClick={()=>{cambiacolore('#009933')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#999999'}} onClick={()=>{cambiacolore('#999999')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#787877'}} onClick={()=>{cambiacolore('#787877')}} ></button>
            <button type="button" className="btn btn-secondary" style={{'margin': '1px', 'height': '42px', 'width': '42px', 'backgroundColor': '#282c34'}} onClick={()=>{cambiacolore('#282c34')}} ></button>


            </div>
        </div>

    </div>
};
export default Utente;
