import Layout from "../_common/Layout";
import CompanyRecognition from "../_Components/CompanyRecognition";
import Faq from "../_Components/Fqa";
import IT_Roles from "../_Components/It_roles";
import ProfessionalStaff from "../_Components/ProfessionalStaff";
import TechGapPage from "../_Components/Techgap";
import TrustedBy from "../_Components/TrustdBy";

function IT_Staff() {
    return (
        <Layout>
            <main className="relative w-full h-full">
                <div className="relative w-full h-[600px] md:h-[750px] md:pb-[120px] overflow-hidden">
                    {/* Background Video */}
                    <img
                        className="absolute inset-0 w-full h-full object-cover opacity-100"
                        src="/images/Group 439.webp"
                    />


                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                        <h1 className="text-2xl md:text-[50px] font-bold font-raleway text-white leading-tight md:mb-[20px] mb-0 ">
                            Your Trusted Partner for <br />
                            IT Staffing and Services
                        </h1>
                        <p className="text-white md:w-3xl mt-10 text-[12px] md:text-[16px] text-center">
                           As a staffing agency, PlacerIT can find you the best candidates for any job or field in as little as two days thanks to its
knowledge, experience, and network. We can also find great people from 50+ countries and
access top international talent. queries?



                        </p>
                        <br />
                        <p className="text-[12px] md:text-[16px] text-white"> Call us toll-free: +1 123 456 7890</p>

                        <div className="flex gap-4 mt-6">
                            <button className="bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] text-white px-6 py-2 rounded-md font-medium shadow-md">
                                Let's Connect
                            </button>
                            <button className="bg-transparent border border-white text-white px-6 py-2 rounded-md font-medium shadow-md hover:bg-white hover:text-[#5D3DAF] transition">
                                Get Started
                            </button>
                        </div>

                    </div>


                </div>
                <TrustedBy />
                <IT_Roles />
                <ProfessionalStaff />
                <TechGapPage />
                <CompanyRecognition/>
                 <Faq />
            </main>
        </Layout>
    );
}

export default IT_Staff;
