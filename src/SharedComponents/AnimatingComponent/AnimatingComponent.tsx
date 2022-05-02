import React from 'react';
import Spinner from '../Spinner/Spinner';
import SVGIcon from '../SVGIcon/SVGIcon';
import './AnimatingComponent.scss';
import MusicIcon from '../../Assests/Icons/music.svg';
import {
  AnimatingCard,
  AnimatingIcon,
  isAnimatingIcon,
} from './AnimatingComponent.interface';

type AnimatingComponentProps = AnimatingIcon | AnimatingCard;
const AnimatingComponent: React.FC<AnimatingComponentProps> = (props) => {
  if (isAnimatingIcon(props)) {
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
  } else {
    return (
      <div className="animating-card-wrapper">
        <div className="content">
          <div className="icon">
            <SVGIcon>
              <MusicIcon />
            </SVGIcon>
          </div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    );
  }
};

export default AnimatingComponent;
