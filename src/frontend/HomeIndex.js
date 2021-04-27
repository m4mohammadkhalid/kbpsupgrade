import React from 'react'
import AboutUs from './HomePage/AboutUs'
import Footer from './HomePage/Footer'
import GetAInquiry from './HomePage/GetAInquiry'
import Header from './HomePage/Header'
import NoOfStudents from './HomePage/NoOfStudents'
import NoticeHeader from './HomePage/NoticeHeader'
import OurFaculty from './HomePage/OurFaculty'
import OurTeachers from './HomePage/OurTeachers'
import Slider from './HomePage/Slider'
import StudentSay from './HomePage/StudentSay'
import UpcomingEvents from './HomePage/UpcomingEvents'
import VideoCampus from './HomePage/VideoCampus'
import WhyChoseUs from './HomePage/WhyChoseUs'

const Index = () => {
    return (
        <>
        <Header />
        <NoticeHeader />
        <Slider />
        <WhyChoseUs />
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
