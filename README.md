# JS Tabs

Transforms tabs markup to a simple but beautiful tabs system: showing the corresponding content when clicking on a tab.

## Live example

http://www.liran.co.uk/js-tabs

## Features

  - Supports multiple JS Tabs components on one page
  - Supports nesting JS Tabs inside one another
  - Has a tab marker out of the box, which also:
    - is animated
    - changes color based on the color of each tab
    - resizes on window resize
  - Exposes a destroy method to remove all js-tabs event listeners

## Installation

```
npm install js-tabs
```

## Usage

### HTML
```html
<div id="my-js-tabs">
  <nav class="js-tabs__nav">
    <ul class="js-tabs__tabs-container">
      <li class="js-tabs__tab active">Tab 1</li>
      <li class="js-tabs__tab">Tab 2</li>
      <li class="js-tabs__tab">Tab 3</li>
      <li class="js-tabs__tab">Tab 4</li>
    </ul>
    <div class="js-tabs__marker"></div>
  </nav>

  <ul class="js-tabs__content-container">
    <li class="js-tabs__content active">
      <p>Content 1</p>
    </li>
    <li class="js-tabs__content">
      <p>Content 2</p>
    </li>
    <li class="js-tabs__content">
      <p>Content 3</p>
    </li>
    <li class="js-tabs__content">
      <p>Content 4</p>
    </li>
  </ul>
</div>
```

### JS
```js
import JsTabs from 'js-tabs'

const myTabs = new JsTabs({
  elm: '#my-js-tabs'
})
myTabs.init()
```

### SCSS

Requires `_js-tabs-base.scss` to work properly.
```scss
@import '~js-tabs/src/js-tabs-base';
```

## Usage - ES5 and CSS

```html
<head>
  <!-- ... -->
  <link rel="stylesheet" href="js-tabs/_js-tabs-base.css">
  <script src="js-tabs/index.js"></script>
</head>
<body>
  <!-- ... -->
  <script>
    var myTabs = new JsTabs.default({
      elm: '#my-js-tabs'
    })
    myTabs.init()
  </script>
</body>
```

## Parameters

JsTabs takes an object with the following properties:

```js
{
  elm,
  onClickHandlerComplete,
  shouldScrollTabIntoView
}
```

### `elm`
[Element/String, **required**] The root element of the JS Tabs in the DOM. Can be either a reference to the element or a string representing a selector for the element.

### `onClickHandlerComplete`
[Callback function, optional] If passed, will be called after the tab has changed.

### `shouldScrollTabIntoView`
[Boolean, optional, default: true] Whether on not to scroll towards the tab when clicked (useful in small displays in which the tabs might not all fit on the screen)

## Public methods

### `init()`
Initialises the JS Tabs instance for the element specified

### `destory()`
Removes all event listeners of the JS Tabs instance


## CSS classes used

- `js-tabs__nav`
- `js-tabs__tab`
- `js-tabs__content-container`
- `js-tabs__content`
- `js-tabs__marker`
- `js-tabs__no-marker` (see below)
- `active`

## Removing the marker
If you want to implement the marker differently, you can remove the existing one like so:

```diff
...
<nav class="js-tabs__nav">
- <ul class="js-tabs__tabs-container">
+ <ul class="js-tabs__tabs-container js-tabs__no-marker">
    <li class="js-tabs__tab active">Tab 1</li>
    <li class="js-tabs__tab">Tab 2</li>
    <li class="js-tabs__tab">Tab 3</li>
    <li class="js-tabs__tab">Tab 4</li>
  </ul>
- <div class="js-tabs__marker"></div>
</nav>
...
```

## Dependencies

None

## Contributing

Feel free to submit issues and pull requests

## Development

* Run the following, which will serve the JS Tabs example on localhost:8081 and watch for changes.
```
npm start
```

* Navigate to http://localhost:8081/example/ to view the output
* Test the library in `src/example`:
  * index.html
  * index.js
  * _js-tabs-custom.scss
* Edit the library itself in `src`:
  * index.js
  * _js-tabs-base.scss

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
