import { Row, Col } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const actuCards = ({ id, name, title, urlToImage, content, linkToContent }) => {
    return (

        <Col lg={10} className="oneCardCol">
            <div className="oneCardCol oneCardCol-oneCardRow">
                <figure>
                    <img src={urlToImage} alt="" />
                </figure>
                <div className="oneCardCol oneCardCol-oneCardRow oneCardCol-oneCardRow-content">
                    <h3>{title}</h3>
                    <Link to={`/${name}`}>
                        zobar
                    </Link>
                </div>
            </div>
        </Col>

    )
}

export default actuCards



