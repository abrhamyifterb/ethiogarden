import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-chatbot-kit';
import styled from 'styled-components';
import config from '../chatbot/config';
import MessageParser from '../chatbot/MessageParser';
import ActionProvider from '../chatbot/ActionProvider';
import '../styles/Chatbot.css';

const ChatContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
`;

const ChatButton = styled.button`
  background-color: #00a1f9;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  outline: none;
`;

const ChatWindow = styled.div`
  max-height: 500px; 
  overflow-y: auto;
`;

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [chatConfig, setChatConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      const configData = await config();
      setChatConfig(configData);
    };

    fetchConfig();
  }, []);

  if (!chatConfig) {
    return null; 
  }

  return (
    <ChatContainer>
      {open && (
        <ThemeProvider theme={chatConfig.theme}>
          <ChatWindow>
            <ChatBot config={chatConfig} messageParser={MessageParser} actionProvider={ActionProvider} />
          </ChatWindow>
        </ThemeProvider>
      )}
      <ChatButton onClick={() => setOpen(!open)}>
        {open ? '−' : '+'}
      </ChatButton>
    </ChatContainer>
  );
};

export default Chatbot;
