const initialState = {
  isFirst: true,
};

const splash = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_FIRST':
      return {
        ...state,
        isFirst: action.payload,
      };

    default:
      return state;
  }
};

export default splash;
