import { Container } from 'reactstrap'
import Component from './Component'

const Layer = props => {

    const { layerKey, layerValue } = props
    console.log(layerKey, layerValue)
    return (
            <div>
                <h4>{layerKey}</h4>
                <Container>
                {
                    layerValue.map( layerItem => <Component key={layerItem.name} name={layerItem.name} html={layerItem.html} /> )
                }
                </Container>
            </div>
        )
    
}

  
  export default Layer