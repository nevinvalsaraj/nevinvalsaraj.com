import React from 'react'

const ProjectListItem = ({ title, subtitle, description, links }) => (
  <div>
    <h2>{title}</h2>
    <h4>{subtitle}</h4>
    <p>{description}</p>
    {links.map(link => (
      <p key={link.title}>
        <a href={link.target} target='_blank' rel='noreferrer'>
          {link.title}
        </a>
      </p>
    ))}
  </div>
)

export default ProjectListItem
