export enum FormActionKind {
  HANDLE_LOGIN_INPUT = "HANDLE LOGIN INPUT",
}

interface IFromState {
  userEmail: string;
  userPassword: string;
}

interface IFormAction {
  type: FormActionKind;
  field: string;
  payload: string;
}

export default function formReducer(state: IFromState, action: IFormAction) {
  switch (action.type) {
    case FormActionKind.HANDLE_LOGIN_INPUT:
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
}
