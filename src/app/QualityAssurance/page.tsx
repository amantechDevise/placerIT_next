import Layout from "../_common/Layout";
import Faq from "../_Components/Fqa";
import GetQuality from "../_Components/GetQuality";
import QAProcess from "../_Components/QAProcess";
import QAServices from "../_Components/QAServices";
import QualityEssential from "../_Components/QualityEssential";
import QualityServices from "../_Components/QualityServices";

function QualityAssurance() {
    return (
        <Layout>
            <main className="relative w-full h-full">
                <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
                    {/* Background Video */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                        src="/images/Group 432.svg"
                    />


                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-3xl md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
                            Quality <span className="font-semibold ">Assurance <br />(QA)</span>
                        </h1>

                    </div>


                    <div className="absolute bottom-[-44px] 2xl:bottom-[-218px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
                        <img src="/images/Shape_4_.svg" alt="" className="w-full object-cover" />
                    </div>
                </div>

                <QualityServices />
                <QualityEssential/>
                <QAServices/>
                <QAProcess/>
                <GetQuality/>
                 <Faq />
            </main>
        </Layout>
    );
}

export default QualityAssurance;
