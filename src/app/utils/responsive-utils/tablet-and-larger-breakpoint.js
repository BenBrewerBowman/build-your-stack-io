import React from 'react';
import Breakpoint from './breakpoint';

// Object only shows up in desktop view
//
// <DesktopBreakpoint>
//   {object here}
// </DesktopBreakpoint>
export default function TabletAndLargerBreakpoint(props) {
  return (
    <Breakpoint name="tabletAndLarger">
      {props.children}
    </Breakpoint>
  );
}
