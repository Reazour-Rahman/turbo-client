import "./App.css";
import { Route, Routes } from "react-router-dom";
import MiniDrawer from "./Pages/Shared/MiniDrawer";
import Dashboard from "./Pages/Dashboard/DashBoard";
import UploadBlog from "./Pages/Dashboard/UploadBlog";
import SignUp from "../src/Pages/Authentication/SignUp/SignUp";
import Profile from "./Pages/Home/Profile/Profile/Profile";
import Details from "./Pages/Home/Details/Details";
import Bloggers from "./Pages/Dashboard/Bloggers/Bloggers";
import DashboardHome from "./Pages/Dashboard/DashboardHome";
import MakeAdminList from "./Pages/Dashboard/MakeAdmin/MakeAdminList";
import AddBlog from "./Pages/AddBlog/AddBlog";
import Contents from "./Pages/Home/Profile/Contents/Contents";
import About from "./Pages/Home/Profile/About/About";
import AmazonProducts from "./Pages/Home/Profile/AmazonProducts/AmazonProducts";
import PlayList from "./Pages/Home/Profile/PlayLists/PlayList";
import Message from "./Pages/Dashboard/Message";
import ChannelDashboard from "./Pages/Dashboard/ChannelDashboard/ChannelDashboard";
import CandyBlock from "./Pages/Games/CandyBlock/CandyBlock";
import Breakout from "./games/breakout";
import Studio from "./Pages/Studio/Studio";
import StudioHeader from "./Pages/Studio/StudioHeader/StudioHeader";
import Audience from "./Pages/Studio/Audience/Audience";
import UsersMessage from "./Pages/Dashboard/UsersMessage/UsersMessage";
import UploadVideoModal from "./Pages/Upload/UploadVideoModal";
import Reports from "./Pages/Dashboard/Reports/Reports";
import RoomDashboard from "./Pages/RoomDashboard/RoomDashboard";
import RoomDashboardHome from "./Pages/RoomDashboard/RoomDashboardHome";
import Content from "./Pages/RoomDashboard/Contents/Content/Content";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Authentication/SignUp/Register";
import React from "react";
import { Auth } from "./Pages/Dashboard/UsersMessage/message";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MiniDrawer />}>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/logIn" element={<Auth></Auth>}></Route>
          <Route path="/profile" element={<AdminRoute><Profile /></AdminRoute>}></Route>

          <Route path="/candyBlock" element={<CandyBlock />}></Route>

          <Route
            path="/breakout"
            element={
              <div className="breakOut">
                <Breakout />
              </div>
            }
          ></Route>

          <Route path="/cloudStorage" element={<UploadVideoModal />}></Route>

          <Route
            path="/breakout"
            element={
              <div className="breakOut">
                <Breakout />
              </div>
            }
          ></Route>

          <Route path="/details/:blogId" element={<PrivateRoute><Details /></PrivateRoute>}></Route>

          <Route path="/addBlog" element={<AddBlog />}></Route>

          <Route path="/profile" element={<Profile />}></Route>

          <Route
            path="/profile/content"
            element={<Contents></Contents>}
          ></Route>

          <Route path="/profile/about" element={<About></About>}></Route>

          <Route
            path="/profile/playlist"
            element={<PlayList></PlayList>}
          ></Route>

          <Route
            path="/profile/amazon"
            element={<AmazonProducts></AmazonProducts>}
          ></Route>
        </Route>

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="/dashboard" element={<DashboardHome />}></Route>

          <Route exact path="/dashboard/bloggerList" element={<Bloggers />} />

          <Route
            exact
            path="/dashboard/makeAdmin"
            element={<MakeAdminList />}
          />

          <Route
            exact
            path="/dashboard/makeAdmin"
            element={<MakeAdminList />}
          />

          <Route path="/dashboard/message" element={<Message />} />

          <Route path="/dashboard/upload" element={<UploadBlog />} />

          <Route path="/dashboard/reports" element={<Reports />} />
        </Route>
        
        <Route path="/userMessage" element={<UsersMessage />}></Route>

        <Route path="/roomDashboard" element={<RoomDashboard />}>
          <Route path="/roomDashboard" element={<RoomDashboardHome />}></Route>
          <Route path="/roomDashboard/content" element={<Content />}></Route>
          <Route path="/roomDashboard/userAnalytics" element={<Studio />} />
        </Route>



      </Routes>
    </div>
  );
}

export default App;
