# Theme Module
This module utilizes MaterialUI theme capabilities and bundles the code into a plug and play theme controller and theme toggle button. 

## ThemeController

The theme controller is a wrapper that handles the passing of data between the provider and context. The data can be accessed and modified by any component in the app as long as the context is imported.

 - Usage:
	 ThemeController is a wrapper function that can be wrapped around any React component that chooses to follow the theme styling rules.
	 At the beginning of the functional component that you would like to control it's children's theme styles, `import ThemeController`.
	 Inside the return of your component use the syntax below.
	 `<ThemeController> ...child component </ThemeController>`

## ThemeToggle

ThemeToggle is a simple icon button that indicates the current theme mode. 
In order for `<ThemeToggle/>` to work, `<ThemeController/>` needs to be implemented. When toggled, the theme mode is changed and sent up to the provider. This new theme mode is used to update MaterialUI's Theme.

 - Usage
	 `import ThemeToggle` into the component in which you want to toggle theme modes.
	 Anywhere you are allowed to return a React component use this syntax: `<ToggleTheme/>`