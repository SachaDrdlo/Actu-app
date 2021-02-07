import React, {useState, useEffect} from 'react'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components/GlobalStyles";
import { lightTheme, darkTheme } from "../components/Theme"
import Header from './Header'
const ActuContent = () => {

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        if (theme === 'light') {
          setTheme('dark')
        } else {
          setTheme('light')
        }
    
        return [theme, toggleTheme]
      };

      useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
      }, [])

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
            <GlobalStyles/>
            <div>
                <Header />
                <div className="content">
                    <div className="container">
                        <h1>Pourquoi Daily News ?</h1>
                        <p><span>Daily News</span> est un petit projet pour montrer quelques compétences que je possède. Ici le but était donc d'utiliser avant tout ReactJS pour utiliser une partie de ce que ce Framework propose. Il y a donc dans cette application l'utilisation des Components pour externaliser tous les composants de mon application et ainsi proposer un code clair. Il y a également l'utilisation d'une api avec la méthode fetch et ainsi l'utilisation des hooks pour permettre de récupérer ses informations. Sass y est également utilisé.</p>
                        <p>En bref, ce projet assez simple m'a permis de m'entrainer sur ces technologies et ainsi pouvoir vous montrer une partie de mes compétences.</p>
                        <p>Au plaisir de vous voir sur un autre projet.</p>
                    </div>
                </div>
            </div>
            </>
        </ThemeProvider>
    )
}

export default ActuContent
