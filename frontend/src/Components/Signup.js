import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./signup.css"
import { useDispatch, useSelector } from 'react-redux'
import {UserRegister} from "../Actions/UserAction"

const Signup = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // <---States--->

    const [register,setRegister] = React.useState("")

    // <---Signup--->

    const handleSignUp = (e)=>{
      setRegister({
        ... register, [e.target.name]:e.target.value
      })  
    }

    const SucessSignup = useSelector((state) => state.usersignup)
    const {Signup} = SucessSignup

      if(Signup){
        if(Signup.msg == "Account Create SucessFuly"){
            navigate("/")
        }
      }

    const Register = ()=>{
      dispatch(UserRegister(register))
    }

  return (
          <div className='Container-fluid'>
          <section className="vh-100 bg-image sect">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card" style={{borderRadius:"15px"}}>
                    <div className="card-body sigupCard p-5">
                      <h2 className="text-uppercase crete text-center mb-5">Create an account</h2>
                      <form className='SignUpForm'> 
        
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form3Example1cg">Your Name</label>
                          <input onChange={handleSignUp} type="text" name='Name' id="form3Example1cg" className="form-control form-control-lg" />
                        </div>
        
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form3Example3cg">Your Email</label>
                          <input onChange={handleSignUp} type="email" name='Email' id="form3Example3cg" className="form-control form-control-lg" />
                        </div>
        
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form3Example4cg">Password</label>
                          <input onChange={handleSignUp} type="password" name='Password' id="form3Example4cg" className="form-control form-control-lg" />
                        </div>
        
                        <div className="form-outline mb-4">
                          <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                          <input onChange={handleSignUp} type="password" name='ConfirmPassword' id="form3Example4cdg" className="form-control form-control-lg" />
                        </div>
        
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                          <label className="form-check-label" for="form2Example3g">
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                          </label>
                        </div>
        
                        <div className="d-flex justify-content-center">
                          <button type="button" onClick={Register}
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                        </div>
        
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <u className='u'> <Link to="/">Login here</Link> </u></p>
        
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
  )
}

export default Signup