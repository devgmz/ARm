import React from 'react'
import Anchor from './../../Atmos/Anchor/index';
import Icon from './../../Atmos/Icon/index';
import { PropTypes } from 'prop-types';

const IconLink = ({ icon, ...props }) => {
  return (
    <Anchor {...props}>
      <Icon icon={icon} {...props} />
    </Anchor>
  )
}

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  to: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default IconLink