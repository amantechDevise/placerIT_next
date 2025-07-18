import Layout from "../_common/Layout";
import ConsultancyServices from "../_Components/ConsultancyServices";
import SoftServices from "../_Components/SoftServices";
import SoftwareChoose from "../_Components/SoftwareChoose";
import SoftwareExpert from "../_Components/SoftwareExpert";
import SoftwereWork from "../_Components/SoftwereWork";

function SoftwareConsultancy() {
    return (
        <Layout>
            <main className="relative w-full h-full">
                <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
                    {/* Background Image */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                        src="/images/Group 433.svg"
                    />


                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-3xl md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
                            Software <span className="font-semibold ">Consultancy</span>
                        </h1>
                    </div>


                    <div className="absolute bottom-[-44px] 2xl:bottom-[-212px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
                        <img src="/images/Shape_4_.svg" alt="" className="w-full object-cover" />
                    </div>
                </div>
                <ConsultancyServices/>
                <SoftwareChoose />
                <SoftServices/>
                <SoftwereWork/>
                <SoftwareExpert />


            </main>
        </Layout>
    );
}

export default SoftwareConsultancy;
