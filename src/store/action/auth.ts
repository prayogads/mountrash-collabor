export const setData = (data: object) => ({
  type: 'SET_DATA_AUTH',
  payload: data,
});

export const setNewData = (data: object) => ({
  type: 'SET_NEW_DATA',
  payload: data,
});
