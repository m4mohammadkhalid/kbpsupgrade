



import React, { useState, useEffect } from "react";
import Contacts from "../components/Home/Contacts/Contacts";
import isLogin from "../shared/authorization";
import { useSelector } from "react-redux";
import NoticeHeader from "../components/Home/HomePage/NoticeHeader";
import Slider from "../components/Home/HomePage/Slider";
import SchoolTime from "../components/Home/HomePage/SchoolTime";
import WhyChoseUs from "../components/Home/HomePage/WhyChoseUs";
import Text from "../components/Home/HomePage/Text";
import AboutUs from "../components/Home/HomePage/AboutUs";
import OurFaculty from "../components/Home/HomePage/OurFaculty";
import VideoCampus from "../components/Home/HomePage/VideoCampus";
import UpcomingEvents from "../components/Home/HomePage/UpcomingEvents";
import NoOfStudents from "../components/Home/HomePage/NoOfStudents";
import OurTeachers from "../components/Home/HomePage/OurTeachers";
import GetAInquiry from "../components/Home/HomePage/GetAInquiry";
import StudentSay from "../components/Home/HomePage/StudentSay";
import Footer from "../components/Home/HomePage/Footer";
import Header from "../components/Home/HomePage/Header";
import Map from "../components/Home/HomePage/Map";



const HomePage = () => {
  const [isLogged, setIsLogged] = useState(isLogin);
  const login = useSelector((state) => state.login.isLogin);
 
  useEffect(() => {
    setIsLogged(isLogin);
  }, [login]);

  
 

  return (
    <>
       <NoticeHeader />

      {!isLogged && <Header  />}
      <Slider />
      <SchoolTime />
      <WhyChoseUs />
      <Text />
      <AboutUs />
      <OurFaculty />
      <VideoCampus />
      <UpcomingEvents />
        <NoOfStudents />
        <OurTeachers />
        <GetAInquiry />
        <StudentSay />

        <Map />
      <Footer  />
    </>
  );
};

export default HomePage;
