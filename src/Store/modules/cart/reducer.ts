import { addToCardSuccessData } from '../../../pages/Cart/actoin';
// import produce from 'immer'
// function card(state = [], action: addToCardSuccessData) {
//     switch(action.type){
//       case '@cart/ADD_REQUEST':
//         return produce(state,(draft) =>{
//           const { product } = action;
//           draft.push(product)
//         }
//       default:
//         return state
//     }
// }
// export default card

function card(state = [], action: addToCardSuccessData) {
    switch(action.type){
      case '@cart/ADD_REQUEST':
        return [...state, action.product]
      default:
        return state
    }
}
export default card
