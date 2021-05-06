import React from 'react'
import NonPassiveTouchTarget from "../../compoenets/NonPassiveTouchTarget"
import TouchCarousel, { clamp } from '../../compoenets/src'
import touchWithMouseHOC from '../../compoenets/src/touchWithMouseHOC'
import '../../App.css'
const cardSize = 300
const cardPadCount = 3
const carouselWidth = clamp(window.innerWidth, 0, 960)
const Container = touchWithMouseHOC(CarouselContainer)

const data = [
    {
        title: 'Name 1',
        background: '#0072bb',
        image:'assets/images/instructor-3.png'
    },
    {
        title: 'Name 2',
        background: '#ff4c3b',
        image:'assets/images/instructor-1.png'
    },
    {
        title: 'Name 3',
        background: '#ffca18',
        image:'assets/images/instructor-2.png'
    },
    {
        title: 'Name 4',
        background: '#44c1c1',
        image:'assets/images/instructor-3.png'
    },
    {
        title: 'Name 5',
        background: '#29c53c',
        image:'assets/images/instructor-1.png'
    }
]

function CarouselContainer(props) {
    const { cursor, carouselState, ...rest } = props
    // Put current card at center
    const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
    return (
        <NonPassiveTouchTarget className='carousel-container'>
            <NonPassiveTouchTarget
                className='carousel-track'
                style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
                {...rest}
            />
        </NonPassiveTouchTarget>
    )
}

function renderCard(index, modIndex, cursor) {
    const item = data[modIndex]
    const rotate = 40 * (index + cursor)
    const onTop = Math.abs(index + cursor) < 0.5
    return (
        <div key={index} className='carousel-card'>
            <div
                className='carousel-card-inner'
                style={{
                    backgroundColor: item.background,
                    transform: `rotate(${rotate}deg)`,
                    zIndex: onTop ? 1 : 0,
                    borderRadius:'60px'
                }}
            >
                <div className='carousel-title'>{item.title}</div>
                <div className='carousel-text'><img src={item.image} alt="khalid" /></div>
            </div>
        </div>
    )
}
const Text = () => {

    return (
        <>
            <div style={{ backgroundImage: 'url("assets/images/banner5.jpg")',paddingTop:'10px',paddingBottom:'10px' }}>
            <div className="heading_s1 text-center">
                <h2 style={{ color: 'green', paddingTop:'14px' }}>Top 10 Student</h2>
              </div>
                <div className="col-md-12">
                        <TouchCarousel
                            component={Container}
                            cardCount={data.length}
                            cardSize={375}
                            renderCard={renderCard}
                            loop
                            autoplay={3000}
                        />
                </div>
            </div>
        </>
    )
}

export default Text




