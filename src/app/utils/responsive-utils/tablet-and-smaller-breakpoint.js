import React from 'react';
import Breakpoint from './breakpoint';

// Object only shows up in desktop view
//
// <DesktopBreakpoint>
//   {object here}
// </DesktopBreakpoint>
export default function TabletAndSmallerBreakpoint(props) {
  return (
    <Breakpoint name="tabletAndSmaller">
      {props.children}
    </Breakpoint>
  );
}
