import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import BlogMarks from './components/BlogMarks/BlogMarks';
import { useState } from 'react';

function App() {

  const [bookMarks, setBookMArks] = useState([])

  const handleBookMarks = (book) =>{
    console.log("Book Mark added", book)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleBookMarks={handleBookMarks}></Blogs>
        <BlogMarks></BlogMarks>
      </div>
    </>
  )
}

export default App
