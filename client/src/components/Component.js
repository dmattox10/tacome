import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Component = props => {

    const { name, html } = props 

    return (

        <div>
            <Card
                body
                color="dark"
                outline
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {name}
                    </CardTitle>
                    <CardText>
                        {html}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Component