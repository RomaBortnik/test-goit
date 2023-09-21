// import Reveal from 'components/Reveal';
import LinkListItem from '../LinkListItem';
import { devices } from 'styles';
import {
  Project,
  ProjectOverlay,
  ProjectThumb,
  ProjectTitle,
  ProjectDescr,
  LinkList,
} from './ProjectItem.styled';

const ProjectItem = ({ project }) => {
  const { name, mobileImage, image, altText, descr, media } = project;
  return (
    <Project>
      {/* <Reveal> */}
      <ProjectThumb className="thumb">
        {/* <img
          style={{ height: '100%', width: '100%' }}
          src={mobileImage}
          alt={altText}
        /> */}
        <picture>
          <source srcSet={image} media={`(${devices.desktop})`} />
          <source
            srcSet={mobileImage}
            media={`(${devices.nottabletanddesktop})`}
          />
          <img
            style={{ width: '100%', height: '100%' }}
            src={image}
            alt={altText}
            min-width="320"
          />
        </picture>
      </ProjectThumb>

      <ProjectOverlay className="overlay">
        <ProjectTitle>{name}</ProjectTitle>
        <ProjectDescr>{descr}</ProjectDescr>
        <LinkList>
          {media.map(project => (
            <LinkListItem key={project.id} project={project} />
          ))}
        </LinkList>
      </ProjectOverlay>
      {/* </Reveal> */}
    </Project>
  );
};

export default ProjectItem;
