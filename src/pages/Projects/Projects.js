import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout>
      <div
        hideCloseButton={false}
        iconDescription="Close notification"
        kind="warning"
        notificationType="inline"
        role="alert"
        subtitle={
          <span>
            Under construction area, my projects are presented here{' '}
            <a href="https://github.com/MedN-Dev">Github</a>
          </span>
        }
        title="Attention"
      />
      <div>
        <SectionTitle>Private projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;