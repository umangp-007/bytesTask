import React, { useState } from "react";
import Profile from "../Profile/Profile";
import ProfileImage from "../../assets/icons/profile.jpg";
import "./Post.css";
import MoreHorizontalIcon from "../../assets/icons/moreHorizontal.svg";
import Ellipse from "../../assets/icons/Ellipse.svg";
import Privacy from "../../assets/icons/Privacy.svg";
import Like from "../../assets/icons/like.svg";
import Thumb from "../../assets/icons/react.svg";
import Star from "../../assets/icons/star.svg";
import LikePost from "../../assets/icons/likepost.svg";
import Share from "../../assets/icons/share.svg";
import Comment from "../../assets/icons/comment.svg";
import { Card, CardBody } from "react-bootstrap";
import PostImage from "../PostImage/PostImage";
import PostVideo from "../PostVideo/PostVideo";
import PostAudio from "../PostAudio/PostAudio";
import { PostData } from "./initialValues";

const Post = () => {
  const initialOptions = [
    { id: 1, name: "Family BBQ at the park", votes: 9 },
    { id: 2, name: "Beach day with games and swimming", votes: 7 },
    { id: 3, name: "Movie night at home", votes: 9 },
    { id: 4, name: "Camping trip in the desert", votes: 4 },
  ];

  const [options, setOptions] = useState(initialOptions);

  const totalVotes = options.reduce((sum, option) => sum + option.votes, 0);

  const handleVoteChange = (id, change) => {
    setOptions(
      options.map((option) =>
        option.id === id
          ? { ...option, votes: Math.max(0, option.votes + change) }
          : option
      )
    );
  };

  return (
    <>
      {PostData.map(
        ({
          profileImage,
          userName,
          postDescription,
          postImage,
          postAudio,
          postVideo,
          poll,
          likeCount,
          commentCount,
          viewCount,
        }) => {
          return (
            <Card className="rounded-4 mb-4">
              <CardBody>
                <div>
                  {/* profile UI */}
                  <div className="profile-container">
                    <div className="profile-wrapper">
                      <Profile imageSrc={ProfileImage} />
                    </div>
                    <div className="name-wrapper flex-grow-1">
                      <div className="fw-bold">{userName}</div>

                      <div className="time-wrapper d-flex align-items-center gap-2">
                        <div className="time">1 hr ago</div>
                        <img src={Ellipse} alt="Ellipse" />
                        <img src={Privacy} alt="Privacy" />
                      </div>
                    </div>
                    <div className="menu-wrapper">
                      <img src={MoreHorizontalIcon} alt="MoreHorizontalIcon" />
                    </div>
                  </div>
                  {/* post descripion  */}
                  <div className="">
                    <p>
                    {postDescription}
                    </p>
                  </div>
                  {/* post image  */}
                {postImage &&  <div className="post-image">
                    <PostImage PostImage={postImage} />
                  </div>}
                  {/* Video tag */}
                 {postVideo &&  <PostVideo
                    VideoLink={postVideo}
                  />}
                  {/* Audio Tag */}
                 {postAudio && <div className="audio-tag">
                    <PostAudio
                      Audio={
                        postAudio
                      }
                    />
                  </div>}

                  {/*Poll*/}
                 {poll && <div>
                    <div className="poll-question">
                      What should our next family gathering activity be?
                    </div>
                    {options.map((option) => (
                      <div key={option.id} className="poll-option">
                        <div className="option-header">
                          <span className="option-text">{option.name}</span>
                          <div className="vote-controls">
                            <button
                              onClick={() => handleVoteChange(option.id, -1)}
                            >
                              -
                            </button>
                            <span>{option.votes}</span>
                            <button
                              onClick={() => handleVoteChange(option.id, +1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="progress-bar">
                          <div
                            className="progress"
                            style={{
                              width: `${(option.votes / totalVotes) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>}

                  {/* Post Footer  */}
                  <div className="d-flex justify-content-between">
                    <div className="likecount">
                      <div className="icons">
                        <img src={Like} alt="Like" />
                        <img src={Thumb} alt="Thumb" />
                        <img src={Star} alt="Star" />
                      </div>
                      <span className="count">{likeCount}</span>
                    </div>

                    <div className="d-flex justify-content-between align-items-center gap-1 commentviewcount">
                      <div>{commentCount} commnet</div>
                      <img src={Ellipse} alt="Ellipse" />
                      <div>{viewCount} views</div>
                    </div>
                  </div>
                  <div className="divider"></div>
                  <div className="d-flex justify-content-around align-items-center">
                    <div className="d-flex align-items-center">
                      <img src={LikePost} alt="Like" />
                      <div className="font-wieght-bold">Media</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={Comment} alt="Comment" />
                      <div className="font-wieght-bold">Poll</div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={Share} alt="Share" />
                      <div className="font-wieght-bold">Event</div>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          );
        }
      )}
    </>
  );
};

export default Post;
