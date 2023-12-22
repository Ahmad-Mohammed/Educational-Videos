import "./VideoAuther.css";
const VideoAuther = (props) => {
  return (
    <div class="single-video-author box mb-3">
      <div class="float-right">
        <button class="btn button" type="button">
          Subscribe <strong>1.4M</strong>
        </button>
      </div>
      <img class="img-fluid" src="img/s4.png" alt="" />
      <p>
        <a href="#">
          <strong>Osahan Channel</strong>
        </a>
      </p>
      <small>Published on Aug 10, 2018</small>
    </div>
  );
};

export default VideoAuther;
