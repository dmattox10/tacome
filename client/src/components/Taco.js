import { Row, Col, FormGroup, Button, Label, Input, Form } from 'reactstrap'
import { useEffect, useState } from 'react'
import { Field, Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import Output from './Output'
import { connect } from 'react-redux'
import Loading from './Loading'
import TacoName from './TacoName'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

const Taco = props => {

    const { onPostCustom, taco, error, fetching, onGetRandom, random } = props
    
    const [vote, updateVote] = useState(0)
    const [active, updateActive] = useState(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            votes: []
        },
        // validationSchema: Yup.object({
        //     name: Yup.string()
        //        .required('Name your Taco!'),         
        // }),
        onSubmit: values => {
            // do something!
            if (vote === 1) {
                values.vote = true
            } else if (vote === -1) {
                values.vote = false
            }
            onPostCustom(values)
        }
    })

    const doUpvote = () => {
        if (vote === 1) {
            updateVote(0)
            updateActive(null)
        } else {
            updateVote(1)
            updateActive('like')
        }
        // change active class
    }

    const doDownvote = () => {
        if (vote === -1) {
            updateVote(0)
            updateActive(null)
        } else {
            updateVote(-1)
            updateActive('dislike')
        }
        // change active class
    }

    // function Checkbox(props) {
    //     return (
    //       <Field name={props.name}>
    //         {({ field, formik }) => (
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
    //                 formik.setFieldTouched(field.name, true);
    //               }}
    //             />
    //             {props.value}
    //           </label>
    //         )}
    //       </Field>
    //     );
    //   }

    const FormRefactor = (
        <Form onSubmit={formik.handleSubmit}>
            <Row>
                <FormGroup>
                { 
                    taco.name ? 
                    <TacoName name={taco.name} /> 
                    : 
                    (
                        <Row>
                        <FormGroup>
                            <Label for='name'>Name your Taco!&nbsp;<span className='required'>*</span></Label>
                            <Input
                             id='name'
                             name='name'
                             type='name'
                             onChange={formik.handleChange}
                             onBlur={formik.handleBlur}
                             value={formik.values.name}
                             className={ !formik.errors.name ? 'form-control is-valid' : 'form-control is-invalid' }
                         />
                         { formik.errors.name ? <span className='invalid-feedback'>{ formik.errors.password }</span> : <span>&nbsp;</span>}
                     </FormGroup>
                 </Row>    
                    )
                }
                </FormGroup> 
            </Row>   
            <Output taco={taco} />    
            <Row>
                <div className='center'>
                    <ActionButton action={doDownvote} className={'dislike'} icon={'heartbroken'} />
                    <ActionButton action={doUpvote} className={'like'} icon={'heart'} />
                </div>
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
    )

    const CryBaby = (
        <div>
            (U+2639)
        </div>
    )
      
    return (
        <div>
            {
                taco ? FormRefactor : CryBaby
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
      onPostCustom: (values) => dispatch({ type: 'POST_CUSTOM', payload: values }),
      onGetRandom: () => dispatch({ type: 'GET_RANDOM' })
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Taco) 

  /*
   <div className='spacer'>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <FormGroup>
                        { taco.name ? TacoName : NameField }
                    </FormGroup> 
                </Row>   
                <Output />    
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