# etch_a_sketch

In this project I was tasked with making an etch-a-sketch in which I was to create a certain number of divs in Javascript based on a user input, then as the mouse hovers over a div, it would change color. 

Post-mortem

The main objective for this project was to have a better understanding of DOM manipulation and event handlers, and I definitely feel more confident in how to manipulate the DOM. It became clear that there were several ways for achieving my DOM manipulation objectives, so it was cool to learn that there was more than just one way to make changes to the output. 

As I got started I realized that there would be several ways to arrange the divs I was creating into a grid, but it seemed logical that the easiest way might be the thing called...Grid. So before I really got started with the project I took a couple of days to teach myself CSS Grid. That turned out to be a really smart move because the 'repeat(numTimes, sizing)' syntax in Grid made it incredibly easy to set up the number of columns and rows based on the the user input. 

Once I had a solid understanding of Grid, I moved on to actually writing the JS to manipulate the DOM and create the grid. I started by making sure I could make the etch-a-sketch bit work on a set number of divs before I worked on making it with a user input. It seemed like since the little divs were overlaid on a big background div, it would be easiest to just change the color of something the mouse was hovered over that was NOT the big div, so I wrote that as the function to change the color of the little divs. 

Once I had that code working, I put in a button with a prompt asking the user to provide the number of rows and columns they want. I then parsed that into an integer that I saved in a variable, and placed that into the previous code for creating the grid and voila, it worked! 

Then I needed to create a reset button. At first I set it to reload the page, but I realized after doing it that that wasn't what I actually wanted. All I really wanted was to reset the color on the baby divs back to the original without resetting the grid size, so I just did a simple forEach() method on all of the baby divs to change the styling back to their original color when the button is clicked.

Writing the JS turned out to be a lot quicker than I had anticipated. In all it took about 6 hours for me to figure out how to write the JS and get everything working. One thing that I would like to improve is to make the web design responsive. I know that that is coming in a later lessons, so I am just going to be patient and come back to this project when I've learned about the principles of responsive design.