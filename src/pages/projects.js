import React from 'react'
import Link from 'gatsby-link'
import ProjectListItem from '../components/ProjectListItem'

const ProjectsPage = () => (
  <div>
    <h1>Projects</h1>
    <hr />
    <ProjectListItem
      title="Plot-NMEA"
      subtitle="Real-time GPS visualisation tool built on Electron"
      description="An Electron-based cross-platform GUI to visualize streaming
      NMEA protocol -encoded GPS co-ordinates on a map in real-time."
      links={[
        {
          title: 'GitHub',
          target: 'https://github.com/nevinvalsaraj/plot-nmea',
        },
      ]}
    />
    <hr />
    <ProjectListItem
      title="Sign Language Interpreter"
      subtitle="Image processing tool to interpret sign languages"
      description="Software which uses machine learning and image processing
      techniques to learn and interpret sign-languages from a video/camera feed.
      Developed in C++ using OpenCV image processing library."
      links={[
        {
          title: 'GitHub',
          target: 'https://github.com/nevinvalsaraj/signlanginterpreter',
        },
      ]}
    />
    <hr />
    <ProjectListItem
      title="Nostradamus"
      subtitle="Product Search and Recommendation Tool"
      description="Recommends products to customers based on existing reviews
      and ratings. Used Apache Nutch for web crawling, Apache Solr for search
      indexing, Semantria sentiment analyzer API, NLTK (Natural Language
        Toolkit) for query processing and Bootstrap front-end framework for user
       interace design."
      links={[
        {
          title: 'GitHub',
          target: 'https://github.com/nevinvalsaraj/nostradamus',
        },
      ]}
    />
    <hr />
    <ProjectListItem
      title="Smart Home Controller"
      subtitle="Smart Home Touch Controller Using BeagleBone Black"
      description="A smart home sensor network and gateway that uses RF
      sensor/actuator array and BeagleBone Black single-board computer running
      Linux to control smart homes using capacitive touch interface. Also
      implemented RF- based gesture-trigger for A/C appliances."
      links={[
        {
          title: 'GitLab',
          target: 'https://gitlab.com/route_access/beagleswitcher',
        },
      ]}
    />
    <hr />
    <ProjectListItem
      title="Fellowship of Tasks"
      subtitle="Android App for Local Task Collaboration"
      description="Android app targeting wide-area institutions such as
      schools and colleges that lets you put up requests for location
      -based tasks that’s visible to people at a target location. Also
      implemented a karma system to gamify the process."
      links={[
        {
          title: 'GitLab',
          target: 'https://gitlab.com/route_access/fellowship-of-tasks',
        },
      ]}
    />
    <hr />
    <ProjectListItem
      title="National Engineering Institutes Database"
      subtitle="Database design, Web design"
      description="Designed and developed a database of engineering institutes
      with web-based UI and complex access rights management as part of term
      project using Django framework."
      links={[{ title: 'GitHub', target: 'https://github.com/nevinvalsaraj/engineering-site' }]}
    />
    <hr />
    <ProjectListItem
      title="GeoAware"
      subtitle="Computer vision -guided robot"
      description="Implemented real-time image processing using OpenCV library
      to build lane-follower robot using Arduino development board which Won the
       Best Algorithm Award at the nation-wide competition held as part of
       Kshitj 2014."
      links={[{ title: '', target: '' }]}
    />

    <hr />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default ProjectsPage
