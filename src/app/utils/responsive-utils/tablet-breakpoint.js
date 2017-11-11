import React from 'react';
import Breakpoint from './breakpoint';


// Object only shows up in tablet view
//
// <TabletBreakpoint>
//   {object here}
// </TabletBreakpoint>
export default function TabletBreakpoint(props) {
  return (
    <Breakpoint name="tablet">
      {props.children}
    </Breakpoint>
  );
}
