# epitech-bamboohr-timesheet-filler

Puppeteer script to automatically fill the Epitech's BambooHR timesheet.
It updates your current timesheet with the needed worked days with a 9am-12pm / 2pm-6pm time entries.

## Installation

Install it with `yarn` :
```
$ yarn
```
or alternatively with `npm` :
```
$ npm install
```

## Usage

Create a `.env` file with the following variables :
- LOGIN
- PASSWORD
- WORKED_DAYS (needs to be a list of french diminutive days, separated by a comma) Example : `jeu,ven`


Launch it with the following command :

```
$ yarn start
```
or
```
$ npm start
```
