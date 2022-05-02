import React from 'react';
import AnimatingIcon from '../../SharedComponents/AnimatingComponent/AnimatingComponent';
import Container from '../../SharedComponents/Container/Container';
import DragNDrop from '../DragNDrop/DragNDrop';
import { UploadProps } from './Upload.interface';
import './Upload.scss';

const Upload: React.FC<UploadProps> = (props) => {
  return (
    <Container>
      <div className="upload-wrapper">
        <div className="heading">Secure Cloud Storage And Communication</div>
        <div className="animating-one">
          <AnimatingIcon text="hello" />
        </div>

        <div className="animating-two">
          <AnimatingIcon color="red" />
        </div>

        <div className="animating-three">
          <AnimatingIcon text="new" />
        </div>

        <div className="animating-four">
          <AnimatingIcon color="blue" />
        </div>

        <div className="drag-N-drop">
          <DragNDrop />
        </div>
      </div>
    </Container>
  );
};

export default Upload;
