import React from 'react';
// styles
import {Colors} from 'app/shared-styles'


// Styling
const colors = {
  footerBackgroundColor: Colors.techGrey,
  footerPrimaryColor: Colors.logoPurple
}
const styles = {
  footerContainer: {
    textAlign: "center",
    backgroundColor: colors.footerBackgroundColor,
    color: colors.footerPrimaryColor
  },
  footerLinksContainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '20'
  },
  footerLinks: {
    width: '20%',
  },
  tradeMark: {
    paddingTop: 5,
    paddingBottom: 15
  }
}


const Footer = () => {

  return (
    <div style={styles.footerContainer}>
      <div style={styles.footerLinksContainer}>
        <div style={styles.footerLinks}>About</div>
        <div style={styles.footerLinks}>FAQ's</div>
        <div style={styles.footerLinks}>Contact</div>
      </div>
      <div style={styles.tradeMark}>
        © 2017 BuildYourStack.io
      </div>
    </div>
  );
}

export default Footer;
