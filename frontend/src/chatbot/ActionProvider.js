import { createChatBotMessage } from 'react-chatbot-kit';
import { fetchFAQs } from '../services/api';

// class ActionProvider {
//   constructor(createChatBotMessage, setStateFunc, createClientMessage) {
//     this.createChatBotMessage = createChatBotMessage;
//     this.setState = setStateFunc;
//     this.createClientMessage = createClientMessage;
//     this.faqs = [];
//     this.answeredFaqs = new Set();
//   }

//   handleFaq = async () => {
//     try {
//       const faqs = await fetchFAQs();
//       console.log(await fetchFAQs());
//       this.faqs = faqs; 
//       const messages = faqs.map((faq) =>
//         this.createChatBotMessage(faq.question, {
//           widget: 'faqAnswer',
//           payload: faq.id,
//         })
//       );

//       this.setState((prev) => ({
//         ...prev,
//         messages: [...prev.messages, ...messages],
//       }));
//     } catch (error) {
//       console.error('Error fetching FAQs:', error);
//     }
//   };

//   handleFaqAnswer = (faq) => {
//     if (faq.id) {
//       this.answeredFaqs.add(faq.id);
//       const message = this.createChatBotMessage(faq.answer);

//       this.setState((prev) => ({
//         ...prev,
//         messages: [...prev.messages, message],
//       }));
//     } else {
//       console.error(`FAQ with id ${faq.id} not found`);
//     }
//   };
// }

// export default ActionProvider;





class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.faqs = []; 
    }
  
    handleFaq = async () => {
      try {
        const faqs = await fetchFAQs();
        this.faqs = faqs;
        const messages = this.getFaqMessages(faqs);
  
        this.setState((prev) => ({
          ...prev,
          messages: [...prev.messages, ...messages],
          faqs: faqs, 
        }));
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };
  
    getFaqMessages(faqs) {
      return faqs.map((faq) =>
        this.createChatBotMessage(faq.question, {
          widget: 'faqOptions',
          payload: faq.id,
        })
      );
    }
  }
  
  export default ActionProvider;