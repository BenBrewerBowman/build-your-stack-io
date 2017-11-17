import React from 'react';

import OurVisionPage from './OurVisionPage/OurVisionPage'
import FounderPage from './FounderPage/FounderPage';



// Styling
const styles = {
  aboutView: {}
}


const AboutView = () => {

  return (
    <div style={styles.aboutView}>
      <OurVisionPage />
      <FounderPage />
    </div>
  );
}


export default AboutView;
