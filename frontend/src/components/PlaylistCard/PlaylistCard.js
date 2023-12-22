import "./PlaylistCard.css";
import img2 from "../../assets/images/v1.png";
import { Link } from "react-router-dom";

const PlaylistCard = (props) => {
  return (
    <div class="col-xl-3 col-sm-6 mb-3">
      <div class="video-card2">
        <Link to="/all-Video">
          <div class="video-card-image">
            
            <div class="play-icon">
              <i class="fas fa-play-circle"></i>
            </div>
            <div>
              <img class="img-fluid" src={img2} alt="" />

            </div>
            
          </div>
          <div class="video-card-body">
            <div class="video-title">
              <a href="#">There are many variations of passages of Lorem</a>
            </div>
            <div class="video-page text-success">Category : Education</div>
            <div class="video-view">
              1.8M views &nbsp;<i class="fas fa-calendar-alt"></i> 11 Months ago
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PlaylistCard;
