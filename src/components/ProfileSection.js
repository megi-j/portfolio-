import rgoli from "../images/rgoli.png";
import megi from "../images/megi.png";
import rgoli1 from "../images/rgoli1.png";
import github from "../images/github.png";
import linkdin from "../images/linkdin.png";

export default function ProfileSection() {
  return (
    <section className="w-full mobile:flex mobile:mt-16 mt-0">
      <div className="mobile:w-[60%] mobile:z-10 small:hidden mobile:block">
        <img
          className="bg-black01 ml-[-160px] hidden tablet:block"
          src={rgoli}
          alt=""
        />
        <img
          className="tablet:hidden mobile:block ml-[-50px]"
          src={rgoli1}
          alt=""
        />
        <h1 className="text-white tablet:text-[88px] font-bold mt-[-50px] mobile:text-7xl z-10">
          Nice to meet you!
        </h1>
        <h1 className="text-white tablet:text-[88px] font-bold mb-16 mobile:text-7xl">
          I’m{" "}
          <span className="tablet:border-b-8 tablet:border-solid tablet:border-green font-bold mobile:border-b-[6px] mobile:border-solid mobile:border-green">
            Megi Jabanashvili
          </span>
        </h1>
        <p className="text-grey text-lg tablet:w-1/2 font-medium mb-16 mobile:w-full">
          Based in the Tbilisi, Georgia, I’m a front-end developer passionate
          about building accessible web apps that users love.
        </p>
        <a
          className="border-b-2 border-solid border-green font-bold text-white pb-2.5"
          href="mailto:jabanashvilimegi@gmail.com"
        >
          CONTACT ME{" "}
        </a>
      </div>
      <div className="tablet:w-96 bg-black02 pt-[20px] mobile:pt-14 flex flex-col justify-center items-center mobile:justify-between mt-0 mobile:mt-[-150px] mobile:w-[322px] mobile:h-[600px] z-0 small:w-[174px] small:h-[383px] small:my-0 small:mx-auto">
        <h2 className="text-white text-xl mb-[20px] font-bold mobile:hidden">
          Megi Jabanashvili
        </h2>
        <div className="w-full flex justify-center mobile:justify-end">
          <a className="mr-8" href="https://github.com/megi-j" target="_blank">
            <img src={github} alt="" />
          </a>
          <a
            className="mr-8"
            href="https://www.linkedin.com/in/megi-jabanashvili-3666251b3/"
            target="_blank"
          >
            <img src={linkdin} alt="" />
          </a>
        </div>
        <img className="w-full h-[80%]" src={megi} alt="" />
      </div>
      <div className="mobile:hidden small:flex flex-col justify-center items-center w-[95%] my-[40px] mx-auto">
        <h1 className="text-white font-bold text-4xl text-center">
          Nice to meet you!
        </h1>
        <h1 className="text-white font-bold text-3xl text-center mb-[20px]">
          I’m{" "}
          <span className="font-bold border-b-[4px] border-solid border-green">
            Megi Jabanashvili
          </span>
        </h1>
        <p className="text-grey text-[16px] font-medium mb-16 text-center">
          Based in the Tbilisi, Georgia, I’m a front-end developer passionate
          about building accessible web apps that users love.
        </p>
        <a
          className="border-b-2 border-solid border-green font-bold text-white pb-2.5"
          href="mailto:jabanashvilimegi@gmail.com"
        >
          CONTACT ME{" "}
        </a>
      </div>
    </section>
  );
}
