import React from 'react'
import './SearchResults.scss'
import FavouriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import StarIcon from '@material-ui/icons/Star'

const SearchResults = (props) => {
    const {data} = props
    
    return (
        <div className="searchResults">
            <img src={data.img} alt={data.img} />
            <FavouriteBorderIcon className="searchResults__heart"/>
            <div className="searchResults__info">
                <div className="searchResults__info-top">
                    <p>{data.location}</p>
                    <h3>{data.title}</h3>
                    <p>____</p>
                    <p>{data.description}</p>
                </div>
                <div className="searchResults__info-bottom">
                    <div className="searchResults__info-bottom-stars">
                        <StarIcon className="searchResults__info-bottom-stars-star"/>
                        <p>
                            <strong>{data.star}</strong>
                        </p>
                    </div>
                    <div className="searchResults__info-bottom-price">
                        <h2>{data.price}</h2>
                        <p>{data.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
