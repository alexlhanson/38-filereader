export default (state = '', action) => {
  let {type, payload} = action;

  switch (type) {
    case 'TOKEN_SET': return payload;
    case 'TOKEN_DESTROY': return null;

    default: return state;
  }
}