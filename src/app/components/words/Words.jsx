import * as React from 'react';
import {connect} from 'react-redux';

import {
  getFilters,
  getScores
} from '../../redux/actions/actions.jsx';

class Words extends React.Component {

  constructor(props) {
    super(props);
  }

 
  resize() {
    
  }

  
  render() {
    console.log('word')
    return(
      <div>
        Words
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filtersValues: state.app.filtersValues,
  data: state.scores.data,
  error: state.app.error,
  dataError: state.scores.error
});

const mapDispatchToProps = dispatch => ({
  getFilters() {
    dispatch(getFilters());
  },
  getScores(msg) {
    dispatch(getScores(msg))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Words);
