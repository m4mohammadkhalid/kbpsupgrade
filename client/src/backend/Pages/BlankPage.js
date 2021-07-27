import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

const BlankPage = () => {
    return (
        <>
            <div className="main-wrapper">
            <Header />
<SideBar />
        
                <div className="page-wrapper" style={{ minHeight: 800 }}>
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="row">
                                <div className="col-sm-12">
                                    <h3 className="page-title">Blank Page</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Blank Page</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div className="row">
                            <div className="col-sm-12">
                                Contents here
        </div>
                        </div>
                    </div>
                </div>
                {/* /Page Wrapper */}
            </div>


<Footer />
        </>
    )
}

export default BlankPage
