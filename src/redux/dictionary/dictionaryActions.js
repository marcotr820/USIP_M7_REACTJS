import { ADD_PALABRAS, DELETE_PALABRA } from './dictionaryTypes';

export const addPalabras = (values) => {
   return {
      type: ADD_PALABRAS,
      payload: values,
   }
}

export const deletePalabraAction = (word) => ({
   type: DELETE_PALABRA,
   payload: word,
});