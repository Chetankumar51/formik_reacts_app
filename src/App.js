import './App.css';
import FormikApp from './components/FormikApp';
import {Formik} from "formik";
import * as Yup from 'yup';

function App() {
  const ErrorSchema = Yup.object().shape({
    username:Yup.string().required("Name is required").min(2,"too short").max(12,"Too long"),

    age: Yup.number()
        .typeError("Age must be a number")
        .integer("must be an integer")
        .required("Required")
        .min(18,"you must be atleast 18 years")
        .max(60,"you must be less than 60 years"),
    
    email: Yup.string().email("Invalid email").required("required"),
// gyghujkl
    phone: Yup.string()
    .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,"Not a phone number" )
    .required("required"),

    password: Yup.string()
    .min(6,"Password must be at least 6 characters")
    .required("required"),

    confirmedPassword: Yup.string()
    .oneOf([Yup.ref("password"),null],"Password must match")
    .required("required")


  })
  return (
   <div className='container pt-5' >
    <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Contact Form</h1>
          <Formik
          initialValues={{
            username:"",
            age:"",
            email:"",
            phone:"",
            password:"",
            confirmedPassword:""
          }}
           onSubmit={(value,{resetForm})=>{
            console.log(value);
            resetForm()
            alert("successfull")
          }} 
          validationSchema={ErrorSchema}
          component={FormikApp} />
            {/* <FormikApp /> */}
        </div>
    </div>
   
   </div>
  );
}

export default App;
