const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p> ⓒ {year} Copyright - Eunji Park</p>
    </footer>
  );
};

export default Footer;
