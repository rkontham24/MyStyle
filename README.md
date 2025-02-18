## Author

Raj Swami Kontham

## About

This intelligent stylist recommends custom outfits to users based on clothing they already have. Scan an article of clothing, save it to your virtual wardrobe, and style it how you want.

## Ideation

MyStyle was conceptualized to elimenate the time deciding your outfit before going to work/school while also reccomending new ways to style the clothing you already have. This project is **still under development**. Click [here](https://drive.google.com/file/d/1alYdmdIXxXqk3SxTzcEh0DzI4NDY4IrC/view?usp=sharing) to view initial sketches. Click [here](https://mystyle-training-logs.notion.site/Training-Log-f7394a21bfc74ffbadb6ce7dafc73e6e) to view the ongoing training log for the model.

## Tech Stack

- React Native / Tailwind CSS (UI)
- Expo (Node.js runtime environment)
- JupyterLab (Machine learning environment)
- Firebase (User authentication)
- Figma (Logo and UI Design)

## Requirements

IMPORTANT: To ensure proper execution of the app, minimize dependency conflicts within your virtual environment (venv or conda).

    1. Create and activate a virtual environment. Conda is recommended, though any vritual environment type is fine.
    2. Install Python 3.11.
    3. Install npm or yarn (if you haven't already).
    4. Run the following npm and npx commands to install the libraries, packages, and dependencies necessary to run the app. Following this, you will clone the repo.
        a. npm install [tensorflow and tensorflowjs]
        b. npm install [expo], tailwindcss
        c. npm install firebase
    5. Clone the repo.
    6. Decide how to run the app. You may choose an Android/iOS simulator depending on your system OS, or install the Expo Go app on a mobile device to replicate the UI.
    7. Enter into the console: npx expo start. 

## References

Since this was a personal project with which I had little prior knowledge, there were many resources I consulted for background information. Below is a full list of videos and courses I've used to learn about the environments, frameworks, and technologies utilized within the code in the app. This project would not have been possible without these resources:

- [Intro to Tensorflow Course](https://www.udacity.com/course/intro-to-tensorflow-for-deep-learning--ud187)
- [React Native Course](https://drive.google.com/file/d/1n5ckOEFGoMeJJsNdEuAObo_koTsFnBfK/view?usp=sharing)
- [Nicholas Renoutte](https://www.youtube.com/watch?v=jztwpsIzEGc&list=PLgNJO2hghbmiXg5d4X8DURJP9yv9pgjIu&index=2)
- [Firebase Setup](https://www.youtube.com/watch?v=ONAVmsGW6-M)

Disclaimer: I do not own any of the images in the data I used to train the machine learning model. These images and copyrights belong to their original owners. No copyright infringement intended.