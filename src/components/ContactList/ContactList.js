import React from 'react'
import Contacts from '../Contact/Contact'

export default function ContactList() {
    const contacts = [
        { name: "Alex", online: true, ava: "https://i.pravatar.cc/150?img=14", tag: ["#friendly", "#cool", "#dude"], lastMessage: "I'm happy!g" },
        { name: "Marina", online: false, ava: "https://i.pravatar.cc/150?img=26" , tag: ["#beautiful", "#lucky", "#girlfriend"], lastMessage: "Wher are you?" },
        { name: "Adam", online: true, ava: "https://i.pravatar.cc/150?img=60", tag: ["#nigga", "#dude", "#brother"], lastMessage: "What do you say?" },
        { name: "Sabrina", online: false, ava: "https://i.pravatar.cc/150?img=36", tag: ["#friend", "#happy"], lastMessage: "What do you doing?" },
    ]
    var mapped = contacts.map(function(tag) {
        return tag;
    })
    return (
        <div>

            {contacts.map(o => <Contacts name={o.name} ava={o.ava} tag={o.tag} lastMessage={o.lastMessage} online={o.online} />)}
        </div>
    )
}
