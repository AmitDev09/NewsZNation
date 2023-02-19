import React from 'react'
import {
  Link
} from "react-router-dom";
// import PropTypes from 'prop-types'

function navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News Z Nation</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/business">Business</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/general">General</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/health">Health</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/science">Science</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link> </li>
              <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/in">India</Link></li>
                  <li><Link className="dropdown-item" to="/nz">New Zealand</Link></li>
                  <li><Link className="dropdown-item" to="/us">USA</Link></li>
                  <li><Link className="dropdown-item" to="/uk">United Kindgod</Link></li>
                  <li><Link className="dropdown-item" to="/bg">Bangladesh</Link></li>
                  <li><Link className="dropdown-item" to="/pk">Pakistan</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

navbar.propTypes = {

}

export default navbar

