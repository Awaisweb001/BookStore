import React, { useState } from 'react'
import DashNav from './DashNav'
import "./CreateBook.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CreateBook = () => {

  const [newBook,setNewbook] = useState("")

  const handlecreateBook = (e)=>{
    setNewbook({
        ...newBook , [e.target.name]:e.target.value
    })
  }
  console.log(newBook,"This is New Book");

  return (
    <div>
      <div className='container-fluid DashContainer p-0'>
        <DashNav />
        <div className='DataDash crt'>
          <div className='searchbar '>
          </div>
          <div className='CreateBookBox'>
            <Form className='MainCreate'>
              <Form.Group className="mb-3 group" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control onChange={handlecreateBook} type="text" name='title' placeholder="Title"/>
              </Form.Group>
              <Form.Group className="mb-3 group" controlId="formBasicImage">
                <Form.Label>image</Form.Label>
                <Form.Control onChange={handlecreateBook} type="text" name='image' placeholder="Image" />
              </Form.Group>
              <Form.Group className="mb-3 group" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handlecreateBook} type="text" name='Description' placeholder="Description" />
              </Form.Group>
              <Form.Group className="mb-3 group" controlId="formBasicDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control onChange={handlecreateBook} type="date" name='publish' placeholder="publish" />
              </Form.Group>
              <Form.Group className="mb-3 group" controlId="formBasicTranscript">
                <Form.Label>Transcript</Form.Label>
                <Form.Control onChange={handlecreateBook} type="text" name='Transcript' placeholder="Transcript" />
              </Form.Group>
              <Button className='btn' variant="primary">
                Create Book
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>


  )
}

export default CreateBook