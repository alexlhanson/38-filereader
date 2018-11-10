import React from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../action/auth-actions';
import * as profActions from '../../action/profile-actions';
import * as utils from '../../lib/util';
import AuthForm from '../auth-form/auth-form';

class LandingContainer extends React.Component {
  constructor(props){
    super(props)

    this.redirect = this.redirect.bind(this);
  }

  redirect = path => {
    this.props.history.replace(path)
  };

  componentWillMount(){
    if (localStorage['token']){
      console.log('mounting');
      this.props.profilefetch();
      this.redirect('/dashboard');
    }
  }

  render() {
    let {params} = this.props.match;

    let handleComplete = params.auth === 'signup' ? this.props.signup : this.props.login;

    return (
      <div>
        <AuthForm onComplete={handleComplete} auth={params.auth} redirect={this.redirect}/>
      </div>
    );
  };
};


let mapStateToProps = state => { 
  return {
    token: state.token
  } 
}

let mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(authActions.signupRequest(user)),
    login: user => dispatch(authActions.loginRequest(user)),
    profilefetch: () => dispatch(profActions.profileFetchRequest()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);