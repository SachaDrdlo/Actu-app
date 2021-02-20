import { Col } from 'antd'
import React from 'react'

const actuCards = ({ title, urlToImage, url, style }) => {
    return (

        <Col lg={10} className="oneCardCol" style={style}>
            <div className="container">
                <div className="oneCardCol oneCardCol-oneCardRow">
                    <img src={urlToImage} alt="" />
                    <div className="oneCardCol oneCardCol-oneCardRow oneCardCol-oneCardRow-content">
                        <h3>{title}</h3>
                        <a href={url}>En savoir plus</a>
                    </div>
                </div>
            </div>
        </Col>

    )
}

export default actuCards



