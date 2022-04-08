import React from 'react';
import {Layout, Space, Typography} from "antd";
import FollowMe from "../commons/follow-me";

function AaFooter() {
    return (
        <Layout.Footer style={{ textAlign: 'center', paddingTop: 100, paddingBottom: 100, background: '#ebebeb' }}>
            <Space direction={'vertical'}>
                <FollowMe/>
                <Typography.Text style={{ fontSize: 20, color: '#000' }}>
                    <a href="mailto:hire@amosappiahnkum.com" style={{ color: '#000' }}>hire@amosappiahnkum.com</a>
                </Typography.Text>
                <Typography.Text style={{ fontSize: 15, color: '#000' }}>
                    <a href="tel:+233544513074" style={{ color: '#000' }}>+233 544 513 074</a>
                </Typography.Text>
                <Typography.Text>&copy; {new Date().getFullYear()}</Typography.Text>
                <Typography.Text>Amos Appiah Nkum</Typography.Text>
            </Space>
        </Layout.Footer>
    );
}

export default AaFooter;
