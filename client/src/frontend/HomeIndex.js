import React from 'react'
import AboutUs from './HomePage/AboutUs'
import Footer from './HomePage/Footer'
import GetAInquiry from './HomePage/GetAInquiry'
import Header from './HomePage/Header'
import NoOfStudents from './HomePage/NoOfStudents'
//import NoticeEvent from './HomePage/NoticeEvent'
import NoticeHeader from './HomePage/NoticeHeader'
import OurFaculty from './HomePage/OurFaculty'
import OurTeachers from './HomePage/OurTeachers'
import SchoolTime from './HomePage/SchoolTime'
import Slider from './HomePage/Slider'
import StudentSay from './HomePage/StudentSay'
import Text from './HomePage/Text'
import UpcomingEvents from './HomePage/UpcomingEvents'
import VideoCampus from './HomePage/VideoCampus'
import WhyChoseUs from './HomePage/WhyChoseUs'

const Index = () => {
    return (
        <>
         <NoticeHeader />
        <Header />
        <Slider />
        <SchoolTime />
        {/* <NoticeEvent /> */}
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
        <Footer />
        </>
    )
}

export default Index
