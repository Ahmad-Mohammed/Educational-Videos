import { Link } from "react-router-dom";
import "./VideoContent.css";
import { useContext } from "react";
import { VideoContext } from "../../Pages/VideoPage/VideoPage";
const VideoContent = (props) => {
  const {video} = useContext(VideoContext) ;
// console.log(video)
  return (


    
    <div class="single-video-info-content box mb-3">
      <h5 class="head">About :</h5>
      <div>{video.description}</div>
      <br/>
      <h5 class="head">Tags :</h5>
      <div>
      {video.tags?.map((tag) => (
          <span>
            <a href={tag.link}>{tag.link}</a>
          </span>
        ))}
      </div>
      <br/>
      <h5 class="head">Category :</h5>
      <p class="tags mb-0">
        {video.categories?.map((category) => (
          <span>
            <Link to="/all-video">{category.name}</Link>
          </span>
        ))}
      </p>
    </div>
  );
};

export default VideoContent;
