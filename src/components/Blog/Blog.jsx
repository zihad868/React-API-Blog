import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleBookMarks}) => {
    const {title, coverImg, author, readingTimes, postedDate, hashtags} = blog;
    console.log("Single",blog)
    console.log("Cover",coverImg)
    return (
        <div className='mb-8'>
            <h3 className='text-2xl'>{title}</h3>
            <img className='w-full' src={coverImg} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author.image} alt="" />

                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author.name}</h3>
                        <p>{postedDate}</p>
                    </div>
                </div>

                <div className='mt-4'>
                    <span>{readingTimes} Minutes</span>
                    <button onClick={() => handleBookMarks(blog)} className='ml-5 w-5'>

                        <FaBookmark />
                    </button>
                </div>
            </div>

            <h2 className='text-4xl'>{title}</h2>
            {
                hashtags.map((hash, idx) => <span key={idx} className='mr-5'>#<a href="">{hash}</a></span>)
            }
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMarks: PropTypes.func
}

export default Blog;