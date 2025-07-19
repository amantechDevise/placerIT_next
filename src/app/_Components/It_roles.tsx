// components/IT_Roles.tsx
const IT_Roles = () => {
    const roles = [
        "Designer",
        "Developer",
        "Digital Marketing",
        "QA Staffing",
        "Human Resources (HR)",
        "IT Sales",
    ];

    return (
        <section className="py-16 px-6 md:px-20 bg-white text-center">
            <h2 className="text-3xl md:text-[40px] font-extrabold text-gray-900">
                We Staff IT Roles Across
            </h2>

            <h3 className="text-3xl md:text-[40px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] mt-1">Any Industry</h3>

            <p className="text-gray-600 mt-4 max-w-6xl mx-auto text-[12px] md:text-[16px]">
                <span className="font-semibold text-gray-800">PlacerIT</span> is an IT staffing company with more than 24 years of experience. You name it, we’ve staffed it before—and we’d love to find great people for you, too. With a dedicated team of tech recruiters leveraging proprietary AI-enabled recruiting tools, we can find qualified candidates in as few as two days. Even the unicorns who aren’t looking for a new role…yet. Then we engage, retain, and develop them through our exclusive consultant care model. Explore some of the key roles we staff.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 max-w-5xl mx-auto">
                {roles.map((role, index) => (
                    <div
                        key={index}
                        className="border-2 rounded-lg py-4 px-6 flex justify-between items-center hover:shadow-lg transition"
                    >
                        <span className="md:text-[20px] text-[14px] font-bold font-raleway">{role}</span>
                        <img src="/images/Arrow 1.png" alt="" />
                    </div>
                ))}
            </div>

            <button className="mt-10 bg-gradient-to-r from-[#5D3DAF] to-[#5598F7] text-white font-semibold py-2 px-6 rounded transition">
                More Industries
            </button>
        </section>
    );
};

export default IT_Roles;
