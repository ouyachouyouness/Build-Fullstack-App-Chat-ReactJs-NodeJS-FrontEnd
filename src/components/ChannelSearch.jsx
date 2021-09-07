import { query } from 'express'
import React, { useState, useEffect} from 'react'
import { useChatContext } from 'stream-chat-react'

import { Search, SearchIcon} from '../assets'
export const ChannelSearch = () => {

    const [query, setQuery] = useState('');
    return (

        <div className="channel-search__container">
            <div className="channel-search__input_wrapper">
                <div className="channel-search__input__icon">
                    <SearchIcon />
                </div>

                <div className="channel-search__input__text" 
                    placeholder="Search"
                    type="text"
                    value={query}
                    onChange={onSearch}
                    
                ></div>
            </div>
        </div>
    )
}
