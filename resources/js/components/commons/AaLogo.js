import React from 'react';
import Amos from '../../assets/images/amos-appiah-nkum.jpeg'
import HireMe from "./hireMe";

function AaLogo() {
    return (

        <div className="logo" style={{ color: '#000' }}>
            <img style={{ borderRadius: 50 }} src={Amos} height={'auto'} width={40} alt="Amos Appiah Nkum"/>
            <span className={'mobile-hire'}>
                <HireMe/>
            </span>
        </div>
    );
}

export default AaLogo;
