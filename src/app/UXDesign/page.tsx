import Layout from "../_common/Layout";
import DesignMatters from "../_Components/DesignMatters";
import DesignProcess from "../_Components/DesignProcess";
import DesignServices from "../_Components/DesignServices";
import ExperienceTogether from "../_Components/ExperienceTogether";
import Faq from "../_Components/Fqa";
import UI_UXServicesInclude from "../_Components/UI_UXServicesInclude";

function UXDesign() {
    return (
        <Layout>
            <main className="relative w-full h-full">
                <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
                    {/* Background Image */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                        src="/images/Group 436.jpg"
                    />


                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-3xl md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
                            UI/UX <span className="font-semibold ">Desgin</span>
                        </h1>
                    </div>


                    <div className="absolute bottom-[-40px] 2xl:bottom-[-212px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
                        <img src="/images/Shape_4_.svg" alt="" className="w-full object-cover" />
                    </div>
                </div>

<DesignServices/>
<DesignProcess/>
<UI_UXServicesInclude/>
<DesignMatters/>
<ExperienceTogether/>
 <Faq/>
            </main>
        </Layout>
    );
}

export default UXDesign;
