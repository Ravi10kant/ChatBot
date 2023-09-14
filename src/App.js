import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import "./App.css";


const steps = [
  {
    id: "0",
    message: "Hello, Welcome To Our Website",
    trigger: "1",
  },
  {
    id: "1",
    message: "Please Enter Your Name",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hey {previousValue}, Please Select Your Issue",
    trigger: "4",
  },
  {
    id: "4",
    options: [
      { value: "NodeJS", label: "NodeJS", trigger: "NodeJS" },
      { value: "MongoDB", label: "MongoDB", trigger: "MongoDB" },
      { value: "React", label: "React", trigger: "React" },
      { value: "ExpressJS", label: "ExpressJS", trigger: "ExpressJS" },
    ],
  },
  {
    id: "React",
    message: "Thanks For Telling Your React Issue",
    end: true,
  },
  {
    id: "NodeJS",
    message: "Thanks For Telling Your NodeJS Issue",
    end: true,
  },
  {
    id: "MongoDB",
    message: "Thanks For Telling Your MongoDB Issue",
    end: true,
  },
  {
    id: "ExpressJS",
    message: "Thanks For Telling Your ExpressJS Issue",
    end: true,
  },
];

const theme = {
  background: '#c4e2eb',
  headerBgColor: '#1c8cad',
  headerFontSize: '20px',
  botBubbleColor: '#0F3789',
  headerFontColor: 'white',
  botFontColor: 'white',
  userBubbleColor: '#FF5733',
  userFontColor: 'white',
};

const config = {
  floating: true,
};
 
function App() {

  return (
    <>
      <div className="seg">
        <ThemeProvider theme={theme}>
                <ChatBot headerTitle="DATASYNC BOT" steps={steps} {...config} />
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
