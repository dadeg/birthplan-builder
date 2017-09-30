import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { stateToHTML } from 'draft-js-export-html';

export default class Plan extends Component {
  render() {
    const details = this.props.getPlanDetails();
    console.log(details.summary);
    
    const summaryHtml = details.summary ? stateToHTML(details.summary.getCurrentContent()) : null;

    return (
      <div>
        <Link to={'/'}>
          <button>Back to Builder</button>
        </Link>
        
        <p dangerouslySetInnerHTML={{ __html: summaryHtml }}></p>
        <div className="icons">
          {details.icons && details.icons.map((icon, i) => 
            <img key={'icon' + i} src={`/icons/${icon}`} />
          )}
        </div>  
      </div>
    );
  }
}