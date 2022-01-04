import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/HomeSlider.css"
import {GiTakeMyMoney} from 'react-icons/gi';

export class HomeSlider extends Component {

    render() {

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4,
                slidesToSlide: 1 // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 1 // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1 // optional, default to 1.
            }
        };

        return (
            <Carousel
                swipeable={false}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="transform 500ms ease-in-out"
                transitionDuration={100}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile",]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                renderDotsOutside={false}
            >

                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='slider-item'>
                    <div>
                        <img src="sample.jpg" alt="Newborn Baby and Maternity Photoshoot in Delhi by Vinus Images" style={{ width: '-webkit-fill-available', height: '100%' }} />
                    </div>
                    <div className="inner-container" >
                        <div className='item-name'>
                            Item Name
                        </div>
                        <div className='row text-center item-details'>
                            <div className='col-6 start-details-text'>Started at</div>
                            <div className='col-6 current-details-text'>Now</div>
                            <div className='col-6 start-details-price'>
                                <div className='text-strick'>Rs. 10,000</div>
                                <div>5 days ago</div>
                            </div>
                            <div className='col-6 current-details-price'>Rs. 15,000 <div>And Raising</div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-10 offset-1'>
                                <button className='raise-btn'>Raise <GiTakeMyMoney /></button>
                            </div>
                        </div>
                    </div>
                </div>


            </Carousel>
        )
    }
}

export default HomeSlider