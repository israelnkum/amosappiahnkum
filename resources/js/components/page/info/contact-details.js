import React from 'react';
import {Col, Row, Space, Typography} from "antd";
import {BsTelephone, GrMailOption} from "react-icons/all";
import FollowMe from "../../commons/follow-me";

function ContactDetails() {
    return (
        <Row gutter={[10,10]} justify={'center'} align={'middle'} className={'contact-details'}>
            <Col md={6} lg={6} xs={24} sm={24} style={{ textAlign: 'left'}} className={'contact-details'}>
                <Space direction={'vertical'}>
                    <Typography.Text>Let's get in touch</Typography.Text>
                    <Typography.Text>
                        <BsTelephone/>&nbsp;
                        <a href="tel:+233544513074" className={'follow-link'}>+233 544 513 074</a>
                    </Typography.Text>
                </Space>
            </Col>
            <Col md={6} lg={6} xs={24} sm={24} className={'contact-details'}>
                <Space direction={'vertical'}>
                    <Typography.Text>Drop an email</Typography.Text>
                    <Typography.Text>
                        <GrMailOption/>&nbsp;
                        <a href={'mailto:hire@amosappiahnkum.com'} className={'follow-link'}>hire@amosappiahnkum.com</a>
                    </Typography.Text>
                </Space>
            </Col>
            <Col md={6} lg={6} xs={24} sm={24} style={{ textAlign: 'right'}} className={'contact-details'}>
                <Space direction={'vertical'}>
                    <Typography.Text>Follow me</Typography.Text>
                    <FollowMe fontSize={15}/>
                </Space>
            </Col>
        </Row>
    );
}

export default ContactDetails;
