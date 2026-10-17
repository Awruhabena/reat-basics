import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import  ChatMessages  from './components/ChatMessages';
import './App.css'


      function App(){

        const[chatMessages, setChatMessages] = useState ([
          {
            id : 'id1',
            message : 'Hello chatbot',
            sender : 'user'
          } ,
          {
            id : 'id2',
            message : 'Hello!. How can I help you',
            sender : 'robot'
          },
          {
            id : 'id3',
            message : "Can you get me today's date",
            sender : 'user'
          },
          {
            id : 'id4',
            message : 'Today is September 27',
            sender : 'robot'
          }
        
        
        ]);
        //const [chatMessages , setChatmessagesa] = array;
       // const chatMessages = array[0];
        //const setChatMessages = array [1];
      
        return(
          <div className = "app-container">
            
            <ChatMessages 
            chatMessages = {chatMessages} />
            <ChatInput 
              chatMessages={chatMessages} 
              setChatMessages={setChatMessages}>
            </ChatInput>
            
          </div>
        )
      }
export default App
