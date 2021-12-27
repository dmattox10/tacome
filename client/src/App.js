import React from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import 'bootswatch/dist/cyborg/bootstrap.min.css'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Welcome from './components/Welcome'
import Taco from './components/Taco'
import Full from './components/Full'
import Custom from './components/Custom'
import { Container } from 'reactstrap';
 
const App = props => {
  const dispatch = useDispatch();
  // const taco = useSelector(state => state.taco)
  const { fetching, taco, error } = props
  return (
    <div className="App">
      <Navigation currentPage={currentPage} navLinks={navLinks} />
      <Container>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/Taco' component={Taco} />
          <Route path='/Custom' component={Custom} />
          <Route path='/Full' component={Full} />
        </Switch>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    taco: state.taco,
    error: state.error,
    currentPage: state.currentPage,
    navLinks: state.navlinks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestRandom: () => dispatch({ type: 'GET_RANDOM' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);