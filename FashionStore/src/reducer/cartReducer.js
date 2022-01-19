import {TYPE} from '../action/CartAction';

const carrtState ={dataCarts:[]}
const cartReducer =(state = carrtState,action)=>{
    switch (action.type) {

        case TYPE.ADD_ITEM:
            return{
                ...state,
                dataCarts : state.dataCarts.concat(action.data),
            };
            
        case TYPE.DELETE_ITEM:
            return{
                ...state,
                dataCarts : state.dataCarts.filter(item=>
                    item.id!==action.item.id
                    ),
            };

        case TYPE.CHANGEQUANTITY:
            for(let i =0;i<state.dataCarts.length;i++){
                if(action.key == state.dataCarts[i].id){
                    if(action.menthod=="plus"){

                        state.dataCarts[i].quantity +=1
                    }
                    else{
                        if( state.dataCarts[i].quantity>1){
                          state.dataCarts[i].quantity -=1
                        }
                        else{
                            return{
                                ...state,
                                dataCarts : state.dataCarts.filter(item=>
                                    item.id!==action.key
                                    ),
                            };
                        }
                       
                    }
                }
            }
            console.log(state.dataCarts)
    
        default:
            return state;
    }
}
export default cartReducer;