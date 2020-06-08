import React from 'react';

class AcademiesHome extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="container">
          <h2><i style={{marginRight: '1%'}} className="fas fa-house-user"></i>Welcome!</h2>
          <hr/>
          <p>This is testing task created for <a href='https://seedium.io'>seedium.io</a></p>
          <p>Author: <a href="https://github.com/destimon">Dmitry Cherendieiv</a></p>
        </div>
      </div>
    );
  }
}

export default AcademiesHome;