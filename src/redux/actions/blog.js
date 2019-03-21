import { BLOGLIST } from '../../constants/ActionTypes';
import axios from 'axios';

export const blogAction = state => ({
  type: BLOGLIST,
  Payload: state,
});

export const getblogAction=()=>async dispatch=>{
    try{
        const list= await axios.get('/api/bloglist');
       console.log('list');
       console.log(list)
       
        //dispatch(blogAction(list.data))
        
    }catch{

    }

}