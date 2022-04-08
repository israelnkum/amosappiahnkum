import React from 'react';
import {Col, Row, Typography} from "antd";
import CustomList from "./custom-list";
import Amos from '../../../assets/images/amos-appiah.png'

const tools = [
    {title: 'Git'},
    {title: 'Bitbucket'},
    {title: 'G-Cloud'},
    {title: 'AWS'},
    {title:'NPM'},
    {title: 'IntelliJ'},
    {title:'Web Storm'},
    {title:'Visual Studio Code'},
    {title:'Eclipse'},
    {title:'NetBeans'}
]
const trainings = [
    {
        title: 'React Nano Degree',
        provider: 'Udacity',
        date: 'Oct. 2021'
    },{
        title: 'Salesforce Certified B2C Commerce Developer',
        provider: 'Salesforce',
        date: 'March 2021'
    },
    {
        title: 'Object-Oriented Design',
        provider: 'Coursera',
        date: 'March 2021'
    },
    {
        title: 'Web Development with Java Spring Framework',
        provider: 'Coursera',
        date: 'March 2021'
    },
    {
        title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
        provider: 'Coursera',
        date: 'March 2021'
    },
    {
        title:'Java Programming: Solving Problems with Software',
        provider: 'Coursera',
        date: 'Feb. 2021'
    },
    {
        title: 'Java Server Page',
        provider: 'Udemy',
        date: 'April. 2020'
    },
    {
        title: 'Laravel Framework',
        provider: 'Udemy',
        date: 'Nov. 2020'
    },
    {
        title:'NodeJs',
        provider: 'Udemy',
        date: 'Nov. 2020'
    }
]
function ToolsTraining() {
    return (
        <Row justify={'center'} align={'top'} className={'what-i-work-with'} style={{ textAlign: 'center'}}>
            <Col xs={24} sm={8} lg={8} style={{ textAlign: 'left'}}>
                <Typography.Text className={'sub-title'}>Training and Certifications</Typography.Text>
                <CustomList data={trainings}/>
            </Col>
            <Col xs={24} sm={8} lg={8}>
                <img src={Amos} alt="Amos Appiah Nkum" height={'auto'} width={250}/>
            </Col>
            <Col xs={24} sm={8} lg={8} className={'tools-and-tech'} style={{ textAlign: 'right'}}>
                <Typography.Text className={'sub-title'}>Tools and Technologies I use</Typography.Text>
                <CustomList data={tools}/>
            </Col>
        </Row>
    );
}

export default ToolsTraining;
