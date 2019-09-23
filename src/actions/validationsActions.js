import {
  FORM_VALIDATE,
  FORM_VALIDATE_SUCCESS,
  FORM_VALIDATE_ERROR
} from "../types";

export function validateFormAction() {
  return dispatch => {
    dispatch(iniciateValidate());
  };
}

export const iniciateValidate = () => {
  return {
    type: FORM_VALIDATE
  };
};

export const validateSuccess = () => {
  return {
    type: FORM_VALIDATE_SUCCESS
  };
};

export const validateError = () => {
  return {
    type: FORM_VALIDATE_ERROR
  };
};
