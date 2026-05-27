import {createContext, type ReactNode, useContext, useEffect, useState} from "react";

type ThemeContextType = {
    darkmode: boolean;
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ThemeContext = createContext<ThemeContextType>({
    darkmode: false,
    setDarkmode: () => {},
});


function ThemeProvdier( {children}: {children: ReactNode}) {


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
        <ThemeContext.Provider value={{darkmode, setDarkmode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    return useContext(ThemeContext);

}

export default ThemeProvdier;