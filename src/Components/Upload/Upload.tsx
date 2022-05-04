import React from 'react';
import AnimatingIcon from '../../SharedComponents/AnimatingComponent/AnimatingComponent';
import Container from '../../SharedComponents/Container/Container';
import DragNDrop from '../DragNDrop/DragNDrop';
import { UploadProps } from './Upload.interface';
import './Upload.scss';

const Upload: React.FC<UploadProps> = (props) => {
  const iconOneRef = React.useRef<HTMLDivElement>(null);
  const iconTwoRef = React.useRef<HTMLDivElement>(null);
  const iconThreeRef = React.useRef<HTMLDivElement>(null);
  const iconFourRef = React.useRef<HTMLDivElement>(null);

  const filesDropped = (isDropped: boolean) => {
    if (isDropped) {
      if (iconOneRef.current) {
        iconOneRef.current.classList.add('hide-animating-one');
      }
      if (iconTwoRef.current) {
        iconTwoRef.current.classList.add('hide-animating-two');
      }
      if (iconThreeRef.current) {
        iconThreeRef.current.classList.add('hide-animating-three');
      }
      if (iconFourRef.current) {
        iconFourRef.current.classList.add('hide-animating-four');
      }
    } else {
      if (iconOneRef.current) {
        iconOneRef.current.classList.remove('hide-animating');
      }
      if (iconTwoRef.current) {
        iconTwoRef.current.classList.remove('hide-animating');
      }
      if (iconThreeRef.current) {
        iconThreeRef.current.classList.remove('hide-animating');
      }
      if (iconFourRef.current) {
        iconFourRef.current.classList.remove('hide-animating');
      }
    }
  };
  return (
    <Container>
      <div className="upload-wrapper">
        <div className="heading">Secure Cloud Storage And Communication</div>
        <div className="animating-one" ref={iconOneRef}>
          <AnimatingIcon text="hello" />
        </div>

        <div className="animating-two" ref={iconTwoRef}>
          <AnimatingIcon color="red" />
        </div>

        <div className="animating-three" ref={iconThreeRef}>
          <AnimatingIcon text="new" />
        </div>

        <div className="animating-four" ref={iconFourRef}>
          <AnimatingIcon color="blue" />
        </div>

        <DragNDrop filesDropped={filesDropped} />
      </div>
    </Container>
  );
};

export default Upload;
