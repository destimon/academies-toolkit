import React from 'react';
import AddFormContainer from './containers/c-add-form';

class AcademiesAdd extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <AddFormContainer />
        </div>
      </div>
    );
  }
}

export default AcademiesAdd;