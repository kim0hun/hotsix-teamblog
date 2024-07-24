import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import PostDetail from "./pages/post/Detail";
import PostEdit from "./pages/post/Edit";
import PostCreate from "./pages/post/PostCreate";
import MyPage from "./components/MyPage/MyPage";
import EditProfile from "./components/MyPage/EditProfile";
import PasswordReset from "./components/PasswordReset/PasswordReset";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/create" element={<PostCreate />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
