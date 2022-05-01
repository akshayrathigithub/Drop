import React from 'react';
import { ContainerProps } from './Container.interface';
import './Container.scss';

const Container: React.FC<ContainerProps> = (props) => {
  return <div className="container-wrapper">{props.children}</div>;
};

export default Container;
