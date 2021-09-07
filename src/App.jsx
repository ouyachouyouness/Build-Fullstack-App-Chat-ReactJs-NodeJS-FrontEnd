import React from 'react';
import { StreamChat } from 'stream-chat';

import { Chat } from 'stream-chat-react'

import Cookies from 'universal-cookie'

import './App.css'

import { ChannelListContainer, ChannelContainer } from './components'

const apiKey = 'eb9e3ptusyks'

const client = StreamChat.getInstance(apiKey)

export const App = () => {
  return (
    <div className="app_wrapper">

      <Chat client={client} theme="team light">
        <ChannelListContainer />

        <ChannelContainer />



      </Chat>

    </div>
  )
}


export default App