# Folder Structure

- src
  - app
    - app.component.html
    - app.component.scss
    - app.component.ts
    - app.module.ts
    - custom-drop-down
      - custom-drop-down.component.html
      - custom-drop-down.component.scss
      - custom-drop-down.component.ts
  - assets
  - ...


# Release Notes - Version 0.0.1

## New Features:

Added a custom dropdown component, CustomDropDownComponent, that provides a dropdown functionality with customizable options and event emission for option selection.

## Enhancements:

Refactored the existing code to move the dropdown functionality into the CustomDropDownComponent for improved modularity and reusability.
Updated the AppComponent to utilize the CustomDropDownComponent by importing it and replacing the previous dropdown code.

## Fixed Issues:

Resolved the issue with the dropdown appearing empty by correcting the property names in the options array and binding in the CustomDropDownComponent.