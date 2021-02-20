# Contribution Guidelines [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues) 🤝🏽🍀:

## Section-1: File Structure of the Project 🗃️📂

### [Public Directory Structure](https://github.com/smaranjitghose/doc2pen/tree/master/public) 🧮✨
This folder contains the stylesheets, images and fonts. Any files within this directory will not be processed by Webpack but copied directly to the build folder.

### [Src Directory Structure](https://github.com/smaranjitghose/doc2pen/tree/master/src) 🧮✨
This folder contains all the main source code for the React application.

Files/Folders that are directly located inside the Src Folder: 📥
   
    |-assets       #This folder contains all the community brand assets.
    |-components   #This folder contains all the components used within the website.
    |-fonts        #This folder contains the fonts used in the website
    |-pages        #This folder contains all the sections of the page.
          |-editor
          |-home
          |-sketch
    |-..

### [Asset Directory Structure](https://github.com/smaranjitghose/doc2pen/tree/master/assets) 🧮✨
This folder contains all the community brand assets

### [Readme_Assets Directory Structure](https://github.com/smaranjitghose/doc2pen/tree/master/readme_assets)🧮✨
This folder contains all the images used in Readme Markdown.

## Section-2: To get the project on your local machine 💻🧑‍💻👩‍💻
- Install [Git](https://git-scm.com/downloads) 📥
- Setup [Github](https://github.com/) Account 📇
- Fork [this](https://github.com/smaranjitghose/doc2pen) Project 🍴
<p align = "center">
  <img src="/readme_assets/Fork%20Project.png?raw=true" width="500" height="200"/>
</p>

- Clone your forked copy of the project 🧩.

   ```
   git clone https://github.com/<your_user_name>/doc2pen.git
   ```

- Navigate to the project directory 📁.

   ```
   cd doc2pen
   ```

- Add a reference(remote) to the original repository.

   ```
   git remote add upstream https://github.com/smaranjitghose/doc2pen.git
   ```

<p align="center">
  <img src="/readme_assets/Cloning%20Project%20(1).png?raw=true"/>
</p>

## Section-3: To run the project on your local machine ⌨️🖥️🖱️
- To install the dependencies and packages, run `npm install`.
- To start the project in development mode, run `npm start`.
- Navigate to http://localhost:3000 to view it in the browser.

## Section-4 : To make changes in the project 🎨👩‍🎨👨‍🎨
- To directly update the local repo with any changes made in the central repo prior to starting  next edits or additions. To do this set up the central repository as an upstream remote for repo.
- Pull changes from Upstream. 
   ```
   git pull upstream master
   ```
- Comment on an [existing issue](https://github.com/smaranjitghose/doc2pen/issues) or Raise a [new issue](https://github.com/smaranjitghose/doc2pen/issues/new) with a proper description.
- Get it approved and assigned by the project maintainers.
- Create a new feature branch (DO NOT name it MAIN or MASTER or anything random).
   ```
   git checkout -b <your_branch_name>
   ```
- Do the changes.
- Check the outcome.
- Make a small clip or take screenshots.

- Stage your changes.
   ```
   git add .
   ```
- Commit your changes.
   ```
   git commit -m "Relevant message"
   ```
- Push the changes.
   ```
   git push origin <your_branch_name>
   ```
- To create a pull request, click on `compare and pull requests`.
<p align="center">
  <img src="/readme_assets/ComparePR.png?raw=true"/>
</p>

## Section-5: To make a pull request, follow the below guidelines ✅
- Add an appropriate title.
- Add an appropriate description of your work and .
- Add images/screenshots depicting your changes.
- Mention the issue the pull request is based upon using `Closes #IssueNumber`.
<p align="center">
  <img src="/readme_assets/PR.JPG?raw=true" height="350" width="450"/>
</p>

> NOTE
- Before you merge a feature branch back into your main branch (often master or develop), your feature branch should be squashed down to a single buildable commit, and then rebased from the up-to-date main branch.
   ```
   git rebase -i HEAD~[NUMBER OF COMMITS]
   ```
   OR
   ```
   git rebase -i [SHA]
   ```
- Do not comment back on the issue "Please check my PR". Maintainers will have a look as per their convenience.
