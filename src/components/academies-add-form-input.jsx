import { Formik } from 'formik';
import React from 'react';

class AcademiesAddFormInput extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ title: '', type: '' }}
        validate={this.props.validateForm}
        onSubmit={this.props.onSubmitForm}
      >
      {function({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) { 
        return ( 
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-3">
              
                <div className="input-group mb-3">
                  <input
                      className="form-control"
                      name="title"
                      type="text"
                      placeholder="Title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                    />
                </div>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    name="type"
                    placeholder="Type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.type}
                  />
                  <div className="input-group-prepend">
                  </div>
                </div>
                <button className="btn btn-outline-secondary" type="submit"
                  style={{width: '100%'}}
                  disabled={isSubmitting}
                >
                  Apply
                </button>
              </div>

              <div className="col-md-3">
                <div className="container">
                  <div className="text-danger">
                    { errors.title && touched.title && errors.title }
                  </div>
                  <div className="text-danger">
                    { errors.type && touched.type && errors.type }
                  </div>
                </div>
              </div>
            </div>

          </form>
        )}
      }
      </Formik>
    ) 
  }
};

export default AcademiesAddFormInput;