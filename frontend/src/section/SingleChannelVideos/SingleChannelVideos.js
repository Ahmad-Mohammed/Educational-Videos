import "./SingleChannelVideos.css";
import { VideoCard} from "../../components/index";


const SingleChannelVideos = () => {
  return (
    <div class="container-fluid">
          <div class="video-block section-padding">
            <div class="row">
             
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
              <VideoCard/>
            </div>
          </div>
        </div>
  );
};

export default SingleChannelVideos;
