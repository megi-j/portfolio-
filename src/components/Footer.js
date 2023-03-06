import github from "../images/github.png";
import linkdin from "../images/linkdin.png";

export default function Footer() {
  return (
    <footer className="w-full mt-12 mobile:flex mobile:flex-row mobile:justify-between small:flex-col small:justify-evenly small:items-center small:h-[170px] small:mt-0">
      <h2 className="text-white text-3xl font-bold small:mb-[20px]">
        Megi Jabanashvili
      </h2>
      <div className="w-20 flex justify-between mr-[30px]">
        <a href="https://github.com/megi-j">
          <img src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/megi-jabanashvili-3666251b3/">
          <img src={linkdin} alt="" />
        </a>
      </div>
    </footer>
  );
}
