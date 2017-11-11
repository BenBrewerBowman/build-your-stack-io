import React from 'react';
import Breakpoint from './breakpoint';

// Object only shows up in desktop view
//
// <DesktopBreakpoint>
//   {object here}
// </DesktopBreakpoint>
export default function DesktopBreakpoint(props) {
  return (
    <Breakpoint name="desktop">
      {props.children}
    </Breakpoint>
  );
}
