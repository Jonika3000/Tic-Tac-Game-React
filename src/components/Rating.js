import React from 'react'
import "./Login.css"
export default function Masiv({ item, index }) {
    return (
        <div>
            <li>
                <p>Name: {item.login}</p>
                <p>Score: {item.score}</p>  
            </li>
        </div>
    )
}
