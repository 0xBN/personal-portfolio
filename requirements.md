# Notes:

Working on carousel. data-active is set to one, and there's a data-slide attribute for each. Make an index and an offset. If click next +1, if click previous -1. Have an index to keep track of what is the current slide (maybe use React.useState() to keep track of this.)

const [slide, setSlide] = React.useState()

# Current To Do:

2. Update LinkedIn
3. Update resume and
4. Link resume on Navbar
5. Clean up projects to list
6. Deploy personal website
7. Final Proof read: Website, Github

# Current finished:

1. Update github profile
2. Connect links: email, github, linkedin
3. Animate on scroll: Figure out how to animate stagger
4. Edit project cards + Carousel for project images or pop up modals

# Research before starting:

1. Dark / Light theme toggle: https://www.youtube.com/watch?v=RiWxhm5ZdFM
2. Animate on scroll: IntersectionObserver from webdev simplified
3. Sidebar best practices + responsive design: https://www.youtube.com/watch?v=biOMz4puGt8

# Sections:

1. About Me
2. Projects
3. Contact Me

# Contact Methods:

1. Github
2. LinkedIn
3. Email

# Components:

1. Sticky Sidebar
2. Footer
3. Project Card
4. Hero Landing
5. Project Carousels

# Creatives:

1. ContactIcons: LinkedIn, Github
2. OtherIcons: About, Experience, Projects, Skills,Education, Contact, Resume, Email
3. Sources: https://devicon.dev/, https://fonts.google.com/icons
4. Avatar:

# Animations:

1. On scroll: translate up and opacity

# Fonts:

1. Roboto
2. Source Sans Pro

# Dark mode:

1. --primary-dark: #BB86FC
2. --primaryVar-dark: #3700B3
3. --secondary-dark: #03DAC6
4. --background-dark: #121212
5. --surface-dark: #121212
6. --error-dark: #CF6679
7. --onPrimary-dark: #000000
8. --onSecondary-dark: #000000
9. --onBackground-dark: #FFFFFF
10. --onSurface-dark: #FFFFFF
11. --onError-dark: #000000

# Light mode:

1. --primary-light: #6200EE
2. --primaryVar-light: #3700B3
3. --secondary-light: #03DAC6
4. --secondaryVar-light: #018786
5. --background-light: #FFFFFF
6. --surface-light: #FFFFFF
7. --error-light: #B00020
8. --onPrimary-light: #FFFFFF
9. --onSecondary-light: #000000
10. --onBackground-light: #000000
11. --onSurface-light: #000000
12. --onError-light: #FFFFFF

# Features:

1. Light / Darkmode Toggle button
2. Responsive Design with Widths: 320px, 1000px?, 1600px (mobile, tablet?, desktop)
