import githubProject from "../images/githubProject.png";
import tipCalculator from "../images/tipCalculator.png";
import restaurant from "../images/restaurant.png";
import todo from "../images/todo.png";
import bootcamp from "../images/bootcamp.png";
import ProjectCard from "./ProjectCard";
import planet from "../images/planet.png";

export default function ProjectSection() {
  return (
    <section className="w-full mt-36 small:mt-[80px] small:p-[15px]">
      <h1 className="text-white font-bold tablet:text-[88px] mb-20 mobile:text-7xl small:text-[40px] small:mb-[40px]">
        Projects
      </h1>
      <div className="flex flex-wrap gap-y-16 justify-between mobile:pr-[30px] mobile:gap-y-32">
        <ProjectCard
          link="https://megi-j.github.io/planets-fact-site/"
          linkCode="https://github.com/megi-j/planets-fact-site"
          projectName="PLANETS FACT SITE"
          usedSkills="REACT, TYPESCRIPT, STYLED COMPONENTS"
          img={planet}
        />
        <ProjectCard
          link="https://megi-j.github.io/github-user-search-app/"
          linkCode="https://github.com/megi-j/github-user-search-app"
          projectName="GITHUB USER SEARCH"
          usedSkills="REACT API"
          img={githubProject}
        />
        <ProjectCard
          link="https://megi-j.github.io/Tip-Calculator-App-/"
          linkCode="https://github.com/megi-j/Tip-Calculator-App-"
          projectName="TIP CALCULATOR"
          usedSkills="REACT"
          img={tipCalculator}
        />
        <ProjectCard
          link="https://megi-j.github.io/react-project/"
          linkCode="https://github.com/megi-j/react-project"
          projectName="RESTAURANT APP"
          usedSkills="REACT"
          img={restaurant}
        />
        <ProjectCard
          link="https://megi-j.github.io/todo/"
          linkCode="https://github.com/megi-j/todo"
          projectName="TODO APP"
          usedSkills="REACT TYPESCRIPT"
          img={todo}
        />
        <ProjectCard
          link="https://megi-j.github.io/tbilisi-bootcamp/"
          linkCode="https://github.com/megi-j/tbilisi-bootcamp"
          projectName="TBILISI BOOTCAMP"
          usedSkills="REACT"
          img={bootcamp}
        />
      </div>
    </section>
  );
}
