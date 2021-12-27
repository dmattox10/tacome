import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const Component = props => {

    const { _id, category, name, html } = props 

    return (

        <div>
            <Card
                body
                color="dark"
                outline
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {category}
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2 text-muted"
                        tag="h6"
                    >
                        {name}
                    </CardSubtitle>
                    <CardText>
                        {html}
                    </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Component