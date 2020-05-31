import { ADD_ANVENTORY,
  GET_ANVERTORY,
  UPDATE_ANVERTORY,
  DELETE_ANVERTORY,
  SELECT_ANVERTORY,
  CLEAR_ANVERTORY,
  DELETE_SELECT_ANVERTORY
 } from '../constant/type';

export const addAnventory = (anventory) =>({
    type:ADD_ANVENTORY,
    payload:anventory,
  });

export const getAnventory = (id) => ({
  type: GET_ANVERTORY,
  payload:id,
});

export const updateAnventory = (anventory) => ({
  type: UPDATE_ANVERTORY,
  payload:anventory,
})

export const deleteAnventory = (id) => ({
  type: DELETE_ANVERTORY,
  payload:id,
})
export const selectAllAnventory = (id) => ({
  type: SELECT_ANVERTORY,
  payload:id,
})
export const clearAllAnventory = () => ({
  type: CLEAR_ANVERTORY,
})
export const deleteAllAnventory = (payload) => ({
  type: DELETE_SELECT_ANVERTORY,
  payload
})

