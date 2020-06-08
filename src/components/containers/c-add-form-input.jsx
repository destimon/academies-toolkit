import React from 'react';
import AcademiesAddFormInput from '../academies-add-form-input';
import { addFormData } from '../../redux/actions';
import { connect } from 'react-redux';
import postAcademy from '../../utils/u-post-academy';

class AddFormInputContainer extends React.Component {

  validateForm(values) {
    const errors = {};
  
    if (!values.title)
      errors.title = 'Title required!'
    if (!values.type)
      errors.type = 'Type required!'
    return errors;
  }
  
  onSubmitForm(values, { setSubmitting }) {
    postAcademy(values)
      .then((res) => {
        if (res)
          alert('New academy applied!');
        else
          alert('Couldnt apply new academy');
      })
      .catch(() => {
        alert('Couldnt apply new academy');
      })
    setSubmitting(false);
  }
  
  render() {
    return <AcademiesAddFormInput validateForm={this.validateForm}
    onSubmitForm={this.onSubmitForm} />
  }
};

function mapStateToProps(state) {
  return {
    formData: state.formData
  }
}

function mapDispatchToProps(dispatch) {
	return {
		addFormData: formData => dispatch(addFormData(formData)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddFormInputContainer);