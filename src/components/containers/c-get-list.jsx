import React from 'react';
import { connect } from 'react-redux';
import AcademiesGetList from '../academies-get-list';
import { addAcademies } from '../../redux/actions';
import axios from 'axios';


class GetListContainer extends React.Component {
  state = {
    academies: []
  }

  async componentDidMount() {
    let response;

    try {
      response = await axios.get(`https://test.api.sportstars.club/academies/public`)  
      
      if (response) {
        this.props.addAcademies(response.data)
        this.setState(state => {
          return {
            academies: response.data.data
          }
        })
      } else {
        this.props.addAcademies(null);
      }
    } catch (error) {
      // Output error
      console.error('Error: ', error);
    }  
  }

  render() {
    return <AcademiesGetList academies={ this.state.academies } />;
  }
}

function mapStateToProps(state) {
  return {
    academies: state.academies
  }
}

function mapDispatchToProps(dispatch) {
	return {
		addAcademies: (response) => dispatch(addAcademies(response)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(GetListContainer);