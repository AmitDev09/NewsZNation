import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


export default class news extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: '9',
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  // code with harry api - dbe57b028aeb41e285a226a94865f7a7
  // another api key d68cc12a39c447039594dce42cadc417
  // another api key b38e63534810440f85e14121831b6ce9
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false
    })

  }

  render() {
    const { page, totalResults } = this.state;
    const pages = Math.ceil(totalResults / this.props.pageSize);
    return (
      <div className='container mt-5'>
        <h2 className="text-center mb-3" style={{ textTransform: 'uppercase' }}>News Z Nation - {this.props.category} News</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
        </div><div className="container d-flex justify-content-between my-3">
          <button className="btn btn-dark" disabled={page <= 1} onClick={this.handlePrevClick}> &larr; Previous</button>
          <button className="btn btn-dark" disabled={page + 1 > pages} onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}
