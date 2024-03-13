import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleBookMarks, handleMarksRead }) => {

    const [blogs, setBlogs] = useState([])

    useEffect(() =>{
        fetch('blogs.json')
          .then(req => req.json())
          .then(data => setBlogs(data))
    }, [])
    return (
        <div className="bg-red-200 md:w-2/3">
            <h1 className='text-4xl'>React Blog</h1>
            {
                blogs.map((blog) => 
                <Blog 
                key={blog.id} 
                blog={blog}
                handleBookMarks = {handleBookMarks}
                handleMarksRead = {handleMarksRead}
                >

                </Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleBookMarks: PropTypes.func.isRequired,
    handleMarksRead: PropTypes.func.isRequired
}

export default Blogs;