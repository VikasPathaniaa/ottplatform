import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./components/form/SignIn";
import { SignUp } from "./components/form/SignUp";
import Layout from "./layout/Layout";
import AllVideos from "./pages/AllVideos";
import Home from "./pages/Home";
import { getApiConfiguration } from "./redux/homeSlice";
import { fetchRequest } from "./utils/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from "./pages/Search";

const App = () => {
  const dispatch = useDispatch();
  const { url } = useSelector((state: any) => state.home);
  console.log(url);

  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchRequest("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />{" "}
            </Layout>
          }
        />
        <Route
          path="/all-videos"
          element={
            <Layout>
              <AllVideos />{" "}
            </Layout>
          }
        />
      <Route path="/search/:query" element={<Layout><Search/> </Layout>} />

      </Routes>
      <ToastContainer />
    </>

  );
};

export default App;
