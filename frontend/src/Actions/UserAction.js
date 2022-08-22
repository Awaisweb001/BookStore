import axios from "axios"
import { useNavigate } from "react-router-dom"


import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCESS,
  USER_SIGNUP_FAIL,

  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCESS,
  USER_LOGIN_FAIL
} from "../Constants/User"


export const UserRegister = (Data) => async (dispatch) => {
  try {
    dispatch({
      type: USER_SIGNUP_REQUEST
    })


    const { data } = await axios.post("http://localhost:5000/api/v1/usersignup/new", Data)

    dispatch({
      type: USER_SIGNUP_SUCESS,
      payload: data
    })

    if (data) {
      alert(data.msg)
    }

  } catch (error) {
    dispatch({
      type: USER_SIGNUP_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    })
  }
}


  /// Login......

  
export const getLogin = (daata) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })


    const { data } = await axios.post("http://localhost:5000/api/v1//userLogin/new", daata)

    dispatch({
      type: USER_LOGIN_SUCESS,
      payload: data
    })

    console.log(data,"Data....");

    if (data) {
      alert(data.msg)
    }

  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    })
  }

}