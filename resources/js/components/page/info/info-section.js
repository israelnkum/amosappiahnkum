import React from 'react';
import {Col, Row, Typography} from "antd";
import ContactDetails from "./contact-details";

function InfoSection() {
    return (
       <>
           <div style={{ textAlign: 'center'}} id={'about-me'}>
               <Row justify={'center'} align={'middle'} className={'info-section'}>
                   <Col xs={24} sm={24} lg={16}>
                       <Typography.Text className={'sub-title'}>Professional Summary</Typography.Text>
                       <Typography.Title className={'info-title'} level={5}>I'm a Full Stack Developer</Typography.Title>
                   </Col>
                   <Col xs={24} sm={24} lg={16} className={'professional-summary-div'}>
                       <Typography.Text className={'professional-summary-text'}>
                           I have about 5 years of experience in web application development.
                           I am capable of developing efficient and scalable software systems.
                           I can analyze customer requirements to create effective, high-end,
                           and user-friendly web solutions. I am a quick learner, capable of adapting
                           to constantly changing requirements and environments.
                           I can work effectively alone or as part of a team
                       </Typography.Text>
                   </Col>
                   <Col span={24}>
                       <ContactDetails/>
                   </Col>
               </Row>
               <div style={{ background: '#2d2d2d', padding: '25px 25px' }}>
                   <Typography.Text style={{ color: '#fff' }} className={'sub-title'}>CERTIFIED SALESFORCE COMMERCE CLOUD DEVELOPER</Typography.Text>
               </div>
           </div>
       </>
    );
}

export default InfoSection;
