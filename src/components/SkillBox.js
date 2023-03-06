export default function SkillBox(props) {
  return (
    <div className="tablet:w-[350px] h-[100px] mt-16 mobile:w-[300px] small:w-full small:mx-auto small:mt-6">
      <h3 className="text-white text-5xl font-bold mb-3.5 small:text-center small:text-3xl">
        {props.skill}
      </h3>
      <p className="text-grey text-lg font-medium small:text-center small:text-base">
        {props.year} Years Experience
      </p>
    </div>
  );
}
