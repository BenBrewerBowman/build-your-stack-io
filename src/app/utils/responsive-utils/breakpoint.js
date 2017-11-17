
import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';


const breakpoints = {
  desktop: '(min-width: 1025px)',
  tabletAndLarger: '(min-width: 768px)',
  tablet: '(min-width: 768px) and (max-width: 1024px)',
  tabletAndSmaller: '(max-width: 1024px)',
  mobile: '(max-width: 767px)',
};

export default function Breakpoint(props) {
  const breakpoint = breakpoints[props.name] || breakpoints.desktop;
  return (
    <MediaQuery {...props } query={breakpoint}>
      {props.children}
    </MediaQuery>
  );
}

Breakpoint.propTypes = {
  name: PropTypes.string,
  children: PropTypes.object,
}
