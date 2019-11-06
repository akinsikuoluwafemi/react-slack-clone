import React from 'react';

class SendMessageForm extends React.Component {
    render() {
        return (
            <div>
                <form className="send-message-form">
                    <input
                        placeholder='sendMessageForm'
                        type="text"/>
                </form>
            </div>
        ) 
    }
}

export default SendMessageForm;