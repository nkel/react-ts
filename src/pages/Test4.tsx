import Header from "../layout/Header.tsx";
import {ThemeContext} from "../context/ThemeContext.tsx";
import {useEffect, useState} from "react";

function  Test4() {

    const [darkmode, setDarkmode] = useState(false);

    useEffect(() => {

        const savedTheme = localStorage.getItem("darkmode");

        if (savedTheme) {
            setDarkmode(JSON.parse(savedTheme));
        }

    }, []);

    useEffect(() => {

        if (darkmode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

    }, [darkmode]);


    return (
       <>
           <ThemeContext.Provider value={ { darkmode, setDarkmode } } >
             <Header />
           </ThemeContext.Provider>

       </>
    );
}

export default Test4;
