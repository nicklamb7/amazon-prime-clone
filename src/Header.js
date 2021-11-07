import React from 'react';
import './Header.css';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://amazonuk.gcs-web.com/system/files-encrypted/nasdaq_kms/inline-images/Prime_Video_Logo.png" alt="Prime Video" />
            </div>
            <div className="header__middle">
                <button>
                    Home
                </button>
                <button>
                    Free to me
                </button>
                <button>
                    Store
                </button>
                <button>
                    Channels
                </button>
                <button>
                    Categories
                    <ExpandMoreIcon />
                </button>
                <button>
                    My Stuff
                </button>
                <button>
                    Sports
                </button>
            </div>
            <div className="header__right">
                <div className="header__accountButton">
                    <AccountCircleIcon />
                </div>
                <div>
                    <SettingsOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Header
