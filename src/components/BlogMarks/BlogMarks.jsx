import PropTypes from 'prop-types';
import BlogMark from '../BlogMark/BlogMark';

const BlogMarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-400 ml-4 rounded-lg">
            <div className='text-3xl text-center mt-4'>Book Mark {bookMarks.length}</div>
            {
                bookMarks.map((bookMark, idx) => <BlogMark key={idx} bookMark={bookMark}></BlogMark>)
            }
        </div>
    );
};


BlogMarks.propTypes = {
    bookMarks: PropTypes.object.isRequired
}

export default BlogMarks;