import "./App.css";
import { Container } from "./components/index";
import {
  Header,
  Footer,
  SingleChannelVideos,
  SingleChannelPlaylist,
  SingleChannelAbout,
  User,
} from "./section/index";
import {
  Home,
  Login,
  Register,
  VideoPage,
  SingleChannel,
  Forgot,
  AllVideo,
  RegisterTeacher,
  UploadVideo,
  Done,
  Dashbord,
} from "./Pages/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<User />}>
            <Route path="/home" element={<Home />} />
            <Route path="/video-page/:id" element={<VideoPage />} />
            <Route path="/all-video" element={<AllVideo />}>
              {/* <Route path="all" element={<Register />} /> */}
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/register-teacher" element={<RegisterTeacher />} />
            <Route path="/done" element={<Done />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/upload-video" element={<UploadVideo />} />
            <Route path="/single-channel" element={<SingleChannel />}>
              <Route path="videos" element={<SingleChannelVideos />} />
              <Route path="playlist" element={<SingleChannelPlaylist />} />
              <Route path="about" element={<SingleChannelAbout />} />
            </Route>
          </Route>
          <Route path="/admin/dashbord" element={<Dashbord />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
