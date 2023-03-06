import SkillBox from "./SkillBox";

export default function SkillSection() {
  return (
    <section className="w-full mt-16 flex flex-wrap justify-between">
      <SkillBox skill="HTML" year="2" />
      <SkillBox skill="CSS" year="2" />
      <SkillBox skill="Javascript" year="2" />
      <SkillBox skill="React" year="Less Than a" />
      <SkillBox skill="Typescript" year="Less Than a" />
      <SkillBox skill="Tailwind CSS" year="Less Than a" />
      <SkillBox skill="Styled Components" year="Less Than a" />
      <SkillBox skill="GIT" year="1" />
      <SkillBox skill="SCSS" year="1" />

      <div className="w-[95%] bg-white h-px mt-16 small:mx-auto"></div>
    </section>
  );
}
