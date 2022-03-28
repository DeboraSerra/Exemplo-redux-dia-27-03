import { ADD_CLIENT, SEND_FORM, NEW_FORM, REMOVE_CLIENT } from '../actions';
const INITIAL_STATE_CLIENTS = {
  clients: [],
};

const INITIAL_STATE_SEND_FORM = {
  sent: false,
}

export const clientsReducer = (state = INITIAL_STATE_CLIENTS, action) => {
  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: [...state.clients, action.client],
      };
    case REMOVE_CLIENT:
      return {
        ...state,
        clients: state.clients.filter(({ id }) => id !== action.client.id )
      }
    default:
      return state;
  }
}

export const sendFormReducer = (state = INITIAL_STATE_SEND_FORM, action) => {
  switch (action.type) {
    case SEND_FORM:
      return {
        ...state,
        sent: true,
      }
    case NEW_FORM:
      return {
        ...state,
        sent: false,
      }
    default:
      return state;
  }
}