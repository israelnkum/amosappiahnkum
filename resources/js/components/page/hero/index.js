import React from 'react';
import '../../../assets/aan-header.css'
import heroImage from '../../../assets/images/hero.jpg'
// import web from '../../../assets/images/web.png'
import {
    BsBootstrap, FaPhp,
    GrMysql,
    RiReactjsFill,
    SiJava,
    SiJavascript,
    SiLaravel,
    SiPostgresql,
    SiSpring,
    SiWordpress
} from "react-icons/all";
import {Row, Col, Typography} from "antd";
import FollowMe from "../../commons/follow-me";


function Hero() {
    return (
        <Row id={'home'} align={'middle'}  justify={'center'} className={'hero-section'}>
            <Col xs={24} sm={9} md={9} lg={9}>
                <Typography.Title className={'hero-title'}>
                    Amos Appiah Nkum
                </Typography.Title>
                <Typography.Text className={'hero-sub-title'}>
                    Fullstack Engineer
                </Typography.Text>
                <Row justify={'space-between'} align={'middle'}  style={{ marginTop: 20, paddingTop: 10 }}>
                    <Col xs={12}>
                        <div className={'bubble bootstrap'}>
                            <BsBootstrap/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>Bootstrap</Typography.Text>
                        </div>
                        <div className={'bubble php'}>
                            <FaPhp/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>PHP</Typography.Text>
                        </div>
                        <div className={'bubble react'}>
                            <RiReactjsFill/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>React</Typography.Text>
                        </div>
                        <div className={'bubble laravel'}>
                            <SiLaravel/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>Laravel</Typography.Text>
                        </div>
                        <div className={'bubble mysql'}>
                            <GrMysql/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>MySql</Typography.Text>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className={'bubble java'}>
                            <SiJava/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>Java</Typography.Text>
                        </div>
                        <div className={'bubble spring'}>
                            <SiSpring/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>Spring</Typography.Text>
                        </div>
                        <div className={'bubble wordpress'}>
                            <SiWordpress/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>Wordpress</Typography.Text>
                        </div>
                        <div className={'bubble javascript'}>
                            <SiJavascript/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>Javascript</Typography.Text>
                        </div>
                        <div className={'bubble postgres'}>
                            <SiPostgresql/>&nbsp;&nbsp;&nbsp;
                            <Typography.Text>Postgres</Typography.Text>
                        </div>
                    </Col>
                </Row>
           </Col>
            <Col xs={24} sm={5} md={5} lg={5}>
                <img src={heroImage} className={'hero-photo'} alt=""/>
                <div style={{ textAlign: 'right', marginTop: 30, paddingRight: 12 }}>
                    <FollowMe fontSize={15}/>
                </div>
            </Col>
        </Row>
        /*<div className={'hero-section'}>
            <div className="hero">
                <img src={heroImage} className={'hero-photo'} alt=""/>
                <div className={'bubble bootstrap'}>
                    <BsBootstrap/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>Bootstrap</Typography.Text>
                </div>
                <div className={'bubble php'}>
                    <BsBootstrap/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>PHP</Typography.Text>
                </div>
                <div className={'bubble react'}>
                    <RiReactjsFill/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>React</Typography.Text>
                </div>
                <div className={'bubble laravel'}>
                    <SiLaravel/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>Laravel</Typography.Text>
                </div>
                <div className={'bubble mysql'}>
                    <GrMysql/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>MySql</Typography.Text>
                </div>
                <div className={'bubble java'}>
                    <SiJava/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>Java</Typography.Text>
                </div>
                <div className={'bubble spring'}>
                    <SiSpring/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>Spring</Typography.Text>
                </div>
                <div className={'bubble wordpress'}>
                    <SiWordpress/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>Wordpress</Typography.Text>
                </div>
                <div className={'bubble javascript'}>
                    <SiJavascript/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>Javascript</Typography.Text>
                </div>
                <div className={'bubble postgres'}>
                    <SiPostgresql/>&nbsp;&nbsp;&nbsp;
                    <Typography.Text>Postgres</Typography.Text>
                </div>
            </div>
        </div>*/
    );
}

export default Hero
