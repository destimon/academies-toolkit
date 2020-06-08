import React from 'react';
import ContainerGetList from './containers/c-get-list';

class AcademiesGet extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <h2><i style={{marginRight: '1%'}} className="fas fa-file-invoice"></i>List of academies</h2>
          <hr/>
          <ContainerGetList/>
        </div>
      </div>
    );
  }
}

export default AcademiesGet;