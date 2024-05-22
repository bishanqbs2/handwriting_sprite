import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
  
  return (
    <div className="main_content">
      <div className="layer_1">
        <img src={process.env.PUBLIC_URL + "/media/img/layer_1.png"} alt="" />
      </div>
      <div className="layer_2">
        <img src={process.env.PUBLIC_URL + "/media/img/layer_2.png"} alt="" />
      </div>
      <div className="layer_3">
        <img src={process.env.PUBLIC_URL + "/media/img/layer_3.png"} alt="" />
      </div>
      <div className="screen_wrap">{children}</div>
      <Navbar />
    </div>
  );
};

export default Layout;
