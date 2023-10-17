import React from 'react'
import "../Styles/Header.scss"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">

      <div className="headerLeft">
        <Link to="/">

          <span className='active'>

            Movies
          </span>
        </Link>
        <Link to="/movie/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
        <Link to="/movie/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
        <Link to="/movie/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
      </div>
    </div>
  )
}

export default Header