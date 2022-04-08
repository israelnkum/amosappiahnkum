import React from 'react';
import {Popconfirm, Space} from "antd";
import {SiBitbucket, SiGithub, SiLinkedin, SiSkype, SiStackoverflow, AiOutlineSkype} from "react-icons/all";

function FollowMe({ fontSize = 25 }) {
    return (
        <Space style={{ fontSize: fontSize}}>
            <a className={'follow-link'} title={'Github'} target={'_blank'} href="https://github.com/israelnkum">
                <SiGithub/>
            </a>

            <a className={'follow-link'} title={'Stackoverflow'} target={'_blank'} href="https://stackoverflow.com/users/11365776/israel-nkum">
                <SiStackoverflow/>
            </a>
            <a className={'follow-link'} title={'Linkedin'} target={'_blank'} href="https://www.linkedin.com/in/aankum/">
                <SiLinkedin/>
            </a>
            <Popconfirm
                icon={<AiOutlineSkype />}
                title="live:israelnkum"
                okText="Close"
                cancelText="No"
                showCancel={false}
            >
                <a className={'follow-link'} title={'Skype'} href="#">
                    <SiSkype/>
                </a>
            </Popconfirm>

        </Space>
    );
}

export default FollowMe;
