import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const allIcons = [
  "noYelling",
  "yesYelling",
  "noDrugs",
  "yesDrugs"
];

export default class Home extends Component {
  setPartOfPlan(property) {
    return event => {
      console.log(`setting ${property}`, event.target.value);
      this.props.setPlanDetails(property, event.target.value);
    };
  }

  addToList(event) {
    const icons = this.props.getPlanDetails().icons || [];
    const newIcons = [...icons, event.target.getAttribute('data-icon')];
    const uniqueIcons = newIcons.filter((icon, i) => newIcons.indexOf(icon) === i);
    console.log('setting new icons ', uniqueIcons);
    this.props.setPlanDetails('icons', uniqueIcons);
  }

  removeFromList(event) {
    const icons = this.props.getPlanDetails().icons || [];
    const newIcons = icons.filter(icon => icon !== event.target.getAttribute('data-icon'));
    console.log('removing icon, new list: ', newIcons);
    this.props.setPlanDetails('icons', newIcons);
  }

  render() {
    const planDetails = this.props.getPlanDetails();

    return (
      <div>
        <label>Your Name: <input value={planDetails.name} onChange={this.setPartOfPlan('name')}/></label>
        <label>Your Partner's Name: <input value={planDetails.partnerName} onChange={this.setPartOfPlan('partnerName')}/></label>
        <label>Summary and other information: <textarea value={planDetails.summary} onChange={this.setPartOfPlan('summary')} /></label>
        <p>Click on some icons from the left and then sort them on the right by dragging'n dropping</p>
        <div className="icon-bank">
          {allIcons.map((icon, i) =>
            <div key={'bank'+i} className={icon} data-icon={icon} onClick={this.addToList.bind(this)}>{icon}</div>
          )}
        </div>
        <div className="selected-icons">
          {planDetails.icons && planDetails.icons.map((icon, i) =>
            <div key={'selected'+i} data-icon={icon} className={icon}>{icon} <span className="remove" data-icon={icon} onClick={this.removeFromList.bind(this)}>remove</span></div> 
          )}
        </div>
        <div style={{ clear: 'both' }}>
        <Link to={'/plan'}>
          <button>Build</button>
          </Link>
        </div>  
      </div>  
    );
  }
}