import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => {
  if (!active) {
    return <span onClick={onClick}>{children}</span>
  }

  return (
    <a
      href="#"
      // onClick={e => {
      //   // eslint-disable jsx-a11y/anchor-is-valid
      //   e.preventDefault()
      //   onClick()
      // }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
