import {
          USER_SIGNUP_REQUEST,
          USER_SIGNUP_SUCESS,
          USER_SIGNUP_FAIL,

          USER_LOGIN_REQUEST,
          USER_LOGIN_SUCESS,
          USER_LOGIN_FAIL
} from "../Constants/User"

export const UserRegister = (state={},action)=>{
          switch (action.type){
                    case USER_SIGNUP_REQUEST:
                              return {loading:true}
                    case USER_SIGNUP_SUCESS:
                              return {loading:false,Signup:action.payload}
                    case USER_SIGNUP_FAIL:
                              return {loading:false,message:action.payload}
                    default:
                              return state
                    
          }
}

export const UserLogin = (state={},action)=>{
          switch (action.type){
                    case USER_LOGIN_REQUEST:
                              return {loading:true}
                    case USER_LOGIN_SUCESS:
                              return {loading:false,Loginn:action.payload}
                    case USER_LOGIN_FAIL:
                              return {loading:false,message:action.payload}
                    default:
                              return state
                    
          }
}