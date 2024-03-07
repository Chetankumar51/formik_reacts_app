import { Field, Form } from 'formik'
import React from 'react'

const FormikApp = ({errors,touched}) => {
  // console.log(errors);
  return (
    <Form>

        <div className="form-group">
            <label className='col-form-label' >
                name
            </label>
            <Field name="username" className={touched.username ? `form-control ${errors.username ? "invalid" : "valid" } ` : `form-control`} type="text" />
            {touched.username && errors.username && <small className='text-danger' >{errors.username}</small>}
        </div>


        <div className="form-group">
            <label className='col-form-label' >
                Age
            </label>
            <Field name="age" className={touched.age ? `form-control ${errors.age ? "invalid" : "valid" } ` : `form-control`} type="text" />
            {touched.age && errors.age && <small className='text-danger' >{errors.age}</small>}
        </div>
       


        <div className="form-group">
            <label className='col-form-label' >
                Email
            </label>
            <Field name="email" className={touched.email ? `form-control ${errors.email ? "invalid" : "valid" } ` : `form-control`} type="text" />
            {touched.email && errors.email && <small className='text-danger' >{errors.email}</small>}
        </div>


        <div className="form-group">
            <label className='col-form-label' >
                Phone
            </label>
            <Field name="phone" className={touched.phone ? `form-control ${errors.phone ? "invalid" : "valid" } ` : `form-control`} type="text" />
            {touched.phone && errors.phone && <small className='text-danger' >{errors.phone}</small>}
        </div>


        <div className="form-group">
            <label className='col-form-label' >
                Password
            </label>
            <Field name="password" className={touched.password ? `form-control ${errors.password ? "invalid" : "valid" } ` : `form-control`} type="text" />
            {touched.password && errors.password && <small className='text-danger' >{errors.password}</small>}
        </div>
        

        <div className="form-group">
            <label className='col-form-label' >
            confirmedPassword
            </label>
            <Field name="confirmedPassword" className={touched.confirmedPassword ? `form-control ${errors.confirmedPassword ? "invalid" : "valid" } ` : `form-control`} type="text" />
            {touched.confirmedPassword && errors.confirmedPassword && <small className='text-danger' >{errors.confirmedPassword}</small>}
        </div>


        <button type='submit' className='btn btn-primary my-3' >
            Submit
        </button>
    </Form>
  )
}

export default FormikApp