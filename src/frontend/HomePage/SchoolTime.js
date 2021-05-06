import React from 'react'

const SchoolTime = () => {
            
    const currTime=new Date().toLocaleTimeString();
    let curDate=new Date();
    curDate=curDate.getHours();
    let Schooltime='';
    if(curDate >= 7 && curDate < 12){
       Schooltime='School Time';
    }else if(curDate >=12 && curDate < 13){
        Schooltime='Lunch Time'
     }else{
        Schooltime="School Close"
     }
    return (
<>
<section className="countdown-section">
  <div className="container">
    <div className="common-section">
      <div className="counter-shape">
        <img src="assets/images/round-shape-2.png" alt="shape" className="round-shape-2" />
        <img src="assets/images/plus-sign.png" alt="shape" className="plus-sign item-rotate" />
        <img src="assets/images/round-shape-3.png" alt="shape" className="round-shape-3" />
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="countdown-left">
            <h2 className="home-2"><span>{Schooltime}</span></h2>
          </div>
        </div>
        <div className="col-lg-4">
          <div  style={{textAlign:'center',}}>
        <button type="button" className="btn btn-outline-success" style={{paddingTop:'10px',borderRadius:'10px'}}>Routing</button>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="countdown-right">
            <ul className="countdown">
              <li>
                <span className="hours">{currTime}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default SchoolTime