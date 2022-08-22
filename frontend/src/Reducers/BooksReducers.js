import {
          LATEST_BOOKS_REQUEST,
          LATEST_BOOKS_SUCESS,
          LATEST_BOOKS_FAIL,

          ALL_BOOKS_REQUEST,
          ALL_BOOKS_SUCESS,
          ALL_BOOKS_FAIL,
} from "../Constants/Books"

export const LATESTBooks = (state={},action)=>{
          switch (action.type){
                    case LATEST_BOOKS_REQUEST:
                              return {loading:true}
                    case LATEST_BOOKS_SUCESS:
                              return {loading:false,Trends:action.payload}
                    case LATEST_BOOKS_FAIL:
                              return {loading:false,message:action.payload}
                    default:
                              return state
                    
          }
}

export const ALLBooks = (state={},action)=>{
          switch (action.type){
                    case ALL_BOOKS_REQUEST:
                              return {loading:true}
                    case ALL_BOOKS_SUCESS:
                              return {loading:false,Allbks:action.payload}
                    case ALL_BOOKS_FAIL:
                              return {loading:false,message:action.payload}
                    default:
                              return state
                    
          }
}