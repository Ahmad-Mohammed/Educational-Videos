import "./SingleChannelPlaylist.css";
import { PlaylistCard } from "../../components/index";

const SingleChannelPlaylist = () => {
  return (
    <div class="container-fluid">
      <div class="video-block section-padding">
        <div class="row">
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
          <PlaylistCard />
        </div>
      </div>
    </div>
  );
};

export default SingleChannelPlaylist;
