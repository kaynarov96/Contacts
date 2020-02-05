import React from 'react'
import Contacts from '../Contact/Contact'

export default function ContactList() {
    const contacts = [
        { name: "Alex", online: true, ava: "https://i.pravatar.cc/150?img=14", tag: ["#friendly", "#cool", "#dude"], lastM: "I'm happy!g" },
        { name: "Marina", online: false, ava: "https://i.pravatar.cc/150?img=26" , tag: ["#beautiful", "#lucky", "#girlfriend"], lastM: "Wher are you?" },
        { name: "Adam", online: true, ava: "https://i.pravatar.cc/150?img=60", tag: ["#nigga", "#dude", "#brother"], lastM: "What do you say?" },
        { name: "Sabrina", online: false, ava: "https://i.pravatar.cc/150?img=36", tag: ["#friend", "#happy"], lastM: "What do you doing?" },
    ]
    return (
        <div>
            {contacts.map(o => <Contacts name={o.name} ava={o.ava} tag={o.tag} lastM={o.lastM} online={o.online} />)}
        </div>
    )
}
