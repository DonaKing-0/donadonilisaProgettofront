const Intestazione = ({ isUt }) => {
    
    const stileleggi = {
        backgroundColor: '#282c34',
        borderRadius: '10px',
        border: 'none',
        color: 'white',
        fontSize: '20px',
    };

    return <div style={{'display': 'block'}}>
        {isUt && <div>
            <input type={"text"} readOnly value={'Email'} style={Object.assign(stileleggi)}></input>
            <input type={"text"} readOnly value={'Ruolo'} style={Object.assign(stileleggi)}></input>
            <input type={"text"} readOnly value={'Nome'} style={Object.assign(stileleggi)}></input>
        </div>}
        {!isUt && <div>
            <input type={"text"} readOnly value={'Nome'} style={Object.assign(stileleggi)}></input>
            <input type={"text"} readOnly value={'Note'} style={Object.assign(stileleggi)}></input>
            <input type={"text"} readOnly value={'Stima durata'} style={Object.assign(stileleggi)}></input>
        </div>}

    </div>
};
export default Intestazione;