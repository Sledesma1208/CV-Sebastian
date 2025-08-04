import React from 'react';
import './Profile-image.css';

type ProfileImageProps = {
  src: string;
  alt?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt = 'Profile' }) => {
  return <img className="profile-image" src={src} alt={alt} />;
};

export default ProfileImage;