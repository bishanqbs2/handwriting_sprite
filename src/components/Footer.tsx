const Footer = () => {
  return (
    <footer>
      <a href= {process.env.PUBLIC_URL + "/acknowledgments.pdf"} target="_blank" className="link_ftr">
        Acknowledgements
      </a>
      <div className="copyright">| © Oxford University Press 2024</div>
      <div className="ftr_txt">
        {/* Oxford Handwriting K-2 */}
        <img src={process.env.PUBLIC_URL + "/media/img/ftr_txt.png"} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
