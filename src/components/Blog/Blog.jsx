import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, coverImg} = blog;
    console.log("Single",blog)
    console.log("Cover",coverImg)
    return (
        <div>
            <h3 className='text-2xl'>{title}</h3>
            <img src="https://iili.io/JWaETYl.md.png" alt="JWaETYl.md.png" />
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;