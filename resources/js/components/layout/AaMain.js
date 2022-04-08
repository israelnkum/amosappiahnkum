import React from 'react';
import {BackTop, Layout} from "antd";
import AaFooter from "./AaFooter";
import AaHeader from "./Header";

function AaMain({ children }) {
    return (
        <Layout style={{ background: '#fff'}}>
            <AaHeader/>
            <Layout.Content style={{ padding: '0', background: '#fff' }}>
                {children}
            </Layout.Content>
            <AaFooter/>
            <BackTop />
        </Layout>
    );
}

export default AaMain;
