import superagent from 'superagent';

/********************************************************************************
*         Syncronous Actions                                                    *
********************************************************************************/

export const profileCreate = profile => {
  return {
    type: 'PROFILE_CREATE',
    payload: profile
  }
}

export const profileSet = profile => {
  return {
    type: 'PROFILE_SET',
    payload: profile
  }
}

/********************************************************************************
*         Asyncronous Actions                                                   *
********************************************************************************/

export const profileCreateRequest = profile => dispatch => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}/profiles`)
    .set("Authorization", "Bearer " + token)
    .send(profile)
    .then(res => {
      console.log('getting into create', res.body._id);

      localStorage.userId = JSON.stringify(res.body._id);
      dispatch(profileCreate(res.body));
      return res;
    })
}

export const profileFetchRequest = () => dispatch => {
  let token = localStorage.getItem('token');
  return superagent.get(`$__API_URL__}/profiles/me`)
    .set("Authorization", "Bearer " + token)
    .then(res => {
      console.log(res);
      dispatch(profileSet(res.body));
    })
}
