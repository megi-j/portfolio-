import ProfileSection from "./components/ProfileSection";
import Footer from "./components/Footer";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="max-w-[1440px] m-0 mx-auto bg-black01 tablet:py-10 tablet:px-40 mobile:pl-[30px] mobile:py-[30px]">
      <header className="small:hidden mobile:block">
        <h2 className="text-white text-3xl font-bold">Megi Jabanashvili</h2>
      </header>
      <ProfileSection />
      <div className="w-[95%] bg-white h-px mt-16 small:mx-auto"></div>
      <SkillSection />
      <ProjectSection />
      <div className="w-[95%] bg-white h-px mt-16 mobile:mt-24 small:mx-auto"></div>
      <Footer />
    </div>
  );
}

export default App;
