import { v4 as uuidv4 } from 'uuid';

export default function ProjectList({ projects }) {
  return (
    <div className="projectList">
      {projects.map(p => (
        <img
          className={`projectList__img ${p.category}`}
          src={p.img}
          alt=""
          key={uuidv4()}
        />
      ))}
    </div>
  );
}
