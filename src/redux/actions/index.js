export const ADD_CLIENT = 'ADD_CLIENT';
export const SEND_FORM = 'SEND_FORM';
export const NEW_FORM = 'NEW_FORM';
export const REMOVE_CLIENT = 'REMOVE_CLIENT';

export const addClient = (client) => ({
  type: ADD_CLIENT,
  client,
});

export const sendForm = {
  type: SEND_FORM,
}

export const newForm = {
  type: NEW_FORM,
}

export const removeClient = (client) => ({
  type: REMOVE_CLIENT,
  client,
})
