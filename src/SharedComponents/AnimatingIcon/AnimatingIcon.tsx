import React from 'react';
import Spinner from '../Spinner/Spinner';
import SVGIcon from '../SVGIcon/SVGIcon';
import './AnimatingIcon.scss';
import MusicIcon from '../../Assests/Icons/music.svg';

const AnimatingIcon: React.FC = () => {
  return (
    <div className="animating-wrapper">
      <Spinner />
      <div className="icon-wrapper">
        <div className="icon">
          <SVGIcon>
            <MusicIcon />
          </SVGIcon>
        </div>
      </div>
    </div>
  );
};

export default AnimatingIcon;
