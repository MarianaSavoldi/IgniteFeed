import PropTypes from 'prop-types';

export function Post({author, content}) {
  return (
    <>
      <strong>{author}</strong>
      <p>{content}</p>
    </>
  )
}

Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string
}
