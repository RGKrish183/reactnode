import { BOOKS } from '../../constants/ActionTypes';

const initialState = {total:0,total_pages:0,results:[]};
const booksReducer = (state = initialState, action) => {
   
    switch (action.type) {
    case BOOKS:
        return {...state,total:action.Payload.total,total_pages:action.Payload.total_pages,results:action.Payload.results}
    default:
        return state;
    }
};

export default booksReducer;