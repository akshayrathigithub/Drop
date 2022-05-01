import React from 'react';
import AnimatingIcon from '../../SharedComponents/AnimatingIcon/AnimatingIcon';
import Container from '../../SharedComponents/Container/Container';
import { UploadProps } from './Upload.interface';
import './Upload.scss';

const Upload: React.FC<UploadProps> = (props) => {
  return (
    <Container>
      <div className="upload-wrapper">
        <div className="heading">Secure Cloud Storage And Communication</div>
        <AnimatingIcon />
      </div>
    </Container>
  );
};

export default Upload;
