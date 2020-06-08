import { ADD_ACADEMIES, ADD_FORMDATA } from "./constants/action-types";

const initialState = {
  academies: [ ],
  formData: {},
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ACADEMIES) {
    state.academies = action.payload;
  }
  if (action.type === ADD_FORMDATA) {
    state.formData = action.payload;
  }
  return state;
};

export default rootReducer;