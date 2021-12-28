import React, { useEffect } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';
import 'bootswatch/dist/cyborg/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router'
import Welcome from './components/Welcome'
import Taco from './components/Taco'
import Full from './components/Full'
import Custom from './components/Custom'
import Navigation from './components/Navigation'
import { Container } from 'reactstrap';
import { useNavigate } from 'react-router-dom'
import Loading from './components/Loading'


const App = props => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const taco = useSelector(state => state.taco)
  const { fetching, taco, error, currentPage, navLinks, onRequestRandom, capabilities, onRequestCaps } = props
  useEffect(() => {
    if (!capabilities) {
      onRequestCaps()
      onRequestRandom()
    }
  }, [capabilities])

  const Ready = (
    <Container>
        <Routes>
          <Route exact path='/' element={<Taco/>} />
          <Route path='/Taco' element={<Taco/>} />
          <Route path='/Custom' element={<Custom/>} />
          <Route path='/Full' element={<Full/>} />
          <Route path='/Random' random={true} element={<Taco/>} />
        </Routes>
      </Container>
  )
  return (
    <div className="App">
      <Navigation currentPage={currentPage} navLinks={navLinks} />
      {
        fetching ? <Loading /> : Ready
      }
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    taco: state.taco,
    error: state.error,
    currentPage: state.currentPage,
    navLinks: state.navLinks,
    capabilities: state.capabilities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestRandom: () => dispatch({ type: 'GET_RANDOM' }),
    onRequestCaps: () => dispatch({ type: 'CAPABILITIES' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);