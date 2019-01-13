
import { UPDATE } from '../../constants/ActionTypes';

const initialState = 'initial';
const exampleReducer = (state = initialState, action) => {
    switch (action.type) {
    case UPDATE:
        return action.Payload
    default:
        return state;
    }
};

export default exampleReducer;
