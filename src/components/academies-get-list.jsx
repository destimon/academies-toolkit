import React from 'react';

class AcademiestGetList extends React.Component {
  render() {
    return (
      <div className="list-group">
      { this.props.academies.map(function(acad, i) {
          return (
            <div 
              className="list-group-item" key={i}
              style={{maxWidth: '30%'}}
            >
              <div className="container">
                {i + 1}. { acad.title } - { acad.type }
              </div>
            </div>
          )
        }) 
      }      
      </div>
    )
  }
}

export default AcademiestGetList;