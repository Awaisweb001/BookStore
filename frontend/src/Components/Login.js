import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import {useDispatch,useSelector} from "react-redux"
import {getLogin} from "../Actions/UserAction"
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const dispatch = useDispatch()
  
  const navigate = useNavigate()

  const [login,setLogin] = useState("")

  // <---Login--->

  const handleLogin = (e)=>{
        setLogin({
          ...login , [e.target.name]:e.target.value
        })
  }
  console.log(login,"Login....");

  const LoginUSer = ()=>{
    dispatch(getLogin(login))
  }

  // Data From Store

  const LogUser = useSelector((state)=> state.userlogin )

    const {Loginn} = LogUser

  if(Loginn){
        if(Loginn.msg == "Login SucessFull"){
            navigate("/Home")
        }
  }
  return (
          <section className="vh-100 mt-5">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid" alt="Sample image"/>
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>
        
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>
        
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-linkedin-in"></i>
                    </button>
                  </div>
        
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>
        
                  <div className="form-outline mb-4">
                    <input onChange={handleLogin} name="Email" type="email" id="form3Example3" className="form-control form-control-lg"
                      placeholder="Enter a valid email address" />
                    <label className="form-label" for="form3Example3">Email address</label>
                  </div>
        
                  <div className="form-outline mb-3">
                    <input onChange={handleLogin} name="Password" type="password" id="form3Example4" className="form-control form-control-lg"
                      placeholder="Enter password" />
                    <label className="form-label" for="form3Example4">Password</label>
                  </div>
        
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">Forgot password?</a>
                  </div>
        
                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button type="button" className="btn btn-primary btn-lg" onClick={LoginUSer}
                      style={{paddingLeft:"2.5rem",paddingRight:"2.5rem"}}>Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? &nbsp;
                    <span>
                              <Link to="/Signup">Register</Link>
                    </span>
                     </p>
                  </div>
        
                </form>
              </div>
            </div>
          </div>
        </section>
  )
}

export default Login