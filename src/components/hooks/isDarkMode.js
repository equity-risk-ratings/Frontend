import { useEffect } from 'react'
import useLocalStorage from './localStorage';

const useDarkMode = () => {
const [isDark, setIsDark] = useLocalStorage(false)

    useEffect(() => {
        if(isDark === true){
            document.body.classList.add('dark-mode')
        }
        else{
            document.body.classList.remove('dark-mode')
        }
        },[isDark])

        return [isDark, setIsDark];
    }

export default useDarkMode;