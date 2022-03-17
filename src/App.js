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
import ChannelDashboard from "./Pages/Dashboard/ChannelDashboard/ChannelDashboard";
import CandyBlock from "./Pages/Games/CandyBlock/CandyBlock";
import Breakout from "./games/breakout";
import Studio from "./Pages/Studio/Studio";
import UsersMessage from "./Pages/Dashboard/UsersMessage/UsersMessage";
import Analytics from "./Pages/Dashboard/Analytics/Analytics/Analytics";
import UploadVideoModal from "./Pages/Upload/UploadVideoModal";
import Reports from "./Pages/Dashboard/Reports/Reports";
import RoomDashboard from "./Pages/RoomDashboard/RoomDashboard";
import RoomDashboardHome from "./Pages/RoomDashboard/RoomDashboardHome";
import Content from "./Pages/RoomDashboard/Contents/Content/Content";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import React from "react";
import { Auth } from "./Pages/Dashboard/UsersMessage/message";
import AdminRoute from "./Pages/PrivateRoute/AdminRoute";
import Liquidity from "./Pages/RoomDashboard/Liquidity/Liquidity";
import Fake from "./Pages/Search/HomeSearch/fake";
import Default from "./Pages/Dashboard/Default/Default";
import useFirebase from "./Hooks/useFirebase";
import { useDispatch, useSelector } from "react-redux";
import { setAdmin, setIsLoading, setUser } from "./reducers/slices/firebaseSlice";
import { useEffect } from "react";
import UserProfile from "./Pages/Home/UserProfile/UserProfile/UserProfile";
import History from "./Pages/Home/History/History";
import Subscription from "./Pages/Home/Subscription/Subscription";
import DetailProduct from "./Pages/Home/Profile/AmazonProducts/UploadAmazonProducts/DetailProduct/DetailProduct";
import UploadeAmazonProducts from "./Pages/Home/Profile/AmazonProducts/UploadAmazonProducts/UploadAmazonProducts/UploadeAmazonProducts";
// import Subscriptions from "./Pages/Home/Subscription/Subscriptions";


function App() {
  const dispatch = useDispatch()

  const user = useSelector((state) => state.firebase.user)
  const { onAuthStateChanged, getIdToken, auth } = useFirebase()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user)
          .then(idToken => localStorage.setItem('idToken', idToken));
        // setUser(user);

        // console.log(user);
        dispatch(setUser(user))
      } else {
        // nothing was here 
        dispatch(setUser({}));
      }
      dispatch(setIsLoading(false));
    });
  }, [auth, dispatch])

  useEffect(() => {
    fetch(`https://aqueous-chamber-45567.herokuapp.com/users/${user?.email}`)
      .then(res => res.json())
      .then(data => dispatch(setAdmin(data?.admin)))
  }, [user?.email])
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MiniDrawer />}>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/logIn" element={<Auth></Auth>}></Route>
          <Route path="/profile" element={<Profile />}></Route>

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
          <Route path="/message" element={<UsersMessage />}></Route>

          <Route path="/history" element={<History />}></Route>
          <Route path="/subscriptions" element={<Subscription />}></Route>

          {/* <Route path="/history" element={<HistoryList />}></Route> */}

          <Route path="/details/:blogId" element={<PrivateRoute><Details /></PrivateRoute>}></Route>

          <Route path="/addBlog" element={<AddBlog />}></Route>

          <Route path="/profile" element={<Profile />}>

          </Route>
          <Route exact path='/profile/detail/:productId' element={<DetailProduct />} />


          <Route path="/userprofile/:email" element={<UserProfile />}></Route>

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
          <Route path="/dashboard" element={<Default />}></Route>

          <Route exact path="/dashboard/home" element={<DashboardHome />} />
          <Route exact path="/dashboard/bloggerList" element={<Bloggers />} />

          <Route exact path="/dashboard/default" element={<Default />} />

          <Route path="/dashboard/message" element={<UsersMessage />}></Route>
          <Route exact path="/dashboard/upload-products" element={<UploadeAmazonProducts />} />

          <Route exact path="/dashboard/analytics" element={<Analytics />} />

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



          <Route path="/dashboard/upload" element={<UploadBlog />} />


          <Route path="/dashboard/reports" element={<Reports />} />
        </Route>


        <Route path="/fake" element={<Fake />}></Route>

        <Route path="/roomDashboard" element={<RoomDashboard />}>
          <Route path="/roomDashboard" element={<RoomDashboardHome />}></Route>
          <Route path="/roomDashboard/content" element={<Content />}></Route>
          <Route path="/roomDashboard/userAnalytics" element={<Studio />} />
          <Route path="/roomDashboard/liquidity" element={<Liquidity />} />
        </Route>



      </Routes>
    </div>
  );
}

export default App;
