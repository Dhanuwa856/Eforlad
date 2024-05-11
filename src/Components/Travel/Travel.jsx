import React from "react";
import "./Travel.css";
import Title from "../Title/Title";
import Icon_01 from "../../assets/icon/travel-icon.png";
import Icon_02 from "../../assets/icon/travel-icon2.png";
import Icon_03 from "../../assets/icon/travel-icon3.png";
import Icon_04 from "../../assets/icon/travel-icon4.png";
import ReadBtn from "../ReadBtn/ReadBtn";

const Travel = () => {
  return (
    <div className="travel container-fuild">
      <Title sectiontitle="SELECT OFFERS FOR TRAVELING" />
      <p className="sub-p">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
      </p>
      <div className="travel-cards container">
        <div className="travel-card">
          <img src={Icon_01} alt="" />
          <h3 className="card-title">Different Countrys</h3>
          <p className="card-info">
            going to use a passage of Lorem Ipsum, you need to be
          </p>
          <div className="card-btn">
            <ReadBtn btntitle="read more" />
          </div>
        </div>
        <div className="travel-card">
          <img src={Icon_02} alt="" />
          <h3 className="card-title">Mountains Tours</h3>
          <p className="card-info">
            going to use a passage of Lorem Ipsum, you need to be
          </p>
          <div className="card-btn">
            <ReadBtn btntitle="read more" />
          </div>
        </div>
        <div className="travel-card">
          <img src={Icon_03} alt="" />
          <h3 className="card-title">Bus Tours</h3>
          <p className="card-info">
            going to use a passage of Lorem Ipsum, you need to be
          </p>
          <div className="card-btn">
            <ReadBtn btntitle="read more" />
          </div>
        </div>
        <div className="travel-card">
          <img src={Icon_04} alt="" />
          <h3 className="card-title">Summer Rest</h3>
          <p className="card-info">
            going to use a passage of Lorem Ipsum, you need to be
          </p>
          <div className="card-btn">
            <ReadBtn btntitle="read more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travel;
