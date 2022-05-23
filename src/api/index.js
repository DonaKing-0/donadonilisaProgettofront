import axios from "./axios.js"

const getOrders= async ()=>{
    
    try{
        const {data: list}= await axios.get('/orders');
        console.log({list});
        return list;
    }catch(e){
        console.log(e);
        return [];
    }
}

const getUsers= async ()=>{
    try{
       const {data: list}= await axios.get('/users');
        console.log({list});
        return list;
    }catch(e){
        console.log(e);
        return [];
    }
}

export  {
    getOrders, 
    getUsers
};