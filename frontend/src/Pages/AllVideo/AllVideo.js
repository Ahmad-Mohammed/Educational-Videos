import axios from "axios";
import { VideoCard } from "../../components";
import "./AllVideo.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AllVideo = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    await axios.get("http://127.0.0.1:8000/api/videos").then(({ data }) => {
      setVideos(data.data);
      // console.log(data);
      // console.log(data.data.length);

    });
  };

  // const deleteVideo = async (id) => {
  //   await axios
  //     .delete("http://127.0.0.1:8000/api/products/" + id)
  //     .then(({ data }) => {
  //       console.log(data.message);
  //       fetchVideos();
  //     })
  //     .catch(({ response: { data } }) => {
  //       console.log(data.message);
  //     });
  // };
  return (
    <div id="content-wrapper">
      <div class="container-fluid">
        <div class="video-block section-padding">
          {/* <h3 class="">category : </h3> */}

          <div class="row mt-5">
            {videos.map((video) => (
              <VideoCard video={video}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllVideo;
