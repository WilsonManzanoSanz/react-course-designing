import { useState } from 'react';

function useTheme(defaultValue = 'light'){

    const [theme, setTheme] = useState(defaultValue);

    const validateTheme = (themeValue = 'light') => {
        console.log('working')
        setTheme(themeValue);
    } 

    return {
        theme, 
        setTheme: validateTheme
    }
}

export default useTheme;