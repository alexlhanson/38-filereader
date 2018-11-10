import React from 'react';
import * as utils from  '../../lib/util';

export default class <replace> extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preview: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    let {type, name, value, files} = e.target;
    let photo = files[0];
    this.setState({photo});

    utils.photoToDataURL(photo)
      .then(preview => this.setState({preview}))
      .catch(console.error);

  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <img src={this.state.preview} style={{"width":"25%"}}/>
          <input type="file" name="photo" onChange={this.handleChange}/>
          <button type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    );
  };
};
