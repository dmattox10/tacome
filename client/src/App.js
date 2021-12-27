import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import logo from './logo.svg';
import increment, { incrementAsync, decrement } from './actions';
import Counter from './Counter';
import './App.css';
 
const App = props => {
  const dispatch = useDispatch();
  // const taco = useSelector(state => state.taco)
  const { fetching, taco, error } = props
  return (
    <div className="App">
      {taco.category === full_tacos ? 
      <Taco
        taco={taco}
        onUpVote={() => dispatch(upVote(taco))}
        onDownVote={() => dispatch(downVote(taco))}
      />
    :
      <Full
        taco={taco}
        onUpVote={() => dispatch(upVote(taco))}
        onDownVote={() => dispatch(downVote(taco))}
      />
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    taco: state.taco,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestRandom: () => dispatch({ type: 'GET_RANDOM' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);