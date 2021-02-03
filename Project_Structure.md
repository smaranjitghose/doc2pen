# Project Structure

## Public Directory Structure

This folder contains the stylesheets, images and fonts. Any files within this directory will not be processed by Webpack but copied directly to the build folder.

Below are the subdirectories within the public folder:

- src/fonts

Below are the files which are directly located inside the public folder:

- favicon.ico

- index.html

- logo192.png

- logo512.png

- manifest.json

- robots.txt

-------------------------------------------------------

## Src Directory Structure

This folder contains all the main source code for the React application.

Below are the subdirectories within the src folder :

- src/assets/

- src/components/

- src/fonts

- src/pages

Below are the files which are directly located inside the src folder:

- App.js

- index.css

- index.js

-------------------------------------------------------

## src/assets

This folder contains all the community brand assets

-------------------------------------------------------

## src/components

This folder contains all the components used within **more than one** pages of the website.

-------------------------------------------------------

## src/fonts

This folder contains the fonts used in the website

-------------------------------------------------------

## src/pages/<page_name>/

these folder has the following files and folders.

- index.js **(sections all the sections of the page. You can find all the UI implementations of the section in section folder.)**

- style.css **(contains styles used in this particular page only)**

- sections/ **(has all sections used in the page.)**

- components/ **(reusable components which can be used by any section of *only* this page.)**

- sections/ **(has all sections used in the page.)**

- containers/ (for react state management works (using React Context API))
