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
        <h1> Social Media Opinion Mining Based on Bangla Public Post of Facebook </h1>
        <div className="header-line"></div>
      </header>
      <main className="app-content">
        <div className="description-container">
            <p> ● Sentiment analysis using traditional machine learning techniques (TF-IDF vectors, crossvalidation, uni-bi-trigram, logistic regression, etc.) on Bangla Facebook Post.
                ● Created a database that contains more than eleven thousand Bangla comments.
                ● Challenges: Scraping comments from Facebook posts and filtering out the data using python
                ● Skills Learned: Traditional ML algorithms, python, LaTeX
             </p>
        </div>
      </main>
    </div>
  );
};

export default App;
