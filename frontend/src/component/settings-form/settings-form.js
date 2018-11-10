import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap'

export default class SettingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: props.profile ? props.profile.firstName : '',
      lastName: props.profile ? props.profile.lastName : '',
      bio: props.profile ? props.profile.bio : ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    this.props.redirect('/settings')
  }

  render() {
    return (
      <div>
        <p>Please fill out your profile below</p>
        <form id="profile-form" onSubmit={this.handleSubmit}>
          <label id="firstName">
            <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} />
          </label>
          <label id="lastName">
            <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} />
          </label>
          <textarea name="bio" cols="35" rows="20" value={this.state.bio} onChange={this.handleChange}></textarea>
          <Button type="submit" bsStyle="primary"><FontAwesomeIcon icon={faEdit} /></Button>
        </form>
      </div>
    );
  };
};