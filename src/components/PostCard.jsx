import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-slate-800 shadow-lg rounded-xl p-2'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl w-full h-[225px]' />
            </div>
            <h2 className='text-xl font-bold mb-4'>{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard