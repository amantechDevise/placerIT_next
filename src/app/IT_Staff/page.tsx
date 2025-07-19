import Layout from "../_common/Layout";
import IT_Roles from "../_Components/It_roles";
import ProfessionalStaff from "../_Components/ProfessionalStaff";
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
            </main>
        </Layout>
    );
}

export default IT_Staff;
