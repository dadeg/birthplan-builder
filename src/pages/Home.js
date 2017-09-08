import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DragSortableList from 'react-drag-sortable'

const allIcons = [
  "All_procedures_to_be_explained_before_carried_out_on_baby.jpg",
  "Alt_pushing_position_desired.jpg",
  "Bathing_baby_by_nurses_okay.jpg",
  "Cesarean_delivery_preferred_over_vaginal.jpg",
  "Circumcise_baby.jpg",
  "Consultation_with_mom_required_before_meds_food.jpg",
  "Cord_blood_being_banked_privately.jpg",
  "Cord_blood_to_be_collected_for_donation.jpg",
  "Delay_cord_clamping.jpg",
  "Do_not_circumcise_baby.jpg",
  "Do_not_manually_rupture_amniotic_sack.jpg",
  "Epidural_desired.jpg",
  "Episiotomy_desired_over_natural_tearing.jpg",
  "Exam_and_bathe_baby_in_room_with_mother.jpg",
  "Eye_ointment_is_okay_for_baby.jpg",
  "Free_movement_walking_pacing_desired.jpg",
  "Immediate_skin_to_skin_desired.jpg",
  "Intermittent_baby_monitoring.jpg",
  "Leave_the_lights_on.jpg",
  "Mothers_blood_type_is_not_compatible_with_baby.jpg",
  "Mother_desires_breastfeeding_only.jpg",
  "Mother_desires_to_touch_the_crowning_head_of_baby.jpg",
  "Mother_has_gestational_diabetes.jpg",
  "Mother_has_group_B_strep.jpg",
  "Mother_is_not_desirous_of_breastfeeding.jpg",
  "Natural_tearing_desired_over_episiotomy.jpg",
  "No_eye_ointment_to_be_given_to_baby.jpg",
  "No_hep_B_vaccination_for_baby.jpg",
  "No_mirror_wanted_during_delivery.jpg",
  "No_pacifiers.jpg",
  "No_pain_medication_desired.jpg",
  "No_students_allowed_in_birthing_suite_for_teaching_facilities.jpg",
  "No_vitamin_K_shot_for_baby.jpg",
  "One_hour_delay_for_eye_ointment.jpg",
  "One_hour_delay_for_medical_exams_so_immediate_bonding_can_occur.jpg",
  "Pain_meds_to_be_given_only_if_requested.jpg",
  "Parent_will_bathe_baby_instead_of_nurse.jpg",
  "Parents_desire_meeting_with_on_duty_pediatrician.jpg",
  "Partner_is_to_cut_the_umblicial_cord.jpg",
  "Pitocin_only_if_necessary.jpg",
  "Placenta_to_be_saved.jpg",
  "Prefer_food_and_water_instead_of_IV_fluids.jpg",
  "Provide_mirror_during_crowning.jpg",
  "Saline_lock_preferred_over_traditional_IV.jpg",
  "Silence_during_delivery.jpg",
  "Students_allowed_in_birthing_suite_for_teaching_facilities.jpg",
  "Turn_the_lights_down.jpg",
  "Turn_the_lights_off.jpg",
  "Vaginal_birth_after_cesarean.jpg",
  "Vaginal_delivery_preferred_over_cesarean.jpg",
  "Visitors_should_be_limited_to_only_those_necessary.jpg",
  "Vitamin_K_shot_okay_for_baby.jpg",
  "Water_birth_preferred.jpg",
  "Wipe_down_baby_lightly_before_placing_on_mom.jpg"
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

  sortList(sortedList) {
    const strippedList = sortedList.map(sortableIcon => sortableIcon.content.props['data-icon']);
    console.log('new sort for icons, new list: ', strippedList);
    this.props.setPlanDetails('icons', strippedList);
  }

  getSortableList(icons) {
    if (!icons) {
      return [];
    } 
    return icons.map((icon, i) => { return { content: (<div key={ 'selected'+i } data-icon={icon} className = { icon }>{icon} <span className= "remove" data-icon={icon} onClick={ this.removeFromList.bind(this) } > remove</span></div>)}});
  }

  render() {
    const planDetails = this.props.getPlanDetails();

    return (
      
      <div>
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>Your Visual Birthplan Builder</h2>
        </div>
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
          <DragSortableList items={this.getSortableList(planDetails.icons)} onSort={this.sortList.bind(this)} type="vertical" />
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