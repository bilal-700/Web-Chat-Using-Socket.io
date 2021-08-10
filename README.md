# Web-Chat-Using-Socket.io
Web based chat application using socket.io &amp; node.js

## Tools and Programming language:
- IDE:
  - Visual Studio Code
- Languages used for creating website structure:
  - HTML
  -	CSS
- Backend Language:
  -	Node.js
- Libraries used in Node.js to implement all the functionalities:
  -	Socket.io
  -	Serve-favicon
  -	Express

## Steps for running code:
- Open CMD and go to the directory where you want to place the project and then enter:
  - `mkdir Web-Chat`
- Place the files you downloaded from github in the folder _Web-Chat_. Now type ccommand in the cmd:
  - `cd Web-Chat`
  - `code .`
- Now Visual studio code will open and _Web-Chat_ will be there as a project.
- Press **_Ctrl + Shift + `_**
- Terminal will open in the vs code and enter:
  - `npm install`
- Ths will download node modules and the dependcies given in the _**package.json**_
- Now simply type `node server.js`
- Open your search engine like Chrome and type:
  - `localhost:3000`
## Way to navigate through the Web site:
- Main page will open and click on _**Get Started**_ button then on _**'Simple Web Messaging'**_ button.
- After that 'Create Room' form will appear
- Enter Room name and username and click on _**'Create'**_ button. 
- _**'Room successfully created. Click 'here' to enter room. Share the room link with your partners'**_ message will appear and then click on _**'here'**_ to enter the room.
- 'Message.html' will open and room is created with only one user in it.
- After that copy, the link and open another tab and paste the link in it.
- Now _**'join room'**_ form will appear and enter the room by entering username.
- Now two users are present in the room. 
  -	User1 who created the room
  -	User2 who joined the room
- Now message sent from one side will be seen on the other side or vice versa. 
