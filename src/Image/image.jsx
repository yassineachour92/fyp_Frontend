import { Image } from 'antd';
import React, { useState } from 'react';

import 'antd/dist/antd.css';
import Modale from '../Modal/Modal';
import './image.css'

export function ImageDemo({ img }) {
  return (
    <>
      <Image
        className="img__carousel"
        preview={false}
        src={img}
      />
    </>
  );
}

