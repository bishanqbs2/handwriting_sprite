import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home_content">
      <div className="anim_1">
        <img
          src={process.env.PUBLIC_URL + "/media/img/characters_1.png"}
          alt=""
        />
      </div>
      <div className="anim_2">
        <img
          src={process.env.PUBLIC_URL + "/media/img/characters_2.png"}
          alt=""
        />
      </div>
      <div className="anim_3">
        <img
          src={process.env.PUBLIC_URL + "/media/img/characters_3.png"}
          alt=""
        />
      </div>
      <div className="col_go">
        <Link className="goButton" to={"/before"}>
          <img src={process.env.PUBLIC_URL + "/media/img/Go.png"} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
