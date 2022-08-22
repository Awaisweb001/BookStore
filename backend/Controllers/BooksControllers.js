const express = require("express")
const Books = require("../Models/Books")

exports.PostLatestBooks = async (req,res,next)=>{
                    const LatestBooks = req.body
                    const Book = await Books.create(LatestBooks)
                    if(Book){
                              res.status(200).json({
                                        success:true,
                                        Data:Book
                              })
                    }
}

exports.PostAllBooks = async (req,res,next)=>{
          const AllBook = req.body
          const Allbk = await Books.create(AllBook)
          console.log(Allbk,"Allbk...");
          res.status(200).json({
                    success:true,
                    Data:Allbk
          })
}

