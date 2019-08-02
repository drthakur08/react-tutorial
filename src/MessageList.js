import React, { Component } from 'react';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [
                {
                    senderId: "Dinesh",
                    text: "First react app"
                },
                {
                    senderId: "Thakur",
                    text: "Working fine with static data"
                },
                {
                    senderId: "Dinesh",
                    text: "Thanks!"
                }
            ]
        };
    }

	render() {
        function MyNotes() {
            return (
                <p>This function is same as "const MessageBody = () => {}" Shorthand of ES6 to create arrow function</p>
            );
        }
        
        const rows = this.state.characters.map((row, index) => {
            return (
                <li key={index}>
                    <div>{row.senderId}</div>
                    <div>{row.text}</div>
                </li>
            )
        });     

        return (
            <ul className="message-list">{rows}</ul>
        );
    }
}

export default MessageList;