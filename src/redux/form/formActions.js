import { CLEAR_FORM_DATA, SET_FORM_DATA } from './formTypes'

export const setFormData = (values) => {
   return {
      type: SET_FORM_DATA,
      payload: values,
   }
}

export const clearSesion = () => {
   return {
      type: CLEAR_FORM_DATA,
   }
}