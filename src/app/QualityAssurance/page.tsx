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
                        src="/images/Group 432.jpg"
                    />


                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-3xl md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
                            Quality <span className="font-semibold ">Assurance <br />(QA)</span>
                        </h1>

                    </div>


                     <div className="absolute bottom-0 left-0 w-full z-10">
                        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
                                className="fill-current text-white"></path>
                        </svg>
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
