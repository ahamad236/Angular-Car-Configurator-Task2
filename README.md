---
difficulty: 2
training: true
chapter: "Chapter 9: Challenge roundup"
tags: angular
---

# Car Configurator: Config Options

# Challenge Description

The app you have to update is a simplified version of https://www.tesla.com/modelx/design.
In this challenge, we focus on selecting a car config and options that affect range, maximum speed, and total cost.

## Requirements

- Update the router config to add routes to http://localhost:4200/step2 that renders the pre-generated `step2.component`, as well as http://localhost:4200/step1 that renders `step1.component`.
- Add router links in the navigation bar to both these routes so we can navigate between these steps.
- Disallow step 2 route navigation as long as car and color aren't selected on step 1.
- Complete `configurator.service` to handle the car configuration and options. Models can have different configs with different prices.
- In the step 2 screen, use the `/options/:modelCode` API endpoint to get the different configs and options available for the selected car.
- The two possible options cost $1,000 each and must only be displayed (not checked by default) when available on the selected car model: yoke steering wheel and tow hitch package. The API has two booleans to indicate whether these options are available or not on the select model.
- When a config is selected, display the associated range, max speed, and cost
- Complete the `step2.component` to display the right information in the dropdown and checkboxes.

> 💡 HINT: Use Signals as much as possible in `configurator.service` to store the current state of your configuration (selected config, selected options)

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.
- The project has `mini.css` as a dependency for basic styling.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://images.certificates.dev/roundup-2-screenshot.gif)
