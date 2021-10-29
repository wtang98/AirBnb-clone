import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import {Avatar} from "@material-ui/core";

const header = () => {
    return (
        <div className="header">
            <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" />
            <div className="header__center">
                <input type="text" />
                <SearchIcon/>
            </div>
            <div className="header__right">
                <p>Become a Host</p>
                <Avatar/>
                <LanguageIcon/>
                <ExpandMoreIcon/>
            </div>
        </div>
    )
}

export default header;