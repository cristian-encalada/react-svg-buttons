import { useState } from 'react';
import { MorphIcon } from '@devbug/react-svg-buttons';

const MorphingButtonClick = () => {
  const [iconType, setIconType] = useState('home');

  return (
    <MorphIcon
      type={iconType}
      size={100}
      thickness={2}
      color="#dd6e78"
      onClick={() => setIconType(iconType === 'home' ? 'thunderbolt' : 'home')}
    />
  );
};

export default MorphingButtonClick;
