import React from 'react';
import 'antd/dist/antd.css';
import AaMain from "./layout/AaMain";
import Hero from "./page/hero";
import InfoSection from "./page/info/info-section";
import RecentWorks from "./page/works/recent-works";
import ToolsTraining from "./page/tools/tools-training";
import Experience from "./page/works/experience";

function Landing() {
    return (
        <AaMain>
            <Hero/>
            <InfoSection/>
            <RecentWorks/>
            <Experience/>
            <ToolsTraining/>
        </AaMain>
    );
}

export default Landing;
