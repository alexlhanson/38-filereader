import React from 'react';
import { connect } from 'react-redux';
import * as profileActions from '../../action/profile-actions';
import SettingsForm from '../settings-form/settings-form.js'

class SettingsContainer extends React.Component {

  render() {
    return (
      <div className="settings-container">
        <h2>Profile</h2>
        <p>Please fill out your profile below</p>
        <SettingsForm buttonText="Create Profile" onComplete={this.props.actions.profileCreate} profile={this.props.profile}/>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    profile: state.profiles,
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
