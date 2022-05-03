import React, { DragEvent } from 'react';
import { DragNDropProps } from './DragNDrop.interface';
import './DragNDrop.scss';

const DragNDrop: React.FC<DragNDropProps> = (props) => {
  const svgWrapperRef = React.useRef<HTMLDivElement>(null);
  const onDragEnter = (event: DragEvent<HTMLDivElement>): void => {
    if (svgWrapperRef.current) {
      svgWrapperRef.current.classList.add('svg-wrapper-active');
    }
    console.log('onDragEnter');
  };

  const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
    if (svgWrapperRef.current) {
      svgWrapperRef.current.classList.remove('svg-wrapper-active');
    }
    console.log('drag leave');
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('drop', event);
  };

  return (
    <div className="drag-drop-wrapper">
      <div
        className="svg-wrapper"
        ref={svgWrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <svg className="svg" viewBox="0 0 400 250">
          <polygon
            className="path"
            points="0 0, 400 0, 400 250, 0 250"
            stroke="#000"
            strokeWidth="5"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </div>

      <div className="content">
        <div className="text">Drag & Drop files here to upload</div>
        <div className="file-upload-wrapper">
          <input
            className="file-upload"
            type="file"
            name="fileUpload"
            accept="image/*"
          />
          <div className="upload-btn">Browse File</div>
        </div>
      </div>
    </div>
  );
};

export default DragNDrop;
