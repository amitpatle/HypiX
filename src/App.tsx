import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'bot', content: "Hello! I'm HypiX, your coding journey assistant. How can I help you today?" },
  ]);

  const handleSendMessage = async (message: string) => {
    setMessages((prevMessages) => [...prevMessages, { role: 'user', content: message }]);
    
    const botResponse = getBotResponse(message);
    setMessages((prevMessages) => [...prevMessages, { role: 'bot', content: botResponse }]);
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm HypiX, developed by Amit Patle. How can I assist you with your coding journey today?";
    } else if (lowerMessage.includes('start coding')) {
      return "Great! To start coding, you should first choose a programming language. Popular choices for beginners include Python, JavaScript, or Java. Which one interests you the most?";
    } else if (lowerMessage.includes('python')) {
      return "Python is an excellent choice for beginners! It has a simple syntax and is widely used in various fields. To get started, you can install Python from python.org and try some basic tutorials online. Would you like to know about some good Python learning resources?";
    } else if (lowerMessage.includes('javascript')) {
      return "JavaScript is a versatile language used for web development. You can start by learning HTML and CSS basics, then move on to JavaScript. Try using online platforms like freeCodeCamp or Codecademy for interactive lessons. Do you want to know more about JavaScript frameworks?";
    } else if (lowerMessage.includes('java')) {
      return "Java is a popular language for building large-scale applications. To begin, download the Java Development Kit (JDK) and an Integrated Development Environment (IDE) like Eclipse or IntelliJ IDEA. Then, start with basic Java tutorials online. Are you interested in learning about Java's object-oriented programming concepts?";
    } else if (lowerMessage.includes('resources')) {
      return "There are many great resources for learning to code. Some popular ones include: freeCodeCamp, Codecademy, Coursera, edX, and YouTube tutorials. What specific area or programming language are you interested in learning more about?";
    } else if (lowerMessage.includes('amit') || lowerMessage.includes('developer')) {
      return "HypiX was developed by Amit Patle, a talented software developer passionate about helping others learn to code. Is there anything specific you'd like to know about Amit or the development of HypiX?";
    } else if (lowerMessage.includes('framework')) {
      return "Frameworks are pre-written code libraries that make development easier. For web development, popular frameworks include React, Angular, and Vue.js for frontend, and Express.js, Django, and Ruby on Rails for backend. Which area of development are you most interested in?";
    } else if (lowerMessage.includes('database')) {
      return "Databases are essential for storing and managing data in applications. Popular databases include MySQL, PostgreSQL, MongoDB, and SQLite. Are you interested in relational databases or NoSQL databases?";
    } else if (lowerMessage.includes('api')) {
      return "APIs (Application Programming Interfaces) allow different software applications to communicate with each other. RESTful APIs are commonly used in web development. Would you like to know more about how to use or create APIs?";
    } else if (lowerMessage.includes('git') || lowerMessage.includes('version control')) {
      return "Git is a popular version control system used by developers to manage code changes. GitHub, GitLab, and Bitbucket are platforms that host Git repositories. Would you like some resources to learn Git?";
    } else if (lowerMessage.includes('frontend') || lowerMessage.includes('front-end')) {
      return "Frontend development focuses on creating the user interface and user experience of a website or application. It involves HTML, CSS, and JavaScript. Popular frontend frameworks include React, Vue, and Angular. What aspect of frontend development interests you most?";
    } else if (lowerMessage.includes('backend') || lowerMessage.includes('back-end')) {
      return "Backend development deals with server-side logic, databases, and application APIs. Common backend languages include Python, Java, Node.js, and Ruby. Are you interested in learning about any specific backend technology?";
    } else if (lowerMessage.includes('mobile')) {
      return "Mobile app development can be done using native languages like Swift (iOS) and Kotlin (Android), or cross-platform frameworks like React Native or Flutter. Which platform are you more interested in developing for?";
    } else if (lowerMessage.includes('machine learning') || lowerMessage.includes('ai')) {
      return "Machine Learning and AI are exciting fields in computer science. Python is a popular language for ML/AI, with libraries like TensorFlow and PyTorch. Would you like to know how to get started with machine learning?";
    } else {
      return "I'm not sure I understand your question. Could you please rephrase it or ask about a specific programming topic? I can help with various programming languages, web development, databases, version control, and more.";
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ChatInterface messages={messages} onSendMessage={handleSendMessage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;