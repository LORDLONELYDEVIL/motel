import React from 'react'
import { Form,Button, Container } from 'react-bootstrap'


const Rp = () => {
  return (
    
    <Container fluid className='bg-danger p-5'>
      <header><h2 className='text-center'>---   REGISTER HERE  ---</h2></header>
      
    <Form>
    <Form.Group class="mb-3" controlId='basicText'>
        <Form.Label>Username</Form.Label>
        <Form.Control type='text'placeholder='John'
         />
         
    </Form.Group><br></br>
    <Form.Group class="mb-3" controlId='basicText'>
        <Form.Label>Mobile No</Form.Label>
        <Form.Control type='number'placeholder='+91'
         />
         
    </Form.Group><br></br>
    <Form.Group class="mb-3" controlId='basicText'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email'placeholder='Callmejohnny@gmail.com'
         />
         
    </Form.Group><br></br>
    <Form.Group class="mb-3 justify-content-center" controlId='basicDesk' >
        <Form.Label>Password</Form.Label>
        <Form.Control type='password'placeholder='' 
         />
    </Form.Group><br></br>
    <div className='text-end'>
     <Button variant='dark' type='submit' style={{width:'30%'}}>
        submit
     </Button>

    </div>
    
   </Form>

</Container>
  )
}

export default Rp