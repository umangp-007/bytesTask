import React, { useState } from "react";
import "./RightSideMenu.css";
import { Card, CardBody } from "react-bootstrap";
import Profile from "../Profile/Profile";
import ProfileImage from "../../assets/icons/profile.jpg";
import ProfileImage1 from "../../assets/icons/ProfileImage1.svg";
import ProfileImage2 from "../../assets/icons/ProfileImage2.svg";


const RightSideMenu = () => {
  const initialApprovals = [
    {
      id: 1,
      name: "Sultan Al Falasi",
      time: "1 hr ago",
      imageSrc: ProfileImage,
      isAccepted: false,
      isRejected: false,
    },
    {
      id: 2,
      name: "Majid Ibrahim Marzouqi’s",
      time: "2 hrs ago",
      imageSrc: ProfileImage1,
      isAccepted: false,
      isRejected: false,
    },
    {
      id: 3,
      name: "Ahmed Al Falasi ",
      time: "2 hrs ago",
      imageSrc: ProfileImage2,
      isAccepted: false,
      isRejected: false,
    },
    {
      id: 4,
      name: "John Doe",
      time: "2 hrs ago",
      imageSrc: ProfileImage,
      isAccepted: false,
      isRejected: false,
    },
  ];

  const [approvals, setApprovals] = useState(initialApprovals);

  const handleAccept = (id) => {
    setApprovals(
      approvals.map((approval) =>
        approval.id === id
          ? { ...approval, isAccepted: true, isRejected: false } // Accept the post
          : approval
      )
    );
  };

  const handleReject = (id) => {
    setApprovals(
      approvals.map((approval) =>
        approval.id === id
          ? { ...approval, isAccepted: false, isRejected: true } // Reject the post
          : approval
      )
    );
  };

  return (
    <>
      <Card className="rounded-4 mb-4">
        <CardBody>
          <div className="card-title-container">
            <div className="card-title">Approvals</div>
            <div className="view-all">View All</div>
          </div>

          {/* <div className="approvals-container">
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
            </div> */}
          <div className="approvals-container">
            {approvals.map((approval) => (
              <div className="approval-item" key={approval.id}>
                <Profile imageSrc={approval.imageSrc} height={32} width={32} />
                <div className="approval-detail">
                  <span className="name">{approval.name}</span> tagged you in a
                  post.
                  <br />
                  <span>{approval.time}</span>
                </div>
                <div className="btn-action-container">
                  <div
                    className={`action-btn reject ${
                      approval.isRejected ? "active" : ""
                    }`}
                    onClick={() => handleReject(approval.id)}
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L1 9M1 1L9 9"
                        stroke="#6E6E73"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className={`action-btn accept ${
                      approval.isAccepted ? "active" : ""
                    }`}
                    onClick={() => handleAccept(approval.id)}
                  >
                    <svg
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6.35714L3.5 8.85714L11 1"
                        stroke="#6E6E73"
                        strokeWidth="1.33333"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
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
                  Friday, Sep 27, 2024 . 08:00pm - 10:00pm
                  <br />
                  Al Nahda Park, Dubai, UAE
                </div>
                <div className="event-organizer">
                  <Profile imageSrc={ProfileImage} height={24} width={24} />
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
                  Friday, Sep 27, 2024 . 08:00pm - 10:00pm
                  <br />
                  Al Nahda Park, Dubai, UAE
                </div>
                <div className="event-organizer">
                  <Profile imageSrc={ProfileImage} height={24} width={24} />
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
                  Friday, Sep 27, 2024 . 08:00pm - 10:00pm
                  <br />
                  Al Nahda Park, Dubai, UAE
                </div>
                <div className="event-organizer">
                  <Profile imageSrc={ProfileImage} height={24} width={24} />
                  <div className="name">Omar Al Mansoori</div>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default RightSideMenu;
