import React from 'react'

import notFound from '../../images/error-404.jpg'

export default function NotFound() {
    return (
        <div>
            <img src={notFound} alt="Página no existe"/>
        </div>
    )
}
