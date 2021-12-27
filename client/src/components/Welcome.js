import { CustomInput, Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink, Container, Row, Col, Form, FormGroup, Label, FormFeedback, Input, Button, Modal, ModalHeader, ModalBody, CardHeader } from 'reactstrap'
import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Output from './Output'

const Welcome = props => {

    return (
        <div>
            Use the navigation to explore the app.
        </div>
    )

}
  
  export default Welcome