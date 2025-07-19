import Layout from "../_common/Layout";
import BlockchainInfo from "../_Components/BlockchainInfo";
import BlockchainServices from "../_Components/BlockchainServices";
import BlockchainTechnology from "../_Components/BlockchainTechnology";
import BlockServicesPage from "../_Components/BlockServicesPage";
import TechnologySolutions from "../_Components/TechnologySolutions";

function Blockchain() {
    return (
        <Layout>
        <main className="relative w-full h-full">
            <div className="relative w-full h-[400px] md:h-[550px] pt-[120px] overflow-hidden">
                {/* Background Video */}
                <img
                    className="absolute inset-0 w-full h-full object-cover opacity-90"
                    src="/images/Group 431.webp"
                />


                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                    <h1 className="text-3xl md:text-[73px] font-regular font-raleway text-white leading-tight md:mb-[100px] mb-0 ">
                        Blockchain <span className="font-semibold ">Technology <br /> Solutions</span>
                    </h1>
                </div>


                <div className="absolute bottom-[-44px] 2xl:bottom-[-222px] xl:bottom-[-155px] lg:bottom-[-133px] md:bottom-[-105px] left-0 w-full z-10">
                    <img src="/images/Shape_4_.svg" alt="" className="w-full object-cover" />
                </div>
            </div>
         <div>
          < TechnologySolutions/> 
         </div>
          <div>
            <BlockchainInfo/>
          </div>
             <div>
            <BlockchainServices/>
          </div>
          <div>
            <BlockServicesPage/>
          </div>
          <div>
            <BlockchainTechnology/>
          </div>
        </main>
        </Layout>
    );
}

export default Blockchain;
