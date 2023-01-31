# Weather-App
Weather App made using [Rapid API](https://rapidapi.com/) and Open-Sourced [Places-API](https://github.com/pooranjoyb/places-API/)

## Overview

- Weather App is an online tool with which you can check out the weather of any city in the world. 
- Weather API by [API-Ninjas](https://rapidapi.com/apininjas/api/weather-by-api-ninjas/) from Rapid API is used for fetching weather info.
- Used my own Open-Sourced [places-API](https://github.com/pooranjoyb/places-API) to fetch data for auto-complete search
- [Jqwery Autocomplete](https://jqueryui.com/autocomplete/) is used that enables users to quickly find and select from a pre-populated list of values as they type, leveraging searching and filtering

## Usage

- Open Gitbash/Terminal/Windows-Powershell

- Copy the following command to clone this repository in your local storage:
```
git clone https://github.com/pooranjoyb/places-API.git
```
- Hit the Enter key.

It would take a few seconds to clone the repository onto your system.<br>
**Note:** Cloning depends on the internet connection and the time would depend on your connection bandwidth. If Git is not able to clone due to a weak connection, it would display a fatal error and the user is requested to try again until the above message does not appear.

- Check in the local drive by navigating to it manually.


## Creating .env file

Create a new file and name it .env in the root directory
```
API_KEY='<your-RapidAPI-Key>'
API_HOST='weather-by-api-ninjas.p.rapidapi.com'
```
## Dependencies

- Express (v4.18.2)
- Nodemon (v2.0.20)
- Cors (v2.8.5)
- Dotenv (v16.0.3)
- Node-fetch (v3.3.0)

<b>
Run the following commands to install the dependencies in the local directory and start the development server</b>
    
    npm install
    npm start

<b>


## Contribution

Contributions and Commits are apppreciated. <br> 
Add an **ISSUE** or create a **PULL REQUEST** to contribute 

## Agreement

This data is provided "as is" without warranty or any representation of accuracy, timeliness or completeness.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


