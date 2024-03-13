import PropTypes from 'prop-types'

const BlogMark = ({bookMark}) => {
  const {title} = bookMark;
  return (
    <div className='bg-gray-200 p-4 m-4 rounded-xl'>
        <h2 className='text-2xl'>{title}</h2>
    </div>
  )
}

BlogMark.propTypes = {
    bookMark: PropTypes.object.isRequired
}

export default BlogMark