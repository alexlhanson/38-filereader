import React from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../../action/profile-actions';
import SettingsForm from '../settings-form/settings-form.js'

class SettingsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.redirect = this.redirect.bind(this);
  }

  componentWillMount(){
    console.log(localStorage.token);
    if(localStorage.token){
      console.log('getting here');
      this.props.actions.profileFetch();
    }
  }

  componentDidMount(){
    console.log(this.props.profile);
  }

  redirect = path => {
    this.props.history.replace(path)
  };

  render() {

    return (
      <div className="settings-container">
        <h2>Profile</h2>
        <div>
          {this.props.profile ?(<div>
            <h3>{this.props.profile.username}</h3>
            <h4>{this.props.profile.email}</h4>
            <h4>{this.props.profile.bio}</h4>
          </div>):

            <SettingsForm buttonText="Create Profile" onComplete={this.props.actions.profileCreate} profile={this.props.profile} redirect={this.redirect} />
          }
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    profile: state.profile,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    actions: {
      profileCreate: profile => dispatch(profileActions.profileCreateRequest(profile)),
      profileUpdate: profile => dispatch(profileActions.profileUpdateRequest(profile)),
      profileFetch: () => dispatch(profileActions.profileFetchRequest()),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer);
