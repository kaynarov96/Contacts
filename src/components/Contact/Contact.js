import React from 'react'

export default function Contact(props) {
    
    const good = props.online ? 'greenButton' : 'redButton';
    

    return (
        <div className="main">
          <div className="photo"><img src={props.ava} alt=""/>
          <div className={good}></div>
          </div>
          <div className="content">
              <p className="name">{props.name}</p>
              <p className="message">{props.lastMessage}</p>
              <p className="tag">{props.tag}</p>
          </div>
            
        </div>
    )
}
