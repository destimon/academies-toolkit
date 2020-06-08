import React from 'react';
import { connect } from 'react-redux';
import { addAcademies } from '../../redux/actions';
import AcademiesGet from '../academies-get';

class GetContainer extends React.Component {
  render() {
    return <AcademiesGet academies={ this.props.academies } />;
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

export default connect(mapStateToProps, mapDispatchToProps)(GetContainer);