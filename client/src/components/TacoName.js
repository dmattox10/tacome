import { Row, Card, CardBody, CardTitle } from "reactstrap"
const TacoName = props => {

    const { name } = props
    return (
        <Row>
            <Card
                body
                color="dark"
                outline
            >
                <CardBody>
                    <CardTitle tag="h5">
                        { name }
                    </CardTitle>
                </CardBody>
            </Card>
        </Row>
    )
}

export default TacoName