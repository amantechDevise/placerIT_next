import Layout from "../_common/Layout";
import Advertising from "../_Components/Advertising";
import BusinessTogether from "../_Components/BusinessTogether";
import DigitalChoose from "../_Components/DigitalChoose";
import DigitalServices from "../_Components/DigitalServices";
import SeoServices from "../_Components/SeoServices";
import SocialMedia from "../_Components/SocialMedia";

function DigitalMarketing() {
    return (
        <Layout>
            <main className="relative w-full h-full">
                <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
                    {/* Background Video */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                        src="/images/Group 435.webp"
                    />


                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-[40px] md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
                            Digital <span className="font-semibold ">Marketing</span>
                        </h1>
                    </div>


                    <div className="absolute bottom-[-44px] 2xl:bottom-[-222px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
                        <img src="/images/Shape_4_.svg" alt="" className="w-full object-cover" />
                    </div>
                </div>

                <div>
                    <DigitalServices />
                </div>

                <div>
                    <SeoServices />
                </div>

                <div>
                    <Advertising />
                </div>

                <div>
                    <SocialMedia />
                </div>
                <div>
                    <DigitalChoose />
                </div>

                <BusinessTogether />
            </main>
        </Layout>
    );
}

export default DigitalMarketing;
