import { CustomInput, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Container, Row, Col, Form, FormGroup, Label, FormFeedback, Input, Button, Modal, ModalHeader, ModalBody, CardHeader } from 'reactstrap'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Output from './Output'

const Custom = props => {

    const { onPostFull, taco, error, fetching } = props

    const formik = useFormik({
        initialValues: {
            name: '',
            votes: []
        },
        validationSchema: Yup.object({
            name: Yup.string()
            .required('Name your Taco!'),         
        }),
        onSubmit: values => {
            // do something!
            onPostFull(values)
        }
    })

    function Checkbox(props) {
        return (
          <Field name={props.name}>
            {({ field, form }) => (
              <label>
                <input
                  {...field}
                  type="checkbox"
                  checked={field.value.includes(props.value)}
                  onChange={() => {
                    const set = new Set(field.value);
                    if (set.has(props.value)) {
                      set.delete(props.value);
                    } else {
                      set.add(props.value);
                    }
                    field.onChange(field.name)(Array.from(set));
                    form.setFieldTouched(field.name, true);
                  }}
                />
                {props.value}
              </label>
            )}
          </Field>
        );
      }

    return (
        <div className='spacer'>
            <Form onSubmit={formik.handleSubmit}>
            <Card
                body
                color="dark"
                outline
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {taco.name}
                    </CardTitle>
                    <CardText>
                        {taco.html}
                    </CardText>
                </CardBody>
            </Card>
                <Row>
                    <Col xs='6'>
                        <Checkbox name="votes" value="false" />
                    </Col>
                    <Col xs='6'>
                        <Checkbox name="votes" value="true" />   
                    </Col>
                </Row>
                <div className='spacer'>
                    <Row>
                        <Button type='submit' style={{width: '100%'}} className='btn-success'>Submit</Button>
                    </Row>
                </div>
                <div className='spacer'>
                    <Row>
                        {formError ? <span className='invalid-feedback'>{ formError.message }</span> : <span>&nbsp;</span>}
                    </Row>
                </div>
            </Form>
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
  
  const mapDispatchToProps = dispatch => {
    return {
      onPostFull: () => dispatch({ type: 'POST_FULL' })
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Full);