# Projects & Experience

As a recent Master of Computer Science graduate with a year in industry, I have experience in all areas of software engineering and machine learning, with a lean towards web development. Here are some of the things I have worked on in the last few years.

## CERN Summer Student Program 2023

This summer I was fortunate enough to intern at CERN. I joined the [ALICE O^2 project](https://alice-o2-project.web.cern.ch/) as a full stack web developer. I was responsible for developing and maintaining Bookkeeping - a web app used by the run control team at ALICE to keep track of activites. As well as this, I had the opportunity to shadow in the ALICE control room, gaining an understanding of how the experiment works, and how Bookkeeping was used in day-to-day operations. I published a [report](http://cds.cern.ch/record/2873559?ln=en) detailing my contirbutions to Bookkeeping available publicly on the CERN document server. In the meantime, I'm continuing to work on Bookkeeping as an open source contributor.As part of the program I also attended a series of lectures on many topics such as particle physics, physics engineering, quantum computing, and cyber security.

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

## Year in Industry - Scientific Software Developer at ISIS Neutron and Muon source

The [ISIS Neutron and Muon source](https://www.isis.stfc.ac.uk/Pages/home.aspx) is a particle physics facility in Harwell UK, managed by the Science Technology and Facilities Council (STFC). I joined the [Mantid Project](https://www.mantidproject.org/) as a Scientific Software Developer. The Mantid Project, to quote their site, *"provides tools to support the processing of material science data"*, such as that collected at ISIS. I worked on GUI features in Python and C++. Once such feature involved implementing an Observer pattern to enable plots showing 3D data to dynamically update when their data is changed elsewhere. I beta tested this features with users to ensure the behaviour was correct, and to discover bugs (we know users use software in ways you don't expect!). During this, I discovered a bug related to deadlocking between threads. I raised this as a ticket on github and fixed the issue before the next release. As well as this, I participated in all aspects of the development pipeline including sprint planning, CI/CD, and reviewing other developers' work on github.
