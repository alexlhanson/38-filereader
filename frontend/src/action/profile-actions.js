import superagent from 'superagent';

/********************************************************************************
*         Syncronous Actions                                                    *
********************************************************************************/

export const profileCreate = profile => {
  return {
    type: profile,
    payload: profile
  }
}

export const profileUpdate = profile => {
  return {
    type: profile,
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
      console.log(res)
      dispatch(profileCreate(res.body.profile))
      return res;
    })
}
