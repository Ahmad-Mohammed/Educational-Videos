import "./SingleChannelImage.css";

import img from "../../assets/images/channel-banner.png";
import img1 from "../../assets/images/s2.png";

const SingleChannelImage = (props) => {
  // const [isUploaded, setIsUploaded] = useState(null)

  //Change the upload to true once a file is selected

  return (
    <div class="single-channel-image">
      <form enctype="multipart/form-data">
        <input type="file" id="file-input"  />
        <label for="file-input" class="file-button">
          <img class="img-fluid " alt="" src={img} />
        </label>
      </form>
      {/* <form id="form1" runat="server">
        <input type="file" id="imgInp" />
        <img id="blah" src="#" alt="your image" />
      </form> */}

      <div class="channel-profile " >
        <img class="channel-profile-img" alt="" src={img1} />
      </div>
    </div>
  );
};

export default SingleChannelImage;
