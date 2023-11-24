const Portfolio = ({items}) => {
  return (
    <div className="portfolio">
      {items.map((project, i) => {
        return (
          <div className="project" key={`project-${project.category}-${i}`}>
            <img src={project.img} alt={`project-${project.category}-${i}`} />
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;