import React from 'react';
// images
import CodingVisionImg from './images/coding-vision.jpg'
// styles
import {Colors} from 'app/shared-styles';


// Styling
const colors = {
  primaryColor: Colors.logoRed,
  secondaryColor: Colors.logoOrange,
  tertiaryColor: Colors.logoPurple
}
const styles = {
  ourVisionPage: {
    background: 'radial-gradient(rgba(0, 0, 0, 0) 35%, rgba(0, 0, 0, 0.5) 90%)'
  },
  ourVisionHeader: {
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 58,
    textAlign: 'center',
  },
  ourVision: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 40
  },
  ourVisionStatement: {
    width: '90%',
    fontSize: 24,
    lineHeight: '175%',
    fontStyle: 'italic'
  },
  ourVisionParagraph: {
    maxWidth: 650,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    lineHeight: "175%"
  }
}


const OurVisionPage = () => {

  return (
    <div style={styles.ourVisionPage}>
      <div style={styles.ourVisionHeader}>Our Foundation</div>
      <div style={styles.ourVision}>
        <p style={styles.ourVisionStatement}>
          "Education is learning and theory. Training is a submersive experience, inculcating
          of a set of practical skills that go beyond education."
        </p>
        <p style={styles.ourVisionParagraph}>
          When learning a new language, framework, or other software enterprise,
          hands on training is one of the best way to master a new skill. Online tutorials
          afford the opportunity to build a skill from the ground up, following the step-by-step process of a
          skilled developer. This site was founded to help provide quality, educational, up-to-date
          tutorials for learning the tools that developers for success. <br/>
          <br/>
          Whether you are a senior developer, an entry level
          developer building a portfolio, or just interested in learning new tech, BuildYourStack.io has something for you!
        </p>

      </div>
    </div>
  );
}


export default OurVisionPage;
