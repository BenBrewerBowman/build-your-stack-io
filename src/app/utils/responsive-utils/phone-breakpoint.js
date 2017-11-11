import React from 'react';
import Breakpoint from './breakpoint';


// Object only shows up in phone view
//
// <PhoneBreakpoint>
//   {object here}
// </PhoneBreakpoint>
export default function PhoneBreakpoint(props) {
  return (
    <Breakpoint name="phone">
      {props.children}
    </Breakpoint>
  );
}
