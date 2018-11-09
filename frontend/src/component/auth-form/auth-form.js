import React from 'react';
import * as utils from '../../lib/util';


export default class AuthForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      username: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    console.log('mounted auth form');
  }

  handleChange(e){
    e.preventDefault();
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.onComplete(this.state)
      .then(() => {
        this.props.auth === 'signup' ? 
        this.props.redirect('/settings'):
        this.props.redirect('/dashboard')
      })
      .catch(console.error);

  }


  render() {
    return (
      <div>
        <form className="auth-form" onSubmit={this.handleSubmit}>
          {utils.renderIf(this.props.auth === 'signup', 
            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/>
          )}
          <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="password" name="password" placeholder="******" value={this.state.password} onChange={this.handleChange} /> 
          <button type="submit">{this.props.auth}</button>
        </form>
      </div>
    );
  };
};
