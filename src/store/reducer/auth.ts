const initialState = {
  auth_data: {},
};

const auth = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_DATA_AUTH':
      return {
        ...state,
        auth_data: action.payload,
      };

    case 'SET_NEW_DATA':
      return {
        ...state,
        auth_data: action.payload,
      };

    default:
      return state;
  }
};

export default auth;
