import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="allContent">
            <div className="container">
                <div className="header">
                    <h1>Daily News</h1>
                    <div className="header header-btn">
                        <Link to="/">Accueil</Link>
                        <Link to="/Infos">Infos</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
