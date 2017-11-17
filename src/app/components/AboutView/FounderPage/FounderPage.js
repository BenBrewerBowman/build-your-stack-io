import React from 'react';
// utilities
import SvgIcon from 'app/utils/images/svg-icon';
// images
import AboutImg from './images/about-img.png';
import GithubLogo from 'app/shared-styles/icons/github';
import GmailLogo from 'app/shared-styles/icons/gmail';
import LinkedInLogo from 'app/shared-styles/icons/linkedin';
// styles
import {Colors} from 'app/shared-styles';



// Styling
const colors = {
  primaryColor: Colors.logoRed,
  secondaryColor: Colors.logoOrange,
  tertiaryColor: Colors.logoPurple
}
const styles = {
  founderPage: {
    background: 'linear-gradient(to bottom right, rgba(192, 57, 43, 0.6) 13%, rgba(243, 156, 18,0.6) 50%, rgba(142, 68, 173, 0.6) 90%)'
  },
  aboutPageHeader: {
    paddingTop: 40,
    paddingBottom: 0,
    fontSize: 58,
    textAlign: 'center',
  },
  founderSectionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: 30
  },
  founderSection: {
    width: 450,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20
  },
  founderImage: {
    width: 300,
    height: 300,
    paddingBottom: 12,
  },
  founderName: {
    paddingBottom: 5,
    fontSize: 28,
  },
  founderTitle: {
    paddingBottom: 15,
    fontSize: 24,
    fontStyle: "italic"
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  github: {
  },
  linkedin: {
    marginLeft: 15,
    marginRight: 15
  },
  gmail: {
  },
  founderQuoteSection: {
    maxWidth: 600,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    lineHeight: "175%"
  },
}


const FounderPage = () => {

  return (
    <div style={styles.founderPage}>
      <div style={styles.aboutPageHeader}>About Us</div>
      <div style={styles.founderSectionContainer}>

        <div style={styles.founderSection}>


          <img src={AboutImg} alt='Founder Image' style={styles.founderImage}/>
          <div style={styles.founderName}>
            <text>Benjamin Brewer-Bowman</text>
          </div>
          <div style={styles.founderTitle}>(Founder)</div>
          <div style={styles.logoContainer}>
            {/* github logo */}
            <a href='https://github.com/BenBrewerBowman'>
              <SvgIcon
                style={styles.github}
                width={30}
                height={30}
                color={'black'}
                path={GithubLogo}
              />
            {/* linkedin logo */}
            </a>
            <a href="https://www.linkedin.com/in/ben-brewer/">
              <SvgIcon
                style={styles.linkedin}
                width={30}
                height={30}
                color={'black'}
                path={LinkedInLogo}
              />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=benbrewerbowman@gmail.com">
              <SvgIcon
                style={styles.gmail}
                width={30}
                height={30}
                color={'black'}
                path={GmailLogo}
              />
            </a>
          </div>
        </div>
        <div>
          <p style={styles.founderQuoteSection}>
            In 2017, Benjamin Brewer-Bowman launched BuildYourStack.io to create a unified collection of
            community driven software tutorials. As both a full-stack software developer and a tech entreprenuer,
            Ben knows the importance of access to educational resources. <br/><br/>Ben graduated from N.C. State
            University with a B.S. in Mechatronics Engineering, and is passionate about education, politics,
            and environmental sustainability.
          </p>
        </div>

      </div>
    </div>
  );
}


export default FounderPage;
