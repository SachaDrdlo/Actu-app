import { useEffect, useState } from 'react';
import './sass/main.scss';
import ActuCards from "./components/ActuCards";
import Header from './components/Header'
import { Row, } from 'antd';
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
    // const data = await fetch("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=9IUJnGbqkaoX6gmjDBAloBMnGPP1HAgB")
    const data = await fetch("https://newsapi.org/v2/top-headlines?country=fr&apiKey=f385833c95e6484bb01010d951876510")
      .then(response => response.json())

    setActu(data)
    setLoading(false)
  }

  useEffect(() => {
    getActus()
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme);
  }, [])


  let listActu

  if (loading) {
    return <p>Chargement en cours...</p>
  }


  // listActu = actu.results.map((actu) => {
  listActu = actu.articles.map((actu) => {
    return (
      <ActuCards
        style={{ display: actu.urlToImage == null ? 'none' : 'block' }}
        key={actu.publishedAt}
        title={actu.title}
        // urlToImage={actu.media.url}
        urlToImage={actu.urlToImage}
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

          <div className="container">
            <div className="options">
              <label className="switch" onChange={() => toggleTheme()}>
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            </div>

          </div>
          <Row className="cardsRow">
            {listActu}
          </Row>
        </div>
      </>
    </ThemeProvider>
  );



}

export default App