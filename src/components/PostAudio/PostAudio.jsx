import React from "react";

const PostAudio = ({Audio}) => {
  return (
    <audio controls>
      <source
        src={Audio}
        type="audio/mpeg"
      />
    </audio>
  );
};

export default PostAudio;
