let initialState = {}
export default(state = initialState, action ) => {
  let {type, payload} = action;

  switch (type) {
    case 'PROFILE_CREATE':
      return payload;

    case 'PROFILE_SET':
      return payload;

    default:
      return state;
  }
}