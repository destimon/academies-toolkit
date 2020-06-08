import { ADD_ACADEMIES, ADD_FORMDATA } from './constants/action-types';

export function addAcademies(response) {
  return { type: ADD_ACADEMIES, payload: response.data }
};


export function addFormData(formData) {
  return { type: ADD_FORMDATA, payload: formData }
};