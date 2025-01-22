import { useState } from "react";
export default function ThemeChange(){
    const [theme, setTheme] = useState("Light");    
    
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "Light"? "Dark": "Light"));
    };

    const dynamicStyle = {
        backgroundColor: theme === "Light" ? "#ffffff" : "#333333",
        color: theme === "Light" ? "#000000" : "#ffffff",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    };

    return(
        
        <div style={dynamicStyle}>
            <p>This is my text</p>
            <button
                onClick={toggleTheme}
                style={{marginTop: "10px"}}>
                    Toggle to {theme === "Light"? "Dark": "Light"} Mode</button>
        </div>
    );
}