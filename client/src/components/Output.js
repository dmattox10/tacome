import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'
import { connect } from 'react-redux'
import Component from './Component'

const Output = props => {

    const { taco, fetching } = props

    const layers = ['condiments', 'mixins', 'seasonings', 'baseLayers', 'shells']

    return (
        <div>
            {
                layers.map(layer => <Component key={layer._id} layer={layer} component={taco[layer]} />)
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      taco: state.taco,
      error: state.error
    };
  };
  
  export default connect(mapStateToProps)(Output);