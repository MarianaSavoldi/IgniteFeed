import {PropTypes} from 'prop-types'
import styles from './Avatar.module.css'

export function Avatar({hasBorder = true, src, alt}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  hasBorder: PropTypes.bool,
}