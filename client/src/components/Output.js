import Layer from './Layer'

const Output = props => {

    const { taco } = props

    return (
        <div>
            {
                Object.entries(taco).map(([key, value]) => {
                    if (key !== 'fullTacos') {
                        console.log(key, value)
                        return <Layer key={key[0]._id} layerKey={key} layerValue={value} />
                    }
                })
            }
        </div>
    )
    
}

  
  export default Output