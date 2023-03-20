import { useFormik } from 'formik';

function MemberRegistration()  {
    const {handleSubmit, handleChange, values} = useFormik({
        initialValues: {
          firstName: 'Lorem',
          lastName: 'Ipsum',
          email: 'lorem@ipsum.com',
          gender: 'male',
          hobies: [],
          country: "Turkey",
        },
        onSubmit: values => {
          console.log(values);
        },
    });
    return (
        <div className='member__registration'>
            <h1>Membership Registration Form</h1>
            <form onSubmit={handleSubmit}>
              <div>
              <label htmlFor="firstName">First Name</label>
              <input name='firstName' value={values.firstName} onChange={handleChange}/>
              </div>
              <div>
              <label htmlFor="lastName">Last Name</label>
              <input name='lastName' value={values.lastName} onChange={handleChange}/>
              </div>
              <div>
              <label htmlFor="email">Email</label>
              <input name='email' value={values.email} onChange={handleChange}/>
              </div>
              <div>
              <span>Male</span>
              <input type="radio" name="gender" value="male" onChange={handleChange} checked={values.gender === "male"}/>
              <span>Female</span>
              <input type="radio" name="gender" value="female" onChange={handleChange} checked={values.gender === "female"}/>
              </div>
              <div>
              <input type="checkbox" name="hobies" value="Travel" onChange={handleChange}/> <span>Travel</span>
              <input type="checkbox" name="hobies" value="Photography" onChange={handleChange}/> <span>Photography</span>
              <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange}/> <span>Cinema</span>
              </div>
              <div>
              <select name='country' value={values.country} onChange={handleChange}>
                <option value="turkey">Turkey</option>
                <option value="england">England</option>
                <option value="germany">Germany</option>
                <option value="russia">Russia</option>
                <option value="abd">ABD</option>
                <option value="india">India</option>
              </select>
              </div>
              <div>
              <button type="submit">Submit</button>
              </div>
              <code>{JSON.stringify(values)}</code>
            </form>
        </div>
    )
}

export default MemberRegistration;