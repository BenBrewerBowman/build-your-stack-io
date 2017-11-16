
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
  aboutPageContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textAlignLast: 'center'
  },
  founderSection: {
    width: 450,
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 30
  },
  aboutPageHeader: {
    paddingTop: 50,
    paddingBottom: 30,
    fontSize: 42
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
    paddingBottom: 20
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
    width: 600,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 20,
    lineHeight: "175%"
  },
}


const AboutPage = () => {

  return (
    <div style={styles.aboutPageContainer}>

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
              color={colors.primaryColor}
              path={GithubLogo}
            />
          {/* linkedin logo */}
          </a>
          <a href="https://www.linkedin.com/in/ben-brewer/">
            <SvgIcon
              style={styles.linkedin}
              width={30}
              height={30}
              color={colors.secondaryColor}
              path={LinkedInLogo}
            />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=benbrewerbowman@gmail.com">
            <SvgIcon
              style={styles.gmail}
              width={30}
              height={30}
              color={colors.tertiaryColor}
              path={GmailLogo}
            />
          </a>
        </div>
      </div>
      <div>
        <div style={styles.aboutPageHeader}>About Us</div>
        <p style={styles.founderQuoteSection}>
          In 2017, Benjamin Brewer-Bowman launched BuildYourStack.io to create a collection of
          community driven software tutorials. As both a full-stack software developer and a tech entreprenuer,
          Ben knows the importance of access to educational resources. Ben graduated from N.C. State
          University with a B.S. in Mechatronics Engineering, and is passionate about education, politics,
          and environmental issues.
        </p>
      </div>

    </div>
  );
}
{/* <p style={styles.founderQuoteSection}>
  Hey! I'm Ben and I am an entreprenuer and full-stack software developer.<br/>
  <br/>
  When learning a new language, framework, or other software enterprise, I find that
  learning by building is one of the best way to master a new skill.
  I founded this site to help provide developers of all levels some tutorials for
  learning the tools they need for success. <br/>
  <br/>
  Whether you are a senior developer, entry level developer, or just interested in giving
  software a shot, BuildYourStack.io has something for you!
</p> */}

export default AboutPage;
