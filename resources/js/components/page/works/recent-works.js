import React from 'react';
import {Col, Row, Typography} from "antd";
import SingleWork from "./single-work";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CaldrivaDashboard from '../../../assets/images/caldriva/dashboard.png'
import CaldrivaDriverDashboard from '../../../assets/images/caldriva/caldriva-mobile.jpg'
import SmartHospitalLogin from '../../../assets/images/smart-hospital/login.png'
import AimsLogin from '../../../assets/images/aims/aims-login.png'
import OsLanding from '../../../assets/images/osshop/landing.png'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const projects =  [
    {
        title: 'Caldriva',
        cover: CaldrivaDashboard,
        description: 'Description goes here'
    },
    {
        title: 'AIMS',
        cover: AimsLogin,
        description: 'Description goes here'
    },
    {
        title: 'Smart Hospital',
        cover: SmartHospitalLogin,
        description: 'Description goes here'
    },
    {
        title: 'Online Stationary Shop',
        cover: OsLanding,
        description: 'Description goes here'
    },
    {
        title: 'Caldriva Mobile',
        cover: CaldrivaDriverDashboard,
        description: 'Description goes here'
    }
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
        />
    );
}

function RecentWorks() {
    return (
        <div style={{ textAlign: 'center'}} className={'recent-works'} id={'portfolio'}>
            <Row justify={'center'}>
                <Col span={16} xs={24} lg={16}>
                    <Typography.Text className={'sub-title'}>Portfolio</Typography.Text>
                    <Typography.Title className={'info-title'} level={5}>Recent Works</Typography.Title>
                </Col>
                <Col span={22} xs={22} lg={22} className={'professional-summary-div'}>
                    <div>
                        <Slider {...settings}>
                            {
                                projects.map((project) => (
                                    <div key={project.title}>
                                        <SingleWork project={project}/>
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default RecentWorks;
