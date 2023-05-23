import React from 'react';

import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css'

import './styles.scss';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <h1> DocTalk: Online Platform of Consultation  </h1>
        <div className="header-line"></div>
      </header>
      <main className="app-content">
        <div className="description-container">
            <p> An android-based application to connect patients and doctors
              ● Build an automatic image-to-text scanner for automatic prescription scanning
              ● Connected a real-time-database using Google Firebase, Made UI-Splash screen
              ● Challenges: API integration for image-to-text functionality, connecting real-time database systems.
              ● Skill learned: Android, Java, Google Vision API, Firebase Database, Android Studio.
             </p>
        </div>
      </main>
    </div>
  );
};

export default App;
