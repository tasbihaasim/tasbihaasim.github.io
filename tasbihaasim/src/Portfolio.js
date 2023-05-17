import React from 'react'
import './Portfolio.css';

function Portfolio() {
  return (
    <div>
    <h1>Tasbiha Asim</h1>
    <h2>Project Showcase</h2>
    <div class="social-icons">
      <a href="https://twitter.com/your_twitter_link"></a>
      <a href="https://linkedin.com/your_linkedin_link"></a>
    </div>
  
  <div class="projects">
    <div class="project">
      <h2 className='Title'>GroupTherapy+</h2>
      <p className='Desc'>GroupTherapy+ is a full-stack chat application for online group therapy. The backend server uses Go and handles multiple instances for high concurrency. It broadcasts messages and alerts users when someone joins the chat room.</p>
      <div className='cd'>
      <a className='Code' href="https://github.com/tasbihaasim/chat-project">Code</a>
      <a className='Depl' href="https://tasbihaasim.github.io/chat-project/">Deployment</a>
      </div>
    </div>
    <div class="project">
      <h2 className='Title'>SusAf Analysis</h2>
      <p className='Desc'>A Web App based on sustainability framework designed to assess the sustainability dimensions of business models. Frontend is developed using React.</p>
      <div className='cd'>
      <a className='Code' href="https://github.com/Moneexa/SuSAFHackathon">Code</a>
      <a className='Depl' href="https://moneexa.github.io/SusAFAnalysis/">Deployment</a>
      </div>
    </div>
    <div class="project">
      <h2 className='Title'>Knowledge-Driven WhatsApp Based Financial Consultant</h2>
      <p className='Desc'>Developed Expert System for financial inclusion of local women with Knowledge Engineering using a novel knowledge graph approach.</p>
      <div className='cd'>
      <a className='Code' href="https://github.com/Knowledge-Driven-Consultant/Knowledge-Driven-WhatsApp-Based-Consultant">Code</a>
      <a className='Depl' href="https://drive.google.com/file/d/1QcEVvPK50gkJGGc4h7VpMHBxWTwyBBO7/view">Deployment</a>
    </div>
    </div>
    <div class="project">
      <h2 className='Title'>Amazon Clone</h2>
      <p className='Desc'>This project was a speed coding exercise focused on developing an Amazon Clone using React. The goal was to quickly implement the essential features and functionalities of an e-commerce platform inspired by Amazon.</p>
      <div className='cd'>
      <a className='Code' href="https://github.com/tasbihaasim/amazon-clone">Code</a>
      </div>
    </div>
    <div class="project">
      <h2 className='Title'>Markov Decision Process</h2>
      <p className='Desc'>Implementation of Q-learning algorithm and application on a given policy.</p>
      <div className='cd'>
      <a className='Code' href="https://github.com/tasbihaasim/Markov-Decision-Process">Code</a>
      <a className='Depl' href="https://drive.google.com/drive/u/0/folders/1iYF4HKJPfVlDZ0V9wOo8ANoq2k-vxgZi">Documentation</a>
      </div>
    </div>
    <div class="project">
      <h2 className='Title'>Flood Management System using IOT</h2>
      <p className='Desc'>This project focused on the analysis of data collected through IoT devices deployed in the rivers of Pakistan. The project utilized MQTT and COAP brokers for implementation.</p>
      <div className='cd'>
      <a className='Code' href="https://github.com/tasbihaasim/Flood-Management-System-using-IOT">Code</a>
      <a className='Depl' href="https://drive.google.com/file/d/1fk-kulqE7BE-GnRULFggYR4mDRGSmgq3/view">Deployment</a>
      </div>
      
    </div>
    <div class="project">
      <h2 className='Title'>Adaptive Minimax</h2>
      <p className='Desc'>Experimented with different heuristics for the same algorithm. Devised two new implementations to achieve significant speed up over the existing minimax algorithm. Game of chess was used as a test bed. </p>
      <div className='cd'>
      <a className='Code' href="https://drive.google.com/drive/u/0/folders/1ZqGYK5LQay6su62aVAq8dtgPMpnrFnmm">Code</a>
      </div>
      
    </div>
    <div class="project">
      <h2 className='Title'>File Management System</h2>
      <p className='Desc'>File Management system including the functionalities of creating and deleting files, creating and deleting directories, and moving to directory developed in C language.</p>
      <div className='cd'>
      <a className='Code' href="https://github.com/tasbihaasim/File-Management-System">Code</a>
      </div>
      
    </div>

    </div>
    </div>
  );
}

export default Portfolio