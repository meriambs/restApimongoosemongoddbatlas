import { v4 as uuidv4 } from 'uuid';
import{GET_ITEMS,ADD_ITEMS,DELETE_ITEMS}from '../Action/types';



const initialState={
    items:[
        { name: 'item 1',id:uuidv4()},
	{ name: 'item 2',id:uuidv4()},
    { name: 'item 3',id:uuidv4()},
    ]
};

export default function(state= initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
            default:
                return state;
    }
}