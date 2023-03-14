import './App.css';
import { Formik } from 'formik';

function App() {
  return (
    <div className="App">
      <h1>Membership Registration Form</h1>
      <Formik
        initialValues={{
          firstName: 'Lorem',
          lastName: 'Ipsum',
          email: 'lorem@ipsum.com',
          gender: 'male',
          hobies: [],
          country: "Turkey",
        }}
        onSubmit={ (values) => {
          console.log(values);
        }}
      >
        {
          ({handleSubmit, handleChange, values}) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input name='firstName' value={values.firstName} onChange={handleChange}/>
    
              <label htmlFor="lastName">Last Name</label>
              <input name='lastName' value={values.lastName} onChange={handleChange}/>
    
              <label htmlFor="email">Email</label>
              <input name='email' value={values.email} onChange={handleChange}/>

              <span>Male</span>
              <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"}/>
              <span>Female</span>
              <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"}/>

              <input type="checkbox" name="hobies" value="Travel" onChange={handleChange}/> <span>Travel</span>
              <input type="checkbox" name="hobies" value="Photography" onChange={handleChange}/> <span>Photography</span>
              <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange}/> <span>Cinema</span>

              <select name='country' value={values.country} onChange={handleChange}>
                <option value="turkey">Turkey</option>
                <option value="england">England</option>
                <option value="germany">Germany</option>
                <option value="russia">Russia</option>
                <option value="abd">ABD</option>
                <option value="india">India</option>
              </select>
    
              <button type="submit">Submit</button>

              <code>{JSON.stringify(values)}</code>
            </form>
          )
        }
      </Formik>
    </div>
  );
}

export default App;
