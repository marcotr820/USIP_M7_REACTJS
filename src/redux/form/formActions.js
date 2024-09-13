import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

export const saveFormData = (formData) => {
    return {
        type: SET_FORM_DATA,
        payload: formData,
    }
}

export const clearSesion = () => {
    return {
        type: CLEAR_FORM_DATA,
    }
}
