import Navbar from "./component/Navbar.js";
import Footer from "./component/Footer.js";
import MainPage from "./Pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./auth/signUp";
import LogIn from "./auth/logIn";
import HospitalList from "./Pages/HospitalList";
//import NotificationPage from "./Pages/NotificationPage";
import ProfileMain from "./profile/ProfileMain";
import Otp from './auth/otp';
import DetailsForm from "./DetailsForm/DetailsForm";
import Requests from "./Pages/Requests";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<MainPage />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup/otp" element={<Otp />} />
          <Route path="/login" element={<LogIn />} />


          <Route path="/hospital" element={<ProfileMain />} />
          <Route path="/hospital/detailsform" element={<DetailsForm />} />



          <Route path="/searchresult/:category/:query" element={<HospitalList />} />
          <Route path="/hospital/requests" element={<Requests />} />

        </Routes>

        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
