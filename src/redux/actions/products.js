import { BOOKS } from '../../constants/ActionTypes';
import axios from 'axios';

export const booksAction = (state) => ({
    type: BOOKS,
    Payload:state
});



export const getBooksAction=()=>async dispatch=>{
    try{
        const list= await axios.get('https://api.unsplash.com/search/photos/?query=books&client_id=df28ff85ddfd5c66e129d901cd2f025463d4911ed156aff171d16e2cf588c07d');
       
       console.log(list)
       
        dispatch(booksAction(list.data))
        
    }catch{

    }

}