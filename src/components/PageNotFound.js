import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
    return (
        <main className="error-page">
            <h1>404 ERROR: No page has been found</h1>
            <Link to="/" className="back-home">Back to Home</Link>
        </main>
    )
}

export default PageNotFound
