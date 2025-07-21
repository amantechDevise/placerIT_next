import Image from 'next/image';
const logos = [
  { src: '/images/ITimage 1.png', alt: 'Polygon Logo' },
  { src: '/images/ITimage 2.png', alt: 'Telos Logo' },
  { src: '/images/ITimage 3.png', alt: 'Celo Logo' },
  { src: '/images/ITimage 4.png', alt: 'EOS Logo' },
  { src: '/images/ITimage 5.png', alt: 'XinFin Logo' },
  { src: '/images/ITimage 6.png', alt: 'Aurora Logo' },
  { src: '/images/ITimage 7.png', alt: 'Ethereum Logo' },
  { src: '/images/ITimage 8.png', alt: 'Solana Logo' },
];
export default function CompanyRecognition() {
  return (
    <div className="relative bg-[#f9f9f9] py-16 overflow-hidden">
      {/* Left-side Image (Out of Container) */}
      <div className="absolute left-23 top-[36%] -translate-y-1/2 -ml-20 hidden md:block">
        <div className="relative w-88 h-72">
          <img
            src="/images/smiling.png"
            alt="Smiling Woman"
        
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-[30px] md:text-[42px] font-extrabold font-raleway">
            Our Company
            <span className="bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] bg-clip-text text-transparent"> Recognition</span>
          </h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {logos.map(({ src, alt }) => (
            <div
              key={alt}
              className="bg-white rounded-lg shadow p-4 flex items-center justify-center hover:shadow-lg "
            >
              <img src={src} alt={alt} className='w-[70%]' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
