import React from 'react';
import { connect } from 'react-redux';
import PhotoForm from '../photo-form/photo-form';

class DashboardContainer extends React.Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="dashboard-container">
        <h2>Dashboard</h2>
        <p>Photo-Sharing is an application for sharing photos.  Simply add files to the input form and submit it to upload your photos.  You can update, delete and add photos of your own as well as view other's photos and profiles.</p>
        <PhotoForm buttonText={'Upload'}/>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);