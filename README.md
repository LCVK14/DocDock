<div align="center"><img src="https://attic.sh/vftg4nf4jbxgr35osmlbi6rh1ntx" alt="A picture of a doctor" width="200"/></div>

# DocDock
DockDock is an online medical consultation platform that leverages medically trained AI to diagnose mild conditions and refer more critical conditions to doctors who connect with users in remote locations through text or video calls.
It also allows the users to order over-the-counter and prescription medication (prescribed by the doctors on the site) and have it delivered to their house.  
BOTH the AI and the ReactJS must be set up for full functionality.

## How to set up the AI 
- Clone or download the git repository
- Go into the `backend` folder
- Open cmd in the `backend` folder and run `echo. > .env`
- Open `.env` in VSCode (or another text editor) and type >OPEN_AI=[your_open_ai_key]
- Run `npm install` in cmd (ensure you are in the right directory in cmd)
- Run `npm run devstart` or `node app.js` in cmd
## How to set up the ReactJS
- Go into the `docdock` folder
- Open cmd in the `docdock` folder and run `npm install`
- Run `npm run start`
- If a browser tab doesn't open, then ctrl + click the URL that shows up
