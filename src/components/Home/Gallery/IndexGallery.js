import React,{useState} from 'react'
import '../css/Gallery.css'
import Footer from '../HomePage/Footer'
import Header from '../HomePage/Header'
import NoticeHeader from '../HomePage/NoticeHeader'
import Gallery from './GalleryData'
const IndexGallery = () => {
  const [item, setitem] = useState(Gallery);
  const filterItem=(categoryname)=>{
      const updateitem= Gallery.filter((currentData)=>{
          return currentData.category=== categoryname
      })
      setitem(updateitem)
  }
  return (
    <>
      <NoticeHeader />
      <Header />

      <div className="container">
        <div className="row">
          <div style={{ paddingTop: '40px' }} className="col-lg-12 text-center my-2">
            <h4>Gallery</h4>
          </div>
        </div>
        <div className="portfolio-menu mt-2 mb-4">
          <ul>
            <li className="btn btn-outline-dark active" onClick={()=>setitem(Gallery)}>All</li>
            <li className="btn btn-outline-dark" onClick={()=>filterItem('class8')}>Class 8th</li>
            <li className="btn btn-outline-dark" onClick={()=>filterItem('class6')}>Class 6th</li>
            <li className="btn btn-outline-dark" onClick={()=>filterItem('class4')}>Class 4th</li>
            <li className="btn btn-outline-dark text" onClick={()=>filterItem('class2')}>Class 2th</li>
          </ul>
        </div>
        <div className="portfolio-item row">
          {
              item.map((elem)=>{
                const {image}=elem;
                  return(
                    <div className="item  col-lg-3 col-6 col-sm">
                    <a href="/" className="fancylight popup-btn" data-fancybox-group="light">
                      <img style={{ height: '160px', width: '300px' }} className="img-fluid" src={image} alt="khalid" />
                    </a>
                  </div>
                  )
              })
          }
          
          
        </div>
      </div>




      <Footer />

    </>
  )
}

export default IndexGallery
