import React, { Component } from 'react';
import AddFormInputContainer from './containers/c-add-form-input';

class AcademiesAddForm extends Component {
  render() {
    return (
      <div>
      <h2><i style={{marginRight: '1%'}} className="fas fa-external-link-square-alt"></i>Add new academy</h2>
      <AddFormInputContainer />
      <hr/>
    </div>  
    )
  }
};

export default AcademiesAddForm;