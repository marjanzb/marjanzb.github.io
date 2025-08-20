// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-courses",
          title: "Courses",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-research-overview",
          title: "Research Overview",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-joined-the-mechanical-engineering-department-at-california-polytechnic-state-university-as-an-assistant-professor",
          title: 'I have joined the Mechanical Engineering Department at California Polytechnic State University as...',
          description: "",
          section: "News",},{id: "projects-automotive-painting-using-inkjet-printing-technology",
          title: 'Automotive Painting Using Inkjet Printing Technology',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-mitigating-methane-emissions-from-industrial-ponds",
          title: 'Mitigating Methane Emissions from Industrial Ponds',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-mitigating-methane-emissions-from-active-and-abandoned-gas-wells",
          title: 'Mitigating Methane Emissions from Active and Abandoned Gas Wells',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
