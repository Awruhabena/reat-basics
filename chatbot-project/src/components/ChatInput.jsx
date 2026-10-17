import { useState } from 'react'
import {Chatbot} from 'supersimpledev'
import'./ChatInput.css';

export function ChatInput({chatMessages , setChatMessages}){
        const [inputText , setInputText] = useState('');

        function saveInputText(event){
          setInputText(event.target.value);
        }

        function sendMessage(){
          const newChatMessages = [
            ...chatMessages,
            {
              id :crypto.randomUUID(),
              message:inputText,
              sender : 'user'

            }
          ];
          setChatMessages(newChatMessages);

          const reponse = Chatbot.getResponse(inputText);
          setChatMessages([
            ...newChatMessages,
            {
              id :crypto.randomUUID(),
              message:reponse,
              sender : 'robot'

            }
          ]);

          setInputText('');

        }

        return(
  
          <div className = "chat-input-container">
            <input 
              placeholder = "Send a message to chatbot" 
              size = "30"
              onChange ={saveInputText}
              value = {inputText}
              className = "search-box"
            />

            <button onClick={sendMessage} className = "send-button">Send</button>
          </div>
        );
      }