# React SVG buttons

[![Version][npm-image]][npm-url]

This package provides a `<MorphIcon />` component used to compose available buttons,
it's able to morph from whatever icon type to another one.
  
The `<MorphIcon />` component exposes 18 icon types.

It also provides a set of button components.

Please, take a look at the [demo](http://cristian-encalada.github.io/react-svg-buttons-improved/).


## Installation

```
npm install react-svg-buttons
```

## Usage

```javascript
import { render } from 'react-dom'
import {
    MorphIcon,
    CloseButton,
    NavButton,
    PlusButton,
} from 'react-svg-buttons'

const Demo = () => (
    <div>
        <MorphIcon type="thunderbolt" />
        <CloseButton />
        <NavButton direction="right" opened={false} />
        <PlusButton />
    </div>
)

render(<Demo />, document.getElementById('demo'))
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

Original work:

- **[react-svg-buttons](https://github.com/original-author/react-svg-buttons)**
  - MIT. Copyright (c) 2015 Raphaël Benitte.

Updated to support React 18.x.x:
- **[react-svg-buttons-improved](https://github.com/cristian-encalada/react-svg-buttons-improved)**
  - Copyright (c) 2024 Cristian Encalada


[npm-image]: https://img.shields.io/npm/v/react-svg-buttons.svg?style=flat-square
[npm-url]:   https://www.npmjs.com/package/react-svg-buttons-improved
