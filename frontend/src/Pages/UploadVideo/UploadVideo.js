import "./UploadVideo.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UploadVideo = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [video, setVideo] = useState("");
  const [categoryname, setCategoryname] = useState([]);
  const [categories, setCategories] = useState([]);
  console.log(categoryname);

  const changeHandler1 = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler2 = (e) => {
    setVideo(e.target.files[0]);
  };
  const xxxx = (e) => {
    
    setCategoryname((current) => [...current, parseInt(e.target.value)]);
  };

  const createProduct = async (e) => {
    e.preventDefault();
    const formData1 = new FormData();
    // const formData2 = new FormData();
    formData1.append("title", title);
    formData1.append("description", description);
    formData1.append("image", image);
    formData1.append("video", video);

    // formData1.append("name", categoryname);

    formData1.append("categoryname", categoryname);

    console.log(categoryname);
    await axios
      .post("http://127.0.0.1:8000/api/videos", formData1)
      .then(({ data }) => {
        console.log(data.data);
        navigate("/");
      })
      .catch(({ response }) => {
        // eslint-disable-next-line eqeqeq
        if (response.status == 422) {
          console.log(response.data.errors);
        } else {
          console.log(response.data.message);
        }
      });
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    await axios.get("http://127.0.0.1:8000/api/categories").then(({ data }) => {
      setCategories(data.data);
      // console.log(data);
      // console.log(data.data);
    });
  };
  return (
    <>
      <div class="login-main-wrapper">
        <div class="container-fluid pl-0 pr-0">
          <div class="row no-gutters">
            <div class="col-md-12 p-5  full-height">
              <div class="login-main-left">
                <div class="text-center mb-5 login-main-left-header pt-2">
                  <h1>Upload Video</h1>

                  <h6 class="mt-3 mb-3">Welcome to Vidoe</h6>
                </div>
                <form onSubmit={createProduct}>
                  <div class="form-group">
                    <label>Title</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>description</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter mobile number"
                      value={description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div class="form-group">
                    <label>image</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Password"
                      onChange={changeHandler1}
                    />
                  </div>

                  <div class="form-group">
                    <label>video</label>
                    <input
                      type="file"
                      class="form-control"
                      placeholder="Promocode"
                      onChange={changeHandler2}
                    />
                  </div>

                  {/* <div class="form-group">
                    <label for="e4">Categories</label>
                    <select id="e4" class="custom-select">
                      {categories.map((category) => (
                        <option>{category.name}</option>
                      ))}
                    </select>
                  </div> */}
                  <lable>Category ( you can select upto 4 categories )</lable>

                  <div class="row category-checkbox">
                    {categories.map((cate) => (
                      <div class="custom-control custom-checkbox a  ">
                        <input
                          type="checkbox"
                          class="custom-control-input"
                          id={cate.id}
                          value={cate.id}
                          onChange={xxxx}
                          
                        />
                        <label class="custom-control-label" for={cate.id}>
                          {cate.name}
                        </label>
                      </div>
                    ))}
                  </div>

                  <div class="mt-4">
                    <button
                      type="submit"
                      class="btn buttonlog btn-block btn-lg"
                    >
                      Sign Up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="login-main-wrapper"></div>
    </>
  );
};

export default UploadVideo;
