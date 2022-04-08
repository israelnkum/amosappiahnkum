import React from 'react';
import {Layout} from "antd";
import '../../../assets/aan-header.css'
import AaDesktop from "./AaDesktop";
import AaMobile from "./AaMobile";

function AaHeader() {
    return (
        <Layout.Header style={{ background: 'rgb(244 244 244)'}}>
            <AaDesktop/>
            <AaMobile/>
        </Layout.Header>

    );
}

export default AaHeader;
