import React from 'react'
import "./RightSideMenu.css"
import {Card, CardBody} from "react-bootstrap";
import Profile from "../Profile/Profile";
import ProfileImage from "../../assets/icons/profile.jpg";
import Accept from "../../assets/icons/accept.svg";
import Reject from "../../assets/icons/reject.svg";

const RightSideMenu = () => {
  return (
      <>
      <Card className="rounded-4 mb-4">
        <CardBody>
            <div className="card-title-container">
                <div className="card-title">Approvals</div>
                <div className="view-all">View All</div>
            </div>

            <div className="approvals-container">
                <div className="approval-item">
                    <Profile imageSrc={ProfileImage} height={32} width={32}/>
                    <div className="approval-detail">
                        <span className="name">Sultan Al Falasi</span> tagged you in a post. <br/>
                        <span>1 hr ago</span>
                    </div>
                    <div className="btn-action-container">
                        <div className="action-btn reject active">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 1L1 9M1 1L9 9" stroke="#6E6E73" stroke-width="1.33333"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="action-btn accept">
                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 6.35714L3.5 8.85714L11 1" stroke="#6E6E73" stroke-width="1.33333"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </CardBody>
      </Card>

          <Card className="rounded-4 mb-4">
              <CardBody>
                  <div className="card-title-container">
                  <div className="card-title">Upcoming Events</div>
                    <div className="view-all">View All</div>
                </div>

                <div className="upcoming-events-container">
                    <div className="upcoming-event-item">
                        <div className="date-item">
                            <div>Sep</div>
                            <div className="date">27</div>
                        </div>
                        <div className="event-detail">
                            <div className="event-name">Family Dinner & Gathering</div>
                            <div className="event-time">
                                Friday, Sep 27, 2024 . 08:00pm - 10:00pm<br/>
                                Al Nahda Park, Dubai, UAE
                            </div>
                            <div className="event-organizer">
                                <Profile imageSrc={ProfileImage} height={24} width={24}/>
                                <div className="name">Omar Al Mansoori</div>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-event-item">
                        <div className="date-item">
                            <div>Sep</div>
                            <div className="date">27</div>
                        </div>
                        <div className="event-detail">
                            <div className="event-name">Family Dinner & Gathering</div>
                            <div className="event-time">
                                Friday, Sep 27, 2024 . 08:00pm - 10:00pm<br/>
                                Al Nahda Park, Dubai, UAE
                            </div>
                            <div className="event-organizer">
                                <Profile imageSrc={ProfileImage} height={24} width={24}/>
                                <div className="name">Omar Al Mansoori</div>
                            </div>
                        </div>
                    </div>
                    <div className="upcoming-event-item">
                        <div className="date-item">
                            <div>Sep</div>
                            <div className="date">27</div>
                        </div>
                        <div className="event-detail">
                            <div className="event-name">Family Dinner & Gathering</div>
                            <div className="event-time">
                                Friday, Sep 27, 2024 . 08:00pm - 10:00pm<br/>
                                Al Nahda Park, Dubai, UAE
                            </div>
                            <div className="event-organizer">
                                <Profile imageSrc={ProfileImage} height={24} width={24}/>
                                <div className="name">Omar Al Mansoori</div>
                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
      </>
  )
}

export default RightSideMenu
