import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import BlogMarks from './components/BlogMarks/BlogMarks';
import { useState } from 'react';

function App() {

  const [bookMarks, setBookMArks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarks = (book) =>{
    const newBookMarks = [...bookMarks, book]
    setBookMArks(newBookMarks);
  }


  const handleMarksRead = (id,time) =>{
    const newTime = readingTime + time;
    setReadingTime(newTime); 

    // Remove Book Mark
    const remainingBookMarks = bookMarks.filter(bookMark => bookMark.id !== id)
    setBookMArks(remainingBookMarks);
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs 
          handleBookMarks={handleBookMarks}
          handleMarksRead = {handleMarksRead}
          >

          </Blogs>


        <BlogMarks bookMarks={bookMarks} readingTime={readingTime}></BlogMarks>
      </div>
    </>
  )
}

export default App
