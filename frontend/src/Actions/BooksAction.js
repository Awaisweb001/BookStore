import axios from "axios"
import {
          LATEST_BOOKS_REQUEST,
          LATEST_BOOKS_SUCESS,
          LATEST_BOOKS_FAIL,

          ALL_BOOKS_REQUEST,
          ALL_BOOKS_SUCESS,
          ALL_BOOKS_FAIL,
} from "../Constants/Books"

export const LatestBook = ((Latest) => async (dispatch) =>{
          try{
                    dispatch({
                              type:LATEST_BOOKS_REQUEST
                    })

                    const {data} = await axios.post(
                      "http://localhost:5000/api/v1//Books/latest",Latest
                    )
                    
                    dispatch({
                              type:LATEST_BOOKS_SUCESS,
                              payload:data.Data
                    })

                    
          }catch(error){
                    dispatch({
                              type: LATEST_BOOKS_FAIL,
                              payload:
                                error.response && error.response.data
                                  ? error.response.data.message
                                  : error.message,
                            })
          }
})


export const AllBook = ((All) => async (dispatch) =>{
  console.log(All,"..All");
  try{
            dispatch({
                      type:ALL_BOOKS_REQUEST
            })

            const {data} = await axios.post(
              "http://localhost:5000/api/v1//Books/Bookss",All
            )
                console.log(data,"All Data");
            

            dispatch({
                      type:ALL_BOOKS_SUCESS,
                      payload:All
            })

            
  }catch(error){
            dispatch({
                      type: ALL_BOOKS_FAIL,
                      payload:
                        error.response && error.response.data
                          ? error.response.data.message
                          : error.message,
                    })
  }
})