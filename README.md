# React SVG buttons

[![Version][npm-image]][npm-url]

![React SVG buttons](https://raw.githubusercontent.com/cristian-encalada/react-svg-buttons/main/demo/public/react-svg-buttons.gif)

This package provides a `<MorphIcon />` component used to compose available buttons,
it's able to morph from whatever icon type to another one.
  
The `<MorphIcon />` component exposes 18 icon types.

It also provides a set of button components.

Please, take a look at the [demo](http://cristian-encalada.github.io/react-svg-buttons/).


## Installation

```
npm install @devbug/react-svg-buttons
```

## Usage

You can create your own personalized buttons.

For instance, adding new react components:

__Morphing onClick__

```js
// MorphingButtonClick.jsx
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
```

__Morphing onMouseEnter/onMouseLeave__

```js
// MorphingButtonHover.jsx
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
```

Then just add the new components to the react app or you can use the Pre configured buttons.

```javascript
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import MorphingButtonClick from './components/MorphingButtonClick'
import MorphingButtonHover from './components/MorphingButtonHover'

import {
  MorphIcon,
  CloseButton
} from '@devbug/react-svg-buttons'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <div>
        <MorphingButtonClick />
        <MorphingButtonHover />
        <MorphIcon
            type="hashtag"
            size={100}
            thickness={2}
            color="blue"
        />
        <CloseButton/>
      </div>
  </React.StrictMode>,
)
```

__Result:__

![React SVG buttons](https://raw.githubusercontent.com/cristian-encalada/react-svg-buttons/main/demo/public/react-svg-buttons.gif)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

Original work:

- **[react-svg-buttons](https://github.com/original-author/react-svg-buttons)**
  - MIT. Copyright (c) 2015 Raphaël Benitte.

Updated to support React v18:
- **[@devbug/react-svg-buttons](https://github.com/cristian-encalada/react-svg-buttons)**
  - Copyright (c) 2024 Cristian Encalada


[npm-image]: https://img.shields.io/npm/v/@devbug/react-svg-buttons.svg?style=flat-square
[npm-url]:   https://www.npmjs.com/package/@devbug/react-svg-buttons
