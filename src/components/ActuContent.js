import React, { useEffect, useState } from 'react'

const ActuContent = () => {

    const [content, setContent] = useState([])

    const getContent = async () => {
        const data = await fetch(`http://newsapi.org/v2/top-headlines?country=fr&apiKey=f385833c95e6484bb01010d951876510`)
            .then(response => response.json())

        setContent(data)
    }

    useEffect(() => {
        getContent()
    })

    return (
        <div>

        </div>
    )
}

export default ActuContent
