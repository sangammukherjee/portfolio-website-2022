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
        <h1> Real-time traffic monitoring and traffic offense detection using YOLOv4 and OpenCV DNN </h1>
        <div className="header-line"></div>
      </header>
      <main className="app-content">
        <div className="description-container">
            <p> ● A computer-vision-based system for traffic offense detection.
                ● We used modern computer vision techniques.
                ● Challenges: Implementation of one model that detects, classifies, tracks, and assigns traffic   violations in real time.
                ● Skills learned: Darknet, Deep SORT algorithm, YOLOv4 CNN, OpenCV DNN, etc.
             </p>
        </div>
      </main>
    </div>
  );
};

export default App;
