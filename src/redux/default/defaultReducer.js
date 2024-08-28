import { SET_NAME_MODULE, CLEAN_NAME_MODULE } from './defaultTypes';

const initialState = {
   name: '',
}

const defaultReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_NAME_MODULE:
         return {
            ...state,
            name: action.payload
         }

      case CLEAN_NAME_MODULE:
         return {
            ...state,
            name: ''
         }

      default:
         return state;
   }
};

export default defaultReducer;