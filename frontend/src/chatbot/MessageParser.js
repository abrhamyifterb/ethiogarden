class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes('faq')) {
        this.actionProvider.handleFaq();
      }
    }
  }
  
  export default MessageParser;
  