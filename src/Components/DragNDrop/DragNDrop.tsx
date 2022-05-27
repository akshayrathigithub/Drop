import { cloneDeep } from 'lodash';
import React, { ChangeEvent, DragEvent, useState, useRef } from 'react';
import SVGIcon from '../../SharedComponents/SVGIcon/SVGIcon';
import {
  DragNDropProps,
  DragNDropState,
  initialDragNDropState,
} from './DragNDrop.interface';
import './DragNDrop.scss';
import FileIcon from '../../Assests/Icons/folder.svg';

const DragNDrop: React.FC<DragNDropProps> = (props) => {
  const svgWrapperRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<DragNDropState>(
    cloneDeep(initialDragNDropState)
  );

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
      fileDroppedSuccessfully();
    }
  };

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      fileDroppedSuccessfully();
      console.log(event.target.files[0]);
    }
  };

  const fileDroppedSuccessfully = () => {
    const updatedState = state;
    updatedState.filesDropped = true;
    setState({ ...updatedState });
    props.filesDropped(true);
  };
  if (!state.filesDropped) {
    return (
      <div className="drag-drop-wrapper uploaded-file-info">
        <div className="file-wrapper">
          <div className="file-details">
            <div className="file-icon">
              <SVGIcon>
                <FileIcon />
              </SVGIcon>
            </div>
            <div className="file">
              <div className="title">Red Tech Modern Island House.zip</div>
              <div className="sub-title">
                <div className="size">5.3 MB</div>
                <div className="file-type">ZIP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
              onChange={onFileChange}
            />
            <div className="upload-btn">Browse File</div>
          </div>
        </div>
      </div>
    );
  }
};

export default DragNDrop;
