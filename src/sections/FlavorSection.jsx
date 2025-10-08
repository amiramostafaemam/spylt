import FlavorTitle from "../components/FlavorTitle";
import FlavorSlider from "../components/FlavorSlider";

const FlavorSection = () => {
  return (
    <section className="flavor-section xl:p-5 lg:p-5 md:p-0 p-3">
      <div className="h-full flex xl:flex-row lg:flex-row md:flex-col flex-col items-center relative">
        <div className="xl:w-[70%] lg:w-[70%] md:w-full sm:w-full w-150 flex-none xl:h-full lg:h-full md:h-80 h-72 xl:mt-0 lg:mt-0 md:mt-12 md:pt-15 sm:mb-30 mt-0 xl:ms-3 xl:me-8 lg:ms-3 lg:me-6 md:ms-0 md:me-0 ms-0 me-0">
          <FlavorTitle />
        </div>
        <div className="xl:h-full lg:h-full md:h-full h-full xl:w-[43%] lg:w-[45%] md:w-full w-full xl:mt-55 lg:ms-50 xl:mb-20 sm:mt-10  ">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default FlavorSection;
