import { Card, CardBody, CardTitle, CardText, Row, Col, Button } from 'reactstrap'
import { Field, Formik } from 'formik'
import { connect } from 'react-redux'
import { Navigate } from "react-router-dom";


const Full = props => {

    const { onPostFull, taco, error, fetching } = props

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         votes: []
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string()
    //         .required('Name your Taco!'),         
    //     }),
    //     onSubmit: values => {
    //         // do something!
    //         onPostFull(values)
    //     }
    // })

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

    const Form = (
        <Formik
        initialValues={{ name: '',
        votes: [] }}
        onSubmit={values => {
          onPostFull(values)
        }}
        
      >
        {formik => (
          <div>
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
                          {error ? <span className='invalid-feedback'>{ error.message }</span> : <span>&nbsp;</span>}
                      </Row>
                  </div>
          </div>
        )}
      </Formik>
    )

    return (
        <div>
            {
                fetching ? <Navigate to='/Taco' /> : Form

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
  
  const mapDispatchToProps = dispatch => {
    return {
      onPostFull: (values) => {
          dispatch({ type: 'POST_FULL', payload: values })
          dispatch({ type: 'UPDATE_PATH', payload: 'Full' })
        }

    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Full);

  /*
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
                        {error ? <span className='invalid-feedback'>{ error.message }</span> : <span>&nbsp;</span>}
                    </Row>
                </div>
            </Form>
        </div>
        */