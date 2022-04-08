import React from 'react';
import {Card, Col, Row, Typography} from "antd";
import Slider from "react-slick";
import bou from '../../../assets/clients/bou.png'
import aiva from '../../../assets/clients/aiva-creative.jpeg'
import amalitechService from '../../../assets/clients/amalitech-services.jpeg'
import amalitechTrainig from '../../../assets/clients/amalitech-training.jpeg'
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
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
const companies =  [

    {
        name: 'Both Of Us',
        title: 'Fullstack Engineer',
        logo: bou,
        width: 90
    },
    {
        name: 'Aiva Creative',
        title: 'Associate Software Engineer',
        logo: aiva,
        width: 40
    },{
        name: 'Amalitech Training gGmbH',
        title: 'Fullstack Engineer',
        logo: amalitechTrainig,
        width: 40
    },
    {
        name: 'Amalitech Services GmbH',
        title: 'Certified SFCC Developer',
        logo: amalitechService,
        width: 40
    }
]

function Experience() {
    return (
        <div style={{ textAlign: 'center'}} className={'experience'} id={'portfolio'}>
            <Row justify={'center'}>
                <Col span={16} xs={24} lg={16}>
                    <Typography.Text className={'sub-title'}>Experience</Typography.Text>
                    <Typography.Title className={'info-title'} level={5}>I work with clients globally</Typography.Title>
                </Col>
                <Col span={14} xs={14} lg={14} className={'professional-summary-div'}>
                    <Slider {...settings}>
                        {companies.map((company) => (
                            <div key={company.name} align={'center'} style={{margin: 10, textAlign: 'center', height: 120}}>
                                <img style={{height: 'auto', width: company.width}}
                                     alt={company.name}
                                     src={company.logo}
                                />
                                <small>{company.name}</small>
                                <p>{company.title}</p>
                            </div>
                        ))
                        }
                    </Slider>
                </Col>
            </Row>
        </div>
);
}

export default Experience;
