import { Row, Col } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const actuCards = ({ id, name, title, urlToImage, url }) => {
    return (

        <Col lg={10} className="oneCardCol">
            <div className="oneCardCol oneCardCol-oneCardRow">
                    <img src={urlToImage} alt="" />
                <div className="oneCardCol oneCardCol-oneCardRow oneCardCol-oneCardRow-content">
                    <h3>{title}</h3>
                    <a href={url}>En savoir plus</a>
                </div>
            </div>
        </Col>

    )
}

export default actuCards



