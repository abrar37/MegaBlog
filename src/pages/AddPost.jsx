import React from 'react'
import { Container, PostForm } from '../components/index'
import authService from '../appwrite/auth'

function AddPost() {
  console.log("currentUser: ", authService.getCurrentUser())
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost