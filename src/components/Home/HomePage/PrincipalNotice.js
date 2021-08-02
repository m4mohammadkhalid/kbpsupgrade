import React from 'react'
import Marquee from 'react-marquee-master';

const PrincipalNotice = () => {
    const marqueeItems=['1 publishing and graphic design',
 '2 Lorem ipsum is a placeholder text commonly', 
 '3 used to demonstrate the visual form of a document '
 , '4 typeface without relying on meaningful content.',
  '5 Lorem ipsum may be used as a placeholder'];
    return (
        <>

            <section className="overflow_hide">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-md-5">
                    <div className="animation" data-animation="fadeInLeft" data-animation-delay="0.01s">
                    <img src="assets/images/about_img2.png" alt="about_img2" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="padding_eight_all animation fancy_box" data-animation="fadeInRight" data-animation-delay="0.02s">
                                <p>
                       <Marquee style={{width: '0%'}} direction='up' marqueeItems={marqueeItems} />

                                </p>
                    </div>
                </div>
                </div>
            </div>
            </section>


        </>
    )
}

export default PrincipalNotice
