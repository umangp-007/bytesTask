import React from "react";
import Profile from "../Profile/Profile";
import ProfileImage from "../../assets/icons/profile.jpg";
import Media from '../../assets/icons/media.svg'
import Poll from '../../assets/icons/poll.svg'
import Event from '../../assets/icons/event.svg'
import './CreatePost.css'
import { Card, CardBody } from "react-bootstrap";

const CreatePost = () => {
  return (
    <>
    <Card className="rounded-4 mb-4">
      <CardBody>
      <div className="d-flex gap-3">
        <div>
          <Profile
            imageSrc={ProfileImage}
          />
        </div>
        <div className="flex-grow-1">
             <input placeholder="What's new with your family?" type="text" className="w-100 form-control postinput"/>
             
             <div className="d-flex justify-content-between pt-4">
                <div className="d-flex align-items-center">
                    <img src={Media} alt="#"/>
                    <div className="font-wieght-bold">Media</div>
                </div>
                <div className="d-flex align-items-center">
                    <img src={Poll} alt="#"/>
                    <div className="font-wieght-bold">Poll</div>
                </div>
                <div className="d-flex align-items-center">
                    <img src={Event} alt="#"/>
                    <div className="font-wieght-bold">Event</div>
                </div>
             </div>
        </div>
      </div>
      </CardBody>
      </Card>
    </>
  );
};

export default CreatePost;
