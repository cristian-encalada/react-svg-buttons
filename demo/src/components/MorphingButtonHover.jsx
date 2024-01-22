import { useState } from 'react';
import { MorphIcon } from '@devbug/react-svg-buttons';

const MorphingButtonHover = () => {
  const [iconType, setIconType] = useState('home');

  return (
    <MorphIcon
      type={iconType}
      size={100}
      thickness={2}
      color="#dd6e78"
      onMouseEnter={() => setIconType('thunderbolt')}
      onMouseLeave={() => setIconType('home')}
    />
  );
};

export default MorphingButtonHover;
