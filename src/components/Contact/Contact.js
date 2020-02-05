import React from 'react'

export default function Contact(props) {
    let status="";
    if (props.online===true) {
        status="greenBtn";
    }else{
        status="redBtn";
    }
    

    return (
        <div className="main">
          <div className="photo"><img src={props.ava} alt=""/>
          <div className={status}></div>
          </div>
          <div className="content">
              <p className="name">{props.name}</p>
              <p className="message">{props.lastM}</p>
              <p className="tag">{props.tag}</p>
          </div>
            
        </div>
    )
}
