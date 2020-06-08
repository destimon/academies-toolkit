import React, { Component } from 'react';
import AcademiesAddForm from '../academies-add-form';
import { connect } from 'react-redux';

class AddFormContainer extends Component {
  render() {
    return <AcademiesAddForm />
  }
};

export default connect()(AddFormContainer);