const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} target="_blank" href="https://github.com/emanzulfiqar">
        <i className="fa-brands fa-github" aria-hidden="true" title="Eman Zulfiqar Ghani' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} target="_blank"href="https://www.linkedin.com/in/eman-zulfiqar-ghani/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Eman Zulfiqar Ghani' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} target="_blank" href="https://www.instagram.com//">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Eman Zulfiqar Ghani' Instagram Profile"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Eman Zulfiqar Ghani' Twitter Profile"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
