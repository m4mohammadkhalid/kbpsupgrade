import React from 'react'
import { Link } from "react-router-dom";

const NoticeHeader = () => {
    return (
        <div className="news_ticker bg-warning">
  <div style={{Width:"90% 0% 90% 0%"}}>
    <marquee behavior="scroll" direction="left" onMouseOver="this.stop();" onMouseOut="this.start();">
      <Link to="#" target="_blank">Universities the winners if Labor assumes government</Link> ||
      <Link to="#" target="_blank">Overseas students are driving rapid population growth</Link> || 
      <Link to="#" target="_blank">Admission for Ph.D. Programme 2019-20</Link> || 
      <Link to="#" target="_blank">Application form for Provisional Registration for Ph.D</Link> || 
      <Link to="#" target="_blank">Graduates need second degree to become a high earner</Link> ||
      <Link to="#" target="_blank">Eduglobal Portal for students seeking Education Loan</Link> || 
      <Link to="#" target="_blank">Creating inclusive curricula in higher education</Link>
    </marquee>
  </div>
</div>

    )
}

export default NoticeHeader
