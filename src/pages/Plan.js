import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Plan extends Component {
  render() {
    const details = this.props.getPlanDetails();

    return (
      <div>
        <Link to={'/'}>
          <button>Back to Builder</button>
        </Link>
        
        <h2>Visual Birth Plan for {details.name}</h2>
        {details.partnerName && (<h4>Partner's Name: {details.partnerName}</h4>)}
        <p>{details.summary}</p>
        
      </div>
    );
  }
}