import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, url, date, author, source } = this.props
    return (
      <div>
        <div className="card my-3">
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%'}}> {source}</span>
          <img src={!imageUrl ? "https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" : imageUrl}
            className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0, 40) + "..." : ''}</h5>
            <p className="card-text">{description ? description.slice(0, 70) + "..." : ''}</p>
            <p className='card-text'><small className='text-muted'>By : {author ? author : "Unknown"},
              on {new Date(date).toGMTString().slice(0, 16)}</small></p>
            <a href={url} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}
