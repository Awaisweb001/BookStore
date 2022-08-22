import React, { useEffect } from 'react'
import "./Home.css"
import Navbar from './Navbar'
import { FaBookOpen } from "react-icons/fa";
import { BiSearchAlt2, BiBasket } from "react-icons/bi";
import {useDispatch,useSelector} from "react-redux"
import {LatestBook,AllBook} from "../Actions/BooksAction"
import LatestArray from "../BooksData/LatestBooks.json"
import Books from "../BooksData/Books.json"
const Home = () => {
  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(LatestBook(LatestArray))
        dispatch(AllBook(Books))
    },[])

    const handleBook  = (item)=>{
        console.log(item);
    }

    // Latests Books.....

    const BookLatest = useSelector((state) => state.TrendsBooks)
    const {Trends}  = BookLatest
    
    let LatestRander 
    if(!Trends){
      LatestRander = "Loading...."
    }
    else{
      LatestRander = Trends.map((item)=>{
        return(
            <div onClick={()=> handleBook(item)} className='LatetBook'>
                <img className='Lateimg' src={item.image}/>
            </div>
        )
      })
    }

    // All Books Getingg.....

    const Allbooks = useSelector((state) => state.AlllBooks)
    const {Allbks} = Allbooks

    let AllBooksReander

    if(!Allbks){
      AllBooksReander = `<h1>Books Loading </h1>`
    }
    else{
      AllBooksReander = Allbks.map((item)=>{
        return(
          <div className='AllBook'>
                <img className='Lateimg' src={item.image}/>
            </div>
        )
      })
    }

  return (
    <>
      <div className='container-fluid p-0'>
        <Navbar />
        <div className='Container-fluid Banner'>
          <div className='SearchMain'>
            <div className='LogoDiv'>
              <div>
                <FaBookOpen style={{ marginTop: "-5px", color: "white" }} />&nbsp;
                <span>Books</span>
              </div>
            </div>
            <div className='SerachDiv'>
              <div className='Search'>
                <BiSearchAlt2 className='fasearch' />
                <input className='SearchInp' placeholder='Search....' />
              </div>
              <div className='MyBasket'>
                <span>MyBasket</span><BiBasket />
              </div>
            </div>
          </div>
        <div className='Latest'>
            <div className='LatestDesp'>
              <h2>History of World</h2>
              <p className='LatestAuthor'>By Awais</p>
              <p className='LAtestMiniDisp'>Most fundamentally, doing world history involves the study
               of cross cultural events or phenomena. History may be defined 
               as research into how cultures develop through time. World history
                is more general than traditional history and emphasizes trends that
                 transcend cultural boundaries.</p>
            </div>
            <div className='LatestBooks'>
            {LatestRander}
            </div>
        </div>
        </div>
      </div>
      <div className='container AllBooks'>
            {AllBooksReander}
      </div>
    </>
  )
}

export default Home