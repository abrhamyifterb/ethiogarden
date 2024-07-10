// import { createChatBotMessage } from 'react-chatbot-kit';
// import FaqOptions from './FaqOptions';
// import FaqAnswer from './FaqAnswer';

// const theme = {
//   background: '#f5f8fb',
//   fontFamily: 'Helvetica Neue',
//   headerBgColor: '#66b032',
//   headerFontColor: '#fff',
//   headerFontSize: '15px',
//   botBubbleColor: '#66b032',
//   botFontColor: '#fff',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };

// const config = {
//   initialMessages: [
//     createChatBotMessage('Welcome to EthioGardening! How can I assist you today?', {
//       widget: 'faqOptions',
//     }),
//   ],
//   widgets: [
//     {
//       widgetName: 'faqOptions',
//       widgetFunc: (props) => <FaqOptions {...props} />,
//     },
//     {
//       widgetName: 'faqAnswer',
//       widgetFunc: (props) => <FaqAnswer {...props} />,
//     },
//   ],
//   customStyles: {
//     botMessageBox: {
//       backgroundColor: theme.botBubbleColor,
//     },
//     chatButton: {
//       backgroundColor: theme.headerBgColor,
//     },
//   },
//   theme: theme,
// };

// export default config;




import { createChatBotMessage } from 'react-chatbot-kit';
import FaqOptions from './FaqOptions';
import { fetchFAQs } from '../services/api';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#66b032',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#66b032',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  
  const botAvatar = 'static/images/chatbot.png';
  const userAvatar = 'static/images/user.png';

  const config = async () => {
    const faqs = await fetchFAQs();
    return {
      initialMessages: [
        createChatBotMessage('Welcome to EthioGardening! ዛሬ እንዴት ልረዳህ እችላለሁ?', {
          widget: 'faqOptions',
          props: { faqs }
        }),
      ],
      widgets: [
        {
          widgetName: 'faqOptions',
          widgetFunc: (props) => <FaqOptions {...props} faqs={faqs} />,
        },
      ],
      customStyles: {
        botMessageBox: {
          backgroundColor: theme.botBubbleColor,
        },
        chatButton: {
          backgroundColor: theme.headerBgColor,
        },
        chatInput: { display: 'none' },
      },
      customComponents: {
        botAvatar: (props) => <img src={botAvatar} alt="Bot" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />,
        userAvatar: (props) => <img src={userAvatar} alt="User" style={{ borderRadius: '50%', width: '40px', height: '40px' }} />,
      },
      theme: theme,
      input: false,
    };
  };
  
  export default config;