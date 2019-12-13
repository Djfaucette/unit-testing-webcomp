import React from 'react';
// import '../node_modules/@patternfly/pfe-progress-indicator/dist/pfe-progress-indicator.js';
import './Loader.css';
import '../node_modules/@patternfly/pfe-progress-indicator/dist/pfe-progress-indicator.umd.js';

export default function Loader(){
  return (
    <div className="bullseye">
      <pfe-progress-indicator indeterminate size="md">
        <p>My custom loading message...</p>
      </pfe-progress-indicator>
    </div>
    
  )
}