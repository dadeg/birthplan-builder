import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DragSortableList from 'react-drag-sortable';
import RichTextEditor from '../repository/RichTextEditor';

const allIcons = [
  "style1/All_procedures_to_be_explained_before_carried_out_on_baby.jpg",
  "style1/Alt_pushing_position_desired.jpg",
  "style1/Bathing_baby_by_nurses_okay.jpg",
  "style1/Cesarean_delivery_preferred_over_vaginal.jpg",
  "style1/Circumcise_baby.jpg",
  "style1/Consultation_with_mom_required_before_meds_food.jpg",
  "style1/Cord_blood_being_banked_privately.jpg",
  "style1/Cord_blood_to_be_collected_for_donation.jpg",
  "style1/Delay_cord_clamping.jpg",
  "style1/Do_not_circumcise_baby.jpg",
  "style1/Do_not_manually_rupture_amniotic_sack.jpg",
  "style1/Epidural_desired.jpg",
  "style1/Episiotomy_desired_over_natural_tearing.jpg",
  "style1/Exam_and_bathe_baby_in_room_with_mother.jpg",
  "style1/Eye_ointment_is_okay_for_baby.jpg",
  "style1/Free_movement_walking_pacing_desired.jpg",
  "style1/Immediate_skin_to_skin_desired.jpg",
  "style1/Intermittent_baby_monitoring.jpg",
  "style1/Leave_the_lights_on.jpg",
  "style1/Mothers_blood_type_is_not_compatible_with_baby.jpg",
  "style1/Mother_desires_breastfeeding_only.jpg",
  "style1/Mother_desires_to_touch_the_crowning_head_of_baby.jpg",
  "style1/Mother_has_gestational_diabetes.jpg",
  "style1/Mother_has_group_B_strep.jpg",
  "style1/Mother_is_not_desirous_of_breastfeeding.jpg",
  "style1/Natural_tearing_desired_over_episiotomy.jpg",
  "style1/No_eye_ointment_to_be_given_to_baby.jpg",
  "style1/No_hep_B_vaccination_for_baby.jpg",
  "style1/No_mirror_wanted_during_delivery.jpg",
  "style1/No_pacifiers.jpg",
  "style1/No_pain_medication_desired.jpg",
  "style1/No_students_allowed_in_birthing_suite_for_teaching_facilities.jpg",
  "style1/No_vitamin_K_shot_for_baby.jpg",
  "style1/One_hour_delay_for_eye_ointment.jpg",
  "style1/One_hour_delay_for_medical_exams_so_immediate_bonding_can_occur.jpg",
  "style1/Pain_meds_to_be_given_only_if_requested.jpg",
  "style1/Parent_will_bathe_baby_instead_of_nurse.jpg",
  "style1/Parents_desire_meeting_with_on_duty_pediatrician.jpg",
  "style1/Partner_is_to_cut_the_umblicial_cord.jpg",
  "style1/Pitocin_only_if_necessary.jpg",
  "style1/Placenta_to_be_saved.jpg",
  "style1/Prefer_food_and_water_instead_of_IV_fluids.jpg",
  "style1/Provide_mirror_during_crowning.jpg",
  "style1/Saline_lock_preferred_over_traditional_IV.jpg",
  "style1/Silence_during_delivery.jpg",
  "style1/Students_allowed_in_birthing_suite_for_teaching_facilities.jpg",
  "style1/Turn_the_lights_down.jpg",
  "style1/Turn_the_lights_off.jpg",
  "style1/Vaginal_birth_after_cesarean.jpg",
  "style1/Vaginal_delivery_preferred_over_cesarean.jpg",
  "style1/Visitors_should_be_limited_to_only_those_necessary.jpg",
  "style1/Vitamin_K_shot_okay_for_baby.jpg",
  "style1/Water_birth_preferred.jpg",
  "style1/Wipe_down_baby_lightly_before_placing_on_mom.jpg",

  // another set
  "style2/8GlassesOfWater.png",
  "style2/AntiEmeticWantedCsection.png",
  "style2/Apgar Done On Chest.png",
  "style2/ArmsFreeCS.png",
  "style2/AskBeforeVisitors.png",
  "style2/AskMeFirst.png",
  "style2/BabyIsBreastfed.jpg",
  "style2/BabyIsBreastfed.png",
  "style2/Bank Cord Blood.jpg",
  "style2/BathWithParents.jpg",
  "style2/CircOK.jpg",
  "style2/CSBreastfeedINOR.png",
  "style2/daddy skin to skin if mommy unable.jpg",
  "style2/DaddyCatchBaby.png",
  "style2/DaddyCutCord.png",
  "style2/DelayBath.png",
  "style2/DelayedCordClamping.png",
  "style2/DelayedExams.png",
  "style2/DelayExams1Hour.png",
  "style2/DelayEyeOintment.png",
  "style2/DimLights.png",
  "style2/DoNotCutMe.png",
  "style2/DoNotStretchPerineum.jpg",
  "style2/Double Layer Sutures.png",
  "style2/EatFruitsAndVeggies.png",
  "style2/EatProtein.png",
  "style2/Enema Wanted.png",
  "style2/EpiduralWantedCSection.png",
  "style2/ExamsinRoom.png",
  "style2/ExplainAllProcedures.png",
  "style2/EyeOintmentOk.jpg",
  "style2/FamilyCenteredCesarean.png",
  "style2/FetoscopeOnly.jpg",
  "style2/FoodWaterOverIV.png",
  "style2/FreedomOfMovement.png",
  "style2/GBS.png",
  "style2/GD.png",
  "style2/HepBOk.jpg",
  "style2/HepLockOnly.png",
  "style2/ImmediateSkintoSkin.png",
  "style2/InformedConsentOrRefusal.png",
  "style2/IntermittentAuscultation.png",
  "style2/IntermittentMonitoring.png",
  "style2/Labor In Water.png",
  "style2/LimitedCervicalExams.png",
  "style2/LimitedVitalChecks.png",
  "style2/Lotus Birth.jpg",
  "style2/LowerScreen.png",
  "style2/MeetPedi.png",
  "style2/MinimalWipeDown.png",
  "style2/MirrorWanted.png",
  "style2/MommyCatchBaby.png",
  "style2/MommyCutCord.jpg",
  "style2/Music Wanted.png",
  "style2/NaturalFriendlyONly.jpg",
  "style2/NaturalRuptureOfWaters.png",
  "style2/No Enema.jpg",
  "style2/No Forceps.png",
  "style2/No IV.png",
  "style2/No Staples.png",
  "style2/No Suction.png",
  "style2/No Time Limits.png",
  "style2/No Urinary Catheter.jpg",
  "style2/NoAntibiotics.png",
  "style2/NoAugmentationOfLabor.png",
  "style2/NoBathPlease.png",
  "style2/NoBathPlease.png",
  "style2/NoCervicalExams.png",
  "style2/NoCircimcision.png",
  "style2/NoEpisiotomy.png",
  "style2/NoEyeOintment.jpg",
  "style2/NoHatOnBaby.png",
  "style2/NoHepB.png",
  "style2/NoPacifier.png",
  "style2/NoPitocin.png",
  "style2/NoSedativesCsection.png",
  "style2/NoStudentsPlease.png",
  "style2/NoTractionOnPlacenta.png",
  "style2/NoVitK.jpg",
  "style2/NoWarmer.png",
  "style2/NoWipeDown.png",
  "style2/PainMedsOnlyRequestOnly.png",
  "style2/Parents Bath Baby.jpg",
  "style2/PartnerCutCord.png",
  "style2/Perineal Massage.jpg",
  "style2/Picture1.png",
  "style2/Pitocin only as needed.jpg",
  "style2/PitOnlyIfNessecary.png",
  "style2/PlacentaToBeSaved.png",
  "style2/PushingPositionOfChoice.png",
  "style2/PushWithUrge.png",
  "style2/QuietPlease.png",
  "style2/Rest.png",
  "style2/RHIncompatibleWithBaby.png",
  "style2/RoomingIn.png",
  "style2/See Placenta.png",
  "style2/Shower.png",
  "style2/SlowPushing.png",
  "style2/Support Person Present.png",
  "style2/TelemetryONly.png",
  "style2/TelemetryPrefered.png",
  "style2/TouchCrowning.png",
  "style2/Use Essential Oils.png",
  "style2/VaginalBeechBirth.png",
  "style2/VaginalDeliveryPreferedBig.png",
  "style2/VBAC.1.png",
  "style2/Vegan.png",
  "style2/Vegetarian.png",
  "style2/VideoPhotoAllowed.png",
  "style2/VitKPlease.jpg",
  "style2/WaitForPlacentaToDeliverNaturally.png",
  "style2/Warm Compresses.png",
  "style2/WaterBirth.png",
  "style2/Wear Own Clothing.png"
];

export default class Home extends Component {
  setPartOfPlan(property) {
    return event => {
      console.log(`setting ${property}`, event.target.value);
      this.props.setPlanDetails(property, event.target.value);
    };
  }

  setSummary(value) {
    console.log('setting summary', value);
    this.props.setPlanDetails('summary', value);
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
    return icons.map((icon, i) => {
      return {
        content: (
          <div key={'selected' + i} data-icon={icon} className={icon}>
            <img className="drag" src={`/icons/${icon}`} />
            <span className="remove" data-icon={icon} onClick={this.removeFromList.bind(this)} > X </span>
          </div>)
      }
    });
  }

  render() {
    const planDetails = this.props.getPlanDetails();

    return (

      <div>
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}

          <h2>Your Visual Birthplan Builder</h2>
          <p style={{ "font-size": 12, "margin-bottom": 5 }}>Do you find this tool helpful? Please consider making a small contribution that goes towards improving this tool and keeping it free to use for others!
             </p><form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="T3MM6MMTVUYUY" />
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>

        </div>
        <h3>Step 1: Write your summary</h3>
        <RichTextEditor editorState={planDetails.summary} onChange={this.setSummary.bind(this)} />

        <h3>Step 2: Click on some icons from the left and then sort them on the right by dragging and dropping</h3>
        <div style={{ clear: 'both' }}>
          <Link to={'/plan'}>
            <button>Step 3: Click Here to Build Your Birth Plan</button>
          </Link>
        </div>
        <div className="icon-bank">
          <p>All Icons</p>
          {allIcons.map((icon, i) =>
            <img src={`/icons/${icon}`} key={'bank'+i} className={icon} data-icon={icon} onClick={this.addToList.bind(this)} />
          )}
        </div>
        <p className="selected">Selected Icons</p>
        <DragSortableList items={this.getSortableList(planDetails.icons)} onSort={this.sortList.bind(this)} type="grid" dropBackTransitionDuration={0.3} />

        <div style={{ clear: 'both' }}>
          <Link to={'/plan'}>
            <button>Step 3: Click Here to Build Your Birth Plan</button>
          </Link>
        </div>
        <p>Questions or comments? Please email <a href="mailto:dan.degreef+birthplan@gmail.com">dan.degreef+birthplan@gmail.com</a></p>
        <p><a target="_blank" href="http://imgur.com/a/PAFkn">Icons provided by Seanna Hartbauer (slidewithme)</a></p>
      </div>

    );
  }
}
