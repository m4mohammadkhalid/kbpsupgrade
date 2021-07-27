import React from 'react'
import { Link } from 'react-router-dom'
import Marquee from 'react-double-marquee';
import { GoBell } from 'react-icons/go';

const NoticeHeader = () => {
    return (
        <>
           <div style={{backgroundColor:'#1E2264', color:'white'}}>
  <div style={{ 
        width: '100%',
        whiteSpace: 'nowrap',
      }} className="container">
    <Marquee behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
      <Link style={{color:'white',marginRight:'30px'}} to="#" target="_blank"> <GoBell style={{marginBottom:'4px', color:'yellow', marginRight:'2px'}} />4Universities the winners if Labor assumes government </Link>  
      <Link style={{color:'white',marginRight:'30px'}} to="#" target="_blank"> <GoBell style={{marginBottom:'4px', color:'yellow', marginRight:'2px'}} />Overseas students are driving rapid population growth</Link>   
      <Link style={{color:'white',marginRight:'30px'}} to="#" target="_blank"> <GoBell style={{marginBottom:'4px', color:'yellow', marginRight:'2px'}} />Admission for Ph.D. Programme 2019-20</Link> 
      <Link style={{color:'white',marginRight:'30px'}} to="#" target="_blank"> <GoBell style={{marginBottom:'4px', color:'yellow', marginRight:'2px'}} />Application form for Provisional Registration for Ph.D</Link>  
      <Link style={{color:'white',marginRight:'30px'}} to="#" target="_blank"> <GoBell style={{marginBottom:'4px', color:'yellow', marginRight:'2px'}} />Graduates need second degree to become a high earner</Link>  
      <Link style={{color:'white',marginRight:'30px'}} to="#" target="_blank"> <GoBell style={{marginBottom:'4px', color:'yellow', marginRight:'2px'}} />Eduglobal Portal for students seeking Education Loan</Link>   
      <Link style={{color:'white',marginRight:'30px'}} to="#" target="_blank"> <GoBell style={{marginBottom:'4px', color:'yellow', marginRight:'2px'}} />Creating inclusive curricula in higher education</Link>
    </Marquee>
  </div>
</div>

        </>
    )
}

export default NoticeHeader
