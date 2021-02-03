import { Component } from 'react';
import './sass/main.scss';
import ActuCards from "./components/ActuCards";
import Header from './components/Header'
import { Row } from 'antd';

export default class App extends Component {

  state = {
    actus: [],
    loading: true
  }

  async getActu() {
    const data = await fetch("http://newsapi.org/v2/top-headlines?sources=google-news-fr&apiKey=f385833c95e6484bb01010d951876510")
      .then(response => response.json())

    this.setState({
      actus: data,
      loading: false
    })
  }

  componentDidMount() {
    this.getActu()
  }


  render() {
    let listActu
    if (this.state.loading) {
      return <p>Chargement en cours...</p>
    }
    listActu = this.state.actus.articles.map((actu) => {
      console.log(actu.author);
      return (
        <ActuCards
          key={actu.publishedAt}
          title={actu.title}
          urlToImage={actu.urlToImage}
          content={actu.content}
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
}
