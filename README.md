# Simple Timer JS

Simple Timer JS is a jQuery plugin that provides countdown timer functionality. It allows you to start a countdown on a specified element, format the time in days, hours, minutes, and seconds, and customize the behavior when the timer completes.

## Usage

Include the jQuery library and the `simple-timer.js` file in your HTML:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="simple-timer.js"></script>
```
## Set up the HTML structure:
```html
<div id="count-down"></div>
```
Initialize the countdown timer with the desired options:
```js
var countdown = $('#count-down').simpletimer({
  timeLeft: 3600, // Time left in seconds
  onComplete: function() {
    // Function to run when the countdown completes
    console.log('Countdown completed');
  },
});
```
## Options
The simpletimer plugin accepts the following options:

- `timeLeft`: The initial time left for the countdown in seconds. Default is 60.
- `onComplete`: A callback function to be executed when the countdown completes. Default is an empty function.
- `dangerTime`: Time in seconds when the count-down color change to warning state. Default is 60.
- `onComplete`: The color during warning state. Default is 'red'.

## Methods
The plugin provides the following methods to control the countdown timer:

- `$.fn.simpletimer.pause()`: Pauses the countdown timer.
- `$.fn.simpletimer.resume()`: Resumes the countdown timer if paused.
- `$.fn.simpletimer.stop()`: Stops the countdown timer and resets it to the initial time.
- $`.fn.simpletimer.update(newSeconds)`: Updates the countdown timer with a new time in seconds and restarts the countdown.

## Custom Styling
You can apply custom styling to the countdown element using CSS.
```css
#count-down {
  font-size: 24px;
  font-weight: bold;
  color: blue;
}
```

## Examples
### Pause and Resume

```js
// Pause the countdown after 3 seconds
setTimeout(function() {
  countdown.simpletimer.pause();
}, 3000);

// Resume the countdown after 5 seconds
setTimeout(function() {
  countdown.simpletimer.resume();
}, 5000);

```
### Update Timer
```js
// Update the countdown with a new time of 1800 seconds (30 minutes) after 8 seconds
setTimeout(function() {
  countdown.simpletimer.update(1800);
}, 8000);

```
### Stop and Reset
```js
// Stop the countdown and reset it to the initial time after 12 seconds
setTimeout(function() {
  countdown.simpletimer.stop();
}, 12000);

```
### Events 
```js
var countdown = $('#count-down').simpletimer({
  timeLeft: 60, // Initial time in seconds
  onComplete: function() {
    alert('Countdown completed!');
  },
});
```
## Contact
If you want to reach out, you can:
- [WhatsApp: +260 972 875 095](https://wa.me/260972875095)
- [Email: sililo@sililoconnect.com](mailto:sililo@sililoconnect.com)

Enjoy coding 😊.

