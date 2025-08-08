import React from 'react';
import './Profile-image.css';

type ProfileImageProps = {
  src: string;
  alt?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt = 'Profile' }) => {
  return (
    <div className="polaroid">
      <img className="polaroid-image" src={src} alt={alt} />
      <br />
    </div>
  );
};

export default ProfileImage;
