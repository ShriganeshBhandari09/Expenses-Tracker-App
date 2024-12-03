const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        fontSize: "22px",
        padding: "20px 0px 20px 0px",
        fontFamily: "Satisfy",
        boxShadow: "0px 8px 32px 0px #1C1C1E1A",
        position: "relative",
        bottom: "0px",
        borderRadius: "40px 40px 0px 0px",
      }}
    >
      Made with <span style={{ color: "#e25555" }}>❤</span> by <span></span>
      <a
        href="https://github.com/ShriganeshBhandari09"
        style={{ fontFamily: "Satisfy" }}
      >
        Shriganesh Bhandari
      </a>
      {/* <span style={{ fontFamily: "Satisfy" }}> © 2024</span> */}
    </div>
  );
};

export default Footer;
