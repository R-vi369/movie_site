import React from 'react'
import "../Styles/Header.scss"
import {Link} from "react-router-dom";
const Header = () => {
  return (
   <div className="header">

    <div className="headerLeft">
        <Link to="/"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" className='header__icon'/></Link>
        <Link to="/movie/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
        <Link to="/movie/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
        <Link to="/movie/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
    </div>
   </div>
  )
}

export default Header