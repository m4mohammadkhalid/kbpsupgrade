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
        title: 'Card 1',
        background: '#0072bb',
        text: `react-touch-carousel only handles the trouble parts, i.e.
        - touch gestures parsing
        - scroll cursor rounding and modding
        - items padding and looping
        - auto playing`
    },
    {
        title: 'Card 2',
        background: '#ff4c3b',
        text: `It is left up to you to
        - decide the carousel structure
        - render each item in the carousel
        - style everything
        - add some fancy decorators like dots`
    },
    {
        title: 'Card 3',
        background: '#ffca18',
        text: `Install it by
        - npm install --save react-touch-carousel`
    },
    {
        title: 'Card 4',
        background: '#44c1c1',
        text: `See some example code in the '/examples' dir at GitHub. And you can run and play with the code after cloning it, by
        - npm install
        - npm run dev
        - open localhost:5000`
    },
    {
        title: 'Card 5',
        background: '#29c53c',
        text: 'react-touch-carousel is released under MIT license'
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
                    zIndex: onTop ? 1 : 0
                }}
            >
                <div className='carousel-title'>{item.title}</div>
                <div className='carousel-text'>{item.text}</div>
            </div>
        </div>
    )
}
const Text = () => {

    return (
        <>
            <div style={{ backgroundImage: 'url("assets/images/banner5.jpg")',paddingTop:'10px',paddingBottom:'10px' }}>
               <h1 style={{color:'green'}}>Top Student</h1>
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




