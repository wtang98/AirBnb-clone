import { Button } from '@material-ui/core'
import Search from '../search/Search'
import React, {useState} from 'react'
import './Banner.scss'
import { useHistory } from 'react-router'

const Banner = () => {
    const history = useHistory();

    const [showSearch, setShowSearch] = useState(false);

    const searchDateButton = () => {
        setShowSearch(!showSearch);
    }


    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
                <Button onClick={searchDateButton} className="banner__search-button" varient="outlined">
                    {showSearch ? "Hide":"Search Dates"}
                </Button>
            </div>
            <div className="banner__info">
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a difference kind of getaway to uncover the hidden gems near you.</h5>
                <Button onClick={()=>history.push('/Airbnb-Clone/search')} varient="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
