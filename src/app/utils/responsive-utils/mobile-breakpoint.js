import React from 'react';
import Breakpoint from './breakpoint';


// Object only shows up in phone view
//
// <PhoneBreakpoint>
//   {object here}
// </PhoneBreakpoint>
export default function MobileBreakpoint(props) {
  return (
    <Breakpoint name="mobile">
      {props.children}
    </Breakpoint>
  );
}
