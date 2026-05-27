import { useTheme } from "../context/ThemeContext.tsx";


function DarkModeBtn() {

    const { darkmode, setDarkmode } = useTheme();

    function handlerChangeDark() {


        setDarkmode(!darkmode);

        console.log(darkmode);


        // localStorage.setItem(
        //     "darkmode",
        //     JSON.stringify(newDarkmode)
        // );
    }
    return (
        <button onClick={handlerChangeDark}> { darkmode ? 'light' : 'dark' }</button>
    )
}
export default DarkModeBtn;