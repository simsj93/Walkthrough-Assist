import { ThemeProvider } from "styled-components";
import Splash from "./Components/SplashScreen";
import React, {useState, useEffect} from "react";




const Themes = () => {
    const [theme, setTheme] = useState('dark');
    const LightMode = {
        pageBackground: "white"
    };
    
    const DarkMode = {
        pageBackground: "dark purple"
    };
    
    const themes = {
        light: LightMode,
        dark: DarkMode,
    }


    return (
        <ThemeProvider theme={themes[theme]}>
            <Splash theme={theme} setTheme={setTheme} />
        </ThemeProvider>

    );

};

export default Themes;
