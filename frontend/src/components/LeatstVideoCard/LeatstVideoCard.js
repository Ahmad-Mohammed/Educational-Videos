import './LeatstVideoCard.css'
import img from '../../assets/images/planet.jpg';
import { Link } from "react-router-dom";


const LeatstVideoCard = (props) => {
  // console.log(props.video.id);

    return(

      <div className="live-card">
      <Link to={`/video-page/${props.video.id }`}>
        <div className="card-head">
          <img src={img} alt="" className="card-img" />

          <div className="play">
            <ion-icon name="play-circle-outline"></ion-icon>
          </div>
        </div>

        <div className="card-body">
          <img src="./assets/images/icon.png" alt="" className="avatar" />
          <h3 className="card-title">
            {props.video.title}
          </h3>
        </div>
      </Link>
    </div>
      
        
    );

};

export default LeatstVideoCard