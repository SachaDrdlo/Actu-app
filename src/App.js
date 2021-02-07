import { Component, useEffect, useState } from 'react';
import './sass/main.scss';
import ActuCards from "./components/ActuCards";
import Header from './components/Header'
import { Row } from 'antd';
import HighlitedCard from './components/HighlightedCard';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"

const App = () => {

  const [actu, setActu] = useState([])
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', 'dark')
      setTheme('dark')
    } else {
      window.localStorage.setItem('theme', 'light')
      setTheme('light')
    }

    return [theme, toggleTheme]
  };

  const getActus = async () => {
    const data = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=9IUJnGbqkaoX6gmjDBAloBMnGPP1HAgB")
      .then(response => response.json())

    setActu(data)
    setLoading(false)
  }

  useEffect(() => {
    getActus()
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, [])

  // Slice le tableau et mettre le premier atricle en highlight

  // const actus = Object.keys(actu)
  // console.log([...actu])
  // let oneActu

  // oneActu = Object.values(actu).map((item) => {
  //   return(
  //     <HighlitedCard
  //       urlToImage={item.url}
  //       title={item.title}
  //     />
  //   )
  // })

  let listActu

  if (loading) {
    return <p>Chargement en cours...</p>
  }

  listActu = actu.results.map((actu) => {
    return (
      <ActuCards
        key={actu.publishedAt}
        title={actu.title}
        urlToImage={actu.media.url}
        content={actu.content}
        url={actu.url}
      />
    )
  })

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <div className="App">
          <Header
            btn={toggleTheme}
          />

          {/* <button onClick={toggleTheme}>change</button> */}
          <label className="switch" onChange={() => toggleTheme()}>
            <input type="checkbox"/>
              <span className="slider round"></span>
          </label>
            <Row className="cardsRow">
              {listActu}
            </Row>

        </div>
      </>
      </ThemeProvider>
  );



}

export default App