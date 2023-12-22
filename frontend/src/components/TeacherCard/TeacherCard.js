import "./TeacherCard.css";
import img2 from "../../assets/images/action.jpg";
import { Link } from "react-router-dom";

const TeacherCard = (props) => {
  // console.log(props.teacher);
  return (
    <Link to="/single-channel/about">
      <div class="category-card">
        <img src={img2} alt="" class="card-img" />
      </div>
      <div class="x">
        <div class="name">{props.teacher.name}</div>
      </div>
    </Link>
  );
};

export default TeacherCard;
