import React from 'react'

const HighlitedCard = (urlToImage, title, url) => {
    return (
        <div className="highlightedCard">
            <img src={urlToImage} alt=""/>
            <div className="highlighted highlighted-title">
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default HighlitedCard
