import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import {
          UserRegister,
          UserLogin
} from "./Reducers/userreducers"

import {
  LATESTBooks,
  ALLBooks
} from "./Reducers/BooksReducers"



const reducer = combineReducers({
  usersignup: UserRegister,
  userlogin:UserLogin,
  TrendsBooks:LATESTBooks,
  AlllBooks:ALLBooks
})



const initialState = {
//   userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(...middleware))
)

export default store
