import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { fetchRecipes } from '../actions/actions';
import Main from './Main';

class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

App.propTypes = {
  fetchAllRecipes: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllRecipes: () => {
      dispatch(fetchRecipes())
    }
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
