import { Component, useEffect, useState } from 'react';
import './sass/main.scss';
import ActuCards from "./components/ActuCards";
import Header from './components/Header'
import { Row } from 'antd';

const App = () => {

  const [actu, setActu] = useState([])
  const [loading, setLoading] = useState(true)

  const getActus = async () => {
    const data = await fetch("http://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=f385833c95e6484bb01010d951876510")
      .then(response => response.json())

    setActu(data)
    setLoading(false)
  }

  useEffect(() => {
    getActus()
  })

  // Slice le tableau et mettre le premier atricle en highlight

  let listActu
    
    if (loading) {
      return <p>Chargement en cours...</p>
    }
  
    listActu = actu.articles.map((actu) => {
      console.log(actu.author);
      return (
        <ActuCards
          key={actu.publishedAt}
          title={actu.title}
          urlToImage={actu.urlToImage}
          content={actu.content}
          url={actu.url}
        />
      )
    })

    return (
      <div className="App">
        <Header />
        <Row className="cardsRow">
          {listActu}
        </Row>

      </div>
    );



}

export default App