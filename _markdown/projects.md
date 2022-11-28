# Projects
## Africa in Science

[Africa in Science (AiS)](https://africainscience.org/) is a think tank and online platform tracking the scientific research output of institutes in Africa.
The website and database was developed with an academic at the university and a group of students and launched in 2021.
The database collects information about articles published in Africa on a per-country basis. Aside from being a platform
for content, the web app allows users to search for a country and view a [page for each country displaying its data](https://africainscience.org/countries/egypt). I was responsible for 
designing the infrastructure of the web app, interfacing with the database, and developing the pages that display this data.

![A screenshot of the 'country page' on the AiS website](/images/country_page.png)

The page contains interactive graphs and custom visualisations, written in [d3js](https://d3js.org/). We used [NextJS](https://nextjs.org/) for the webapp, and [Prisma ORM](https://www.prisma.io/) to access the database.

One particular challenge was getting D3 and React to work together nicely, since they both modify the DOM. We used the solution broadly outlined in [this medium article](https://medium.com/@jeffbutsch/using-d3-in-react-with-hooks-4a6c61f1d102). We also considered using pre-made React components based on a simpler data vis library, such as ChartJS, but decided
this didn't offer the flexibility we wanted. 

## 3D Graphics Assignment (University Coursework)

This University module covered foundational topics in 3D computer graphics. The assignment was to create an animated scene in which a robot 
is exploring a museum with different artifacts. We used the OpenGL API for Java. This assignment was one of my favourites because it required 
bringing together and solving lots of differet problems. Notably creating and manipulating 3D models in the scene graph, writing shaders to simulate 
lighting effects, and creating data structures to manage the animations. I finished this module feeling inspired and I have some project ideas I'll get back to someday!

<!-- Todo: link to video -->