import React from 'react'
import ReactDOM from 'react-dom'
import { SipProvider } from 'react-sip';
import App from './App';

ReactDOM.render(
    <SipProvider
        host="http://209.182.219.239"
        port={8631}
        pathname="/ws" // Path in socket URI (e.g. wss://sip.example.com:7443/ws); "" by default
        user="1001"
        password="pppassword" // usually required (e.g. from ENV or props)
        autoRegister={true} // true by default, see jssip.UA option register
        autoAnswer={false} // automatically answer incoming calls; false by default
        iceRestart={false} // force ICE session to restart on every WebRTC call; false by default
        sessionTimersExpires={120} // value for Session-Expires header; 120 by default
        // extraHeaders={{ // optional sip headers to send
        //     register: ['X-Foo: foo', 'X-Bar: bar'],
        //     invite: ['X-Foo: foo2', 'X-Bar: bar2']
        // }}
        // iceServers={[ // optional
        //     { urls: ['stun:a.example.com', 'stun:b.example.com'] },
        //     { urls: 'turn:example.com', username: 'foo', credential: '1234' }
        // ]}
        debug={true} // whether to output events to console; false by default
    >
        <App />
    </SipProvider>,
  document.getElementById('root'),
);