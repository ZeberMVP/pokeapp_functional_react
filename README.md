[Click here to watch this project deployed](https://pokeapp-functional-react.netlify.app/)

This pokemon SPA has search and create functions. The pokemon are searched in this [API](https://pokeapi.co/). IT has been created with React and Sass.

## Routes

### /
Here you can see all the pokemon you have searched and created. It resets everytime you reload the page, so be careful
![/](https://user-images.githubusercontent.com/106594858/222214408-901765d0-1168-4057-8054-08878f10997b.PNG)

### /new
Here you can create a new pokemon. In the image field, you must provide an image url
![/new](https://user-images.githubusercontent.com/106594858/222214823-6d2683f7-0423-4b27-95c5-13892ef34695.PNG)

### /pokemon/:id
To access this route, you have to click on the image of a pokemon in the "/" route. Here you can see all the information about a pokemon
![/pokemon/:id](https://user-images.githubusercontent.com/106594858/222215446-14ba254d-e08b-451d-99b2-8e9a7c4c9872.PNG)

### /search
Here you can search a pokemon through its name or its Pokédex number. The search is done automatically three seconds after you stop typing 


## Start this app in your own system
1. Clone this repo
2. Run "npm i"
3. Run "npm start"
