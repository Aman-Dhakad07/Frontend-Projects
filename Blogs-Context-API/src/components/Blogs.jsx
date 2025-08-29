import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';


const Blogs = () => {
    //consume
    const {posts,loading} = useContext(AppContext);

  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center' >
      {
        loading ? (
          <div className='min-h-[80vh] w-full flex justify-center items-center'>
            <p className='text-center font-bold text-3xl'>Loading</p>
          </div>

        ) :   posts.length===0 ? 
             (<div>
                 <p>No Post Found</p>
             </div>
            ) : (

              posts.map((post) => (
                <BlogDetails key={post.id}  post={post}  />

              ))
        ) }

    </div>
  );
}

export default Blogs
