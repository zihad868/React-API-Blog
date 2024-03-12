import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import BlogMarks from './components/BlogMarks/BlogMarks';

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex p-4'>
        <Blogs></Blogs>
        <BlogMarks></BlogMarks>
      </div>
    </>
  )
}

export default App
