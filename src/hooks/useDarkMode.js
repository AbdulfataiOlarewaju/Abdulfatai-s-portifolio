import { useEffect, useState } from 'react'

function useDarkMode() {
    const [theme, setTheme] = useState(localStorage.theme || 'light')
    const colorTheme = theme === 'dark' ? 'light' : 'dark'

    useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove(colorTheme)
        root.classList.add(theme)
        localStorage.setItem('theme', theme)
    }, [theme, colorTheme])

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return [theme, toggleTheme]
}

export default useDarkMode
