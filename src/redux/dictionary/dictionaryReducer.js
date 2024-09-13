import { ADD_PALABRAS, DELETE_PALABRA } from './dictionaryTypes';

const initialState = {
   palabras: []
}

const dictionaryReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PALABRAS: {
         return {
            ...state,
            palabras: [...state.palabras, action.payload]
         }
      }

      case DELETE_PALABRA: {
         return {
            ...state,
            palabras: state.palabras.filter(p =>
               p.espanol !== action.payload &&
               p.ingles !== action.payload &&
               p.portugues !== action.payload
            )
         }
      }

      default:
         return state;
   }
};

export default dictionaryReducer;