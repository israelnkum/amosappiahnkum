import React from 'react';
import {Col, Row} from "antd";
import AaLogo from "../../commons/AaLogo";
import HireMe from "../../commons/hireMe";
import AaMenu from "../../commons/AaMenu";

function AaDesktop() {
    return (
        <Row className={'desktop-nav'} justify={'space-around'} align={'middle'} >
            <Col xs={2} sm={4} md={6} lg={4} xl={5} xxl={8}>
                <AaLogo/>
            </Col>
            <Col xs={20} sm={12} md={8} lg={8} xl={8} xxl={8} style={{ justifyContent: 'center' }}>
                <AaMenu mode={'horizontal'}/>
            </Col>
            <Col xs={2} sm={4} md={6} lg={4} xl={4} xxl={4} style={{  textAlign: 'right'}}>
                <HireMe/>
            </Col>
        </Row>
    );
}

export default AaDesktop;
