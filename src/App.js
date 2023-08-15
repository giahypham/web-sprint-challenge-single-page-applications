import React from "react";
import { useState } from "react";
import { Route, Routes, Link  } from 'react-router-dom'
import Form from "./Components/Form";
import schema from "./Validation/formSchema"
import * as yup from 'yup'
import axios from "axios";

///INITAL STATES////

const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  pineapple: false,
  sausage: false,
  olive: false,
  special: '',
}


const initialFormErrors = {
  name: '',
}



const Home = () => {
  return (
    <div>
      <h2>Welcome to Lambda Eats</h2>
      <nav> 
          <Link to = "/pizza" id = "order-pizza">
            Order Pizza 
          </Link>
       </nav>
    </div>
  );
};

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [orders, setOrders] = useState([])

  const handleSubmit = () => {
    axios.post(`https://reqres.in/api/orders`, formValues)
    .then(res => {
      setOrders([res.data, ...orders])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }


  return (
    <div>
      

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route 
        path = "/pizza" 
        element = {<Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit} />}/>
        
      </Routes>
    </div>
  );
};
export default App;
