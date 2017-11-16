import React from 'react';
import PropTypes from 'prop-types';



const SvgIcon = (props) => {
  return(
    <div
      className={props.className ? props.className : "SvgIcon"}
      style={props.style}
    >
      <svg
        role="img"
        width={props.width ? props.width : 24}
        height={props.height ? props.height : 24}
        fill={props.color ? props.color : 'black'}
        viewBox={props.viewBox ? props.viewBox : "0 0 24 24" }
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={props.path}
        />
      </svg>
    </div>
  );
}

SvgIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  color: PropTypes.string,
  viewBox: PropTypes.string,
  path: PropTypes.string.isRequired
}


export default SvgIcon;
