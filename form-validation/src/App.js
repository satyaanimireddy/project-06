import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""

  })
  // console.log(data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (data.username.length < 4) {
      alert('username must be  more than 4 characters')
    } else if (data.email.length < 8) {
      alert('email must be  more than 8 characters')

    } else if (data.password.length < 4) {
      alert('password must be  more than 4 characters')
    } else if (data.password !== data.cpassword) {
      alert('password not matched')
    }
    else {
      console.log(data);
      // axios.post("api",data)   
    }
    console.log('submitted');
  }
  return (
    <div className="App">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">User Name</label>
          <input type="text" name='username' value={data.username} placeholder='enter name' onChange={handleChange} />
        </div>
        {data.username.length < 4 ? <span>Username must be more than 4</span> : null}
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name='email' value={data.email} placeholder='enter email' onChange={handleChange} />
        </div>
        {data.email.length < 15 ? <span>Email must be 15 characters</span> : null}
        <div>
          <label htmlFor="" >password</label>
          <input type="password" name='password' value={data.password} placeholder='enter password' onChange={handleChange} />
        </div>
        {data.password.length < 4 ? <span>password must be 4 characters</span> : null}

        <div>

          <label htmlFor="">Confirm Password</label>
          <input type="password" name='cpassword' value={data.cpassword} placeholder='confirm password' onChange={handleChange} />
        </div>
        {(data.password !== data.cpassword) ? <span>password not matched</span> : null}

        <div>
          <button type='submit'>submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
