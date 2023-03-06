export default function ProjectCard(props) {
  return (
    <div className="tablet:w-[500px] h-[400px] relative mobile:w-[345px] small:w-full">
      <div className="group absolute bg-black03 top-0 left-0 w-full h-[80%] hover:bg-black04 transition-all hidden justify-center flex-col items-center text-white02 hover:text-white cursor-pointer tablet:flex">
        <a
          className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px] mb-12"
          href={props.link}
          target="_blank"
        >
          VIEW PROJECT
        </a>
        <a
          className="hover:text-green pb-2.5 border-b-2 border-solid border-green02 group-hover:border-green tracking-[2.28px]"
          href={props.linkCode}
          target="_blank"
        >
          VIEW CODE
        </a>
      </div>
      <img
        className="w-full tablet:h-[80%] small:h-[250px]"
        src={props.img}
        alt=""
      />
      <h5 className="text-white font-bold text-2xl mt-[20px] mb-[7px]">
        {props.projectName}
      </h5>
      <p className="text-grey font-medium text-lg">{props.usedSkills}</p>

      <div className="tablet:hidden mobile:block text-white mt-[20px]">
        <a
          className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] mb-12 text-base"
          href={props.link}
          target="_blank"
        >
          VIEW PROJECT
        </a>
        <a
          className="hover:text-green pb-2.5 border-b-2 border-solid border-green tracking-[2.28px] ml-[32px] mt-[20px] text-base"
          href={props.linkCode}
          target="_blank"
        >
          VIEW CODE
        </a>
      </div>
    </div>
  );
}
