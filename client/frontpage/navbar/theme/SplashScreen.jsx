import styled from "styled-components";
import {CgSun} from 'react-icons/cg';
import {HiMoon} from 'react-icons/hi';



const SplashScreen = () => {
    const Splash = () => {
        if (theme === 'dark'){
            setTheme('light');
    
        } else{
            setTheme('dark')
        }
    };
    
    const icon = theme === " dark" ? <CgSun size={40} /> : <HiMoon size={40} />;

    return (
        <div className="container">
            <Toggle onclick={Splash}>
                {icon}
            </Toggle>
        </div>
    );
}

export default SplashScreen;