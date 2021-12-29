import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'bootswatch/dist/cyborg/bootstrap.min.css'
import './App.css'
import { Route, Routes } from 'react-router'
import Taco from './components/Taco'
import Full from './components/Full'
import Random from './components/Random'
import Custom from './components/Custom'
import Navigation from './components/Navigation'
import { Container } from 'reactstrap';
import Loading from './components/Loading'


const App = props => {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const taco = useSelector(state => state.taco)
  const { fetching, taco, currentPage, navLinks, onRequestRandom, capabilities, onRequestCaps, error } = props
  useEffect(() => {
    if (!capabilities) {
      onRequestCaps()
    }
    if (error) {
      console.log(error)
    }
    // if (!taco) {
    //   onRequestRandom()
    // }
  }, [capabilities])

  const Ready = (
    <Container>
        <Routes>
          <Route path='/' element={<Random />} />
          {/* <Route path='/Taco' element={<Taco />} /> */}
          <Route path='/Custom' element={<Custom />} />
          {/* <Route path='/Full' element={<Full />} /> */}
          <Route path='/Random' element={<Random />} />
          {/* <Route path='/Complete' element={<Complete />} /> */}
        </Routes>
      </Container>
  )
  return (
    <div className="App">
      <Navigation currentPage={currentPage} navLinks={navLinks} />
      <Container className='show'>
        <Routes>
          <Route path='/' element={<Random />} />
          {/* <Route path='/Taco' element={<Taco />} /> */}
          <Route path='/Custom' element={<Custom />} />
          {/* <Route path='/Full' element={<Full />} /> */}
          <Route path='/Random' element={<Random />} />
          {/* <Route path='/Complete' element={<Complete />} /> */}
        </Routes>
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
    navLinks: state.navLinks,
    capabilities: state.capabilities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestCaps: () => dispatch({ type: 'CAPABILITIES' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);