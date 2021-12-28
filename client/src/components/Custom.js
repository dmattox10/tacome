import { CustomInput, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Container, Row, Col, Form, FormGroup, Label, FormFeedback, Input, Button, Modal, ModalHeader, ModalBody, CardHeader } from 'reactstrap'
import { useState } from 'react'
import { useFormik, Field } from 'formik'
import * as Yup from 'yup'
import { connect } from 'react-redux'

const Custom = props => {

    const { onPostCustom } = props

    const formik = useFormik({
        initialValues: {
            baseLayers: 0,
            condiments: 0,
            mixins: 0,
            seasonings: 0,
            shells: 0
        },
        validationSchema: Yup.object({
            baseLayers: Yup.number()
            .required('Please enter a number less than MAX'), // capabilities, numbers go here
            mixins: Yup.number()
            .required('Please enter a number less than MAX'),
            condiments: Yup.number()
            .required('Please enter a number less than MAX'),
            seasonings: Yup.number()
            .required('Please enter a number less than MAX'),
            shells: Yup.number()
            .required('Please enter a number less than MAX')             
        }),
        onSubmit: values => {
            // do something!
            onPostCustom(values)
        }
    })

    // const nameField = (
    //     <Row>
    //         <FormGroup>
    //             <Label for='name'>Name your Taco!&nbsp;<span className='required'>*</span></Label>
    //             <Input
    //                 id='name'
    //                 name='name'
    //                 type='name'
    //                 onChange={formik.handleChange}
    //                 onBlur={formik.handleBlur}
    //                 value={formik.values.name}
    //                 className={ !formik.errors.name ? 'form-control is-valid' : 'form-control is-invalid' }
    //             />
    //             { formik.errors.name ? <span className='invalid-feedback'>{ formik.errors.password }</span> : <span>&nbsp;</span>}
    //         </FormGroup>
    //     </Row>
    // )

    // function Checkbox(props) {
    //     return (
    //       <Field name={props.name}>
    //         {({ field, form }) => (
    //           <label>
    //             <input
    //               {...field}
    //               type="checkbox"
    //               checked={field.value.includes(props.value)}
    //               onChange={() => {
    //                 const set = new Set(field.value);
    //                 if (set.has(props.value)) {
    //                   set.delete(props.value);
    //                 } else {
    //                   set.add(props.value);
    //                 }
    //                 field.onChange(field.name)(Array.from(set));
    //                 form.setFieldTouched(field.name, true);
    //               }}
    //             />
    //             {props.value}
    //           </label>
    //         )}
    //       </Field>
    //     );
    //   }

    return (
        <div className='spacer'>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <FormGroup>
                        <Label for='shells'> How many shells? <span className='required'>*</span></Label>
                        <Input
                            id='shells'
                            name='shells'
                            type='number'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.shells}
                            className={ !formik.errors.shells ? 'form-control is-valid' : 'form-control is-invalid' }
                        />
                        { formik.errors.shells ? <span className='invalid-feedback'>{ formik.errors.shells }</span> : <span>&nbsp;</span>}
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label for='baseLayers'> How many base layers? <span className='required'>*</span></Label>
                        <Input
                            id='baseLayers'
                            name='baseLayers'
                            type='baseLayers'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.baseLayers}
                            className={ !formik.errors.baseLayers ? 'form-control is-valid' : 'form-control is-invalid' }
                        />
                        { formik.errors.baseLayers ? <span className='invalid-feedback'>{ formik.errors.baseLayers }</span> : <span>&nbsp;</span>}
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label for='seasonings'> How many seasonings? <span className='required'>*</span></Label>
                        <Input
                            id='seasonings'
                            name='seasonings'
                            type='seasonings'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.seasonings}
                            className={ !formik.errors.seasonings ? 'form-control is-valid' : 'form-control is-invalid' }
                        />
                        { formik.errors.seasonings ? <span className='invalid-feedback'>{ formik.errors.seasonings }</span> : <span>&nbsp;</span>}
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label for='mixins'> How many mixins? <span className='required'>*</span></Label>
                        <Input
                            id='mixins'
                            name='mixins'
                            type='mixins'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.mixins}
                            className={ !formik.errors.mixins ? 'form-control is-valid' : 'form-control is-invalid' }
                        />
                        { formik.errors.mixins ? <span className='invalid-feedback'>{ formik.errors.mixins }</span> : <span>&nbsp;</span>}
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label for='condiments'> How many condiments? <span className='required'>*</span></Label>
                        <Input
                            id='condiments'
                            name='condiments'
                            type='condiments'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.condiments}
                            className={ !formik.errors.condiments ? 'form-control is-valid' : 'form-control is-invalid' }
                        />
                        { formik.errors.condiments ? <span className='invalid-feedback'>{ formik.errors.condiments }</span> : <span>&nbsp;</span>}
                    </FormGroup>
                </Row>
                {/* <Row>
                    <Col xs='6'>
                        <Checkbox name="votes" value="false" />
                    </Col>
                    <Col xs='6'>
                        <Checkbox name="votes" value="true" />   
                    </Col>
                </Row> */}
                <div className='spacer'>
                    <Row>
                        <Button type='submit' style={{width: '100%'}} className='btn-success'>Submit</Button>
                    </Row>
                </div>
                {/* <div className='spacer'>
                    <Row>
                        {error ? <span className='invalid-feedback'>{ error.message }</span> : <span>&nbsp;</span>}
                    </Row>
                </div> */}
            </Form>
        </div>
    )
}

// const mapStateToProps = state => {
//     return {
//       fetching: state.fetching,
//       taco: state.taco,
//       error: state.error
//     };
//   };
  
  const mapDispatchToProps = dispatch => {
    return {
      onPostCustom: () => dispatch({ type: 'POST_CUSTOM' })
    };
  };
  
  export default connect( mapDispatchToProps)(Custom);