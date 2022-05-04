import React, { DragEvent } from 'react';
import { DragNDropProps } from './DragNDrop.interface';
import './DragNDrop.scss';

const DragNDrop: React.FC<DragNDropProps> = (props) => {
  const svgWrapperRef = React.useRef<HTMLDivElement>(null);
  const onDragEnter = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    if (svgWrapperRef.current) {
      svgWrapperRef.current.classList.add('svg-wrapper-active');
    }
  };

  const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (svgWrapperRef.current) {
      svgWrapperRef.current.classList.remove('svg-wrapper-active');
    }
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (svgWrapperRef.current) {
      svgWrapperRef.current.classList.remove('svg-wrapper-active');
    }
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      props.filesDropped(true);
    }
  };

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="drag-drop-wrapper"
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <div className="svg-wrapper" ref={svgWrapperRef}>
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
