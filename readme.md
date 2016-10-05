# Traffic light

Open the `index.html` in a web browser to see the traffic light. You can look at it [online](https://codex-academy.github.io/traffic-light/) as well.

You need to make the traffic light toggle between green, red and orange based on the values entered into the textbox on the left hand side of the screen.

If the value in the textbox is more than `40` switch on the `green` light, if between `40` and `30` switch on the `orange` light otherwise the light should be `green`.

## Functions provided

Write your code in the `conditional-logic.js` file. Functions are provided to you to control the `traffic light`.

Use:

* `go` - to switch on the green light.
* `stop` - to switch on the red light.
* `caution` - to switch on the red light.

The value entered in the textbox is available in the `captureTrafficLightChange` function. Write your code in there.

## Challenge

Can you make the light change automatically? You can use the `setInterval` function. Open `set-interval.html` in a browser, you should see a number incrementing. Add logic in the `interval` function to make the counter reset to `0` once it reach `60`. How do you integrate this into your traffic light to make it change color automatically.
