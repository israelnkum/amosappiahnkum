import React from 'react';
import {Anchor, Menu} from "antd";

const { Link } = Anchor;
function AaMenu({ mode }) {
    return (
        <Anchor activeLink={'#home'}>
            <Menu theme="light" mode={mode} align={'center'} className={'aa-menu'}>
                <Menu.Item key={'Home'}>
                    <Link href="#home" title="Home" />
                </Menu.Item>
                <Menu.Item key={'about-me'}>
                    <Link href="#about-me" title="About Me" />
                </Menu.Item>
                <Menu.Item key={'Portfolio'}>
                    <Link href="#portfolio" title="Portfolio" />
                </Menu.Item>
                <Menu.Item key={'Blog'}>
                    <Link href="#blog" title="Blog" />
                </Menu.Item>
            </Menu>
        </Anchor>
    );
}

export default AaMenu;
