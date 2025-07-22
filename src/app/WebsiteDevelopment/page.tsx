import Layout from "../_common/Layout";
import DevelopmentChoose from "../_Components/DevelopmentChoose";
import DevelopmentProcess from "../_Components/DevelopmentProcess";
import DevelopmentServices from "../_Components/DevelopmentServices";
import Faq from "../_Components/Fqa";
import OnlinePresence from "../_Components/OnlinePresence";
import ServiseIncludeDev from "../_Components/ServiseIncludeDev";
import Technologies from "../_Components/Technologies";

function WebsiteDevelopment() {
    return (
        <Layout>
            <main className="relative w-full h-full">
                <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
                    {/* Background Video */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-90"
                        src="/images/WebGroup 434.svg"
                    />


                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-3xl md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
                            Website <span className="font-semibold ">Development</span>
                        </h1>
                    </div> 


                    <div className="absolute bottom-[-44px] 2xl:bottom-[-222px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
                        <img src="/images/Shape_4_.svg" alt="" className="w-full object-cover" />
                    </div>
                </div>

     <div>
        <DevelopmentServices/>
     </div>
     <DevelopmentChoose/>
     <DevelopmentProcess/>
     <ServiseIncludeDev/>
     <Technologies/>
     <OnlinePresence/>
      <Faq />
            </main>
        </Layout>
    );
}

export default WebsiteDevelopment;
