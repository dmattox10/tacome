import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { connect } from 'react-redux'
import Taco from './Taco'

const Random = props => {

    const { onRequestRandom, fetching, taco } = props

    const GetRandom = (
        <Card
                body
                color="dark"
                outline
            >
                <CardBody>
                    <CardTitle tag="h5">
                        Taco Me!
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        Click Below to Get a Random Taco
                    </CardSubtitle>
                    <CardText>
                        <Button onClick={() => onRequestRandom()} >Taco Me!</Button>
                    </CardText>
                </CardBody>
            </Card>
    )

    
    return (
        <div>
           {
               taco ? <Taco taco={ taco } /> : GetRandom
           } 
        </div>
    )
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
      onRequestCaps: () => dispatch({ type: 'CAPABILITIES' }),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Random);