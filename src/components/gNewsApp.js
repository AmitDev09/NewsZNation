import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const url =
      'https://gnews.io/api/v4/top-headlines?country=in&lang=en&max=9&token=27b5f0d6cc8131325de012483f17482a';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      articles: data.articles,
      loading: false,
    });
  }

  render() {
    const { loading, articles } = this.state;

    if (loading) {
      return <h2>Loading...</h2>;
    }

    return (
      <div className='container mt-5'>
        <h2>News Z Nation - Top Headlines</h2>
        <div className='row'>
          {articles.map((article) => {
            return (
              <div className='col-md-4' key={article.url}>
                {article.image && (<NewsItem title={article.title ? article.title.slice(0, 40) + '...' : ''} description={article.description ? article.description.slice(0, 70) + '...' : ''} image={article.image} url={article.url} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
