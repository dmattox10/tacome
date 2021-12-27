import {} from 'reactstrap'
import { connect } from 'react-redux'

const Output = props => {

    const { taco, fetching } = props

    const layers = ['condiments', 'mixins', 'seasonings', 'baseLayers', 'shells']

    return (
        <div>
            {
                layers.map(layer => <Component layer={layer} component={taco[layer]} />)
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