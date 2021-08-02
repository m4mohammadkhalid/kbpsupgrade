import React from 'react'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
const FacilityIndex = () => {
    return (
        <>
            <NoticeHeader />
            <Header />

                <div className="container-fluid">
                            <div className="row">
                                        <div className="col-12" style={{height: '90vh'}}>
                                                <h1>Please Wait For Loading Data</h1>
                                        </div>
                            </div>
                </div>

            <Footer />
        </>
    )
}

export default FacilityIndex
