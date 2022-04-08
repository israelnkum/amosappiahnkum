import React, {useState} from 'react';
import {Col, Drawer, Row} from "antd";
import { FiMenu } from "react-icons/fi";
import AaLogo from "../../commons/AaLogo";
import AaMenu from "../../commons/AaMenu";

function AaMobile() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return (
        <Row className={'mobile-nav'} justify={'space-between'} align={'middle'}>
            <Col xs={18}>
                <AaLogo/>
            </Col>
            <Col  xs={3}>
                <FiMenu style={{ fontSize: 20}} onClick={showDrawer}/>
            </Col>

            <Drawer placement="bottom" onClose={onClose} visible={visible}>
                <AaMenu mode={'vertical'}/>
            </Drawer>
        </Row>
    );
}

export default AaMobile;
