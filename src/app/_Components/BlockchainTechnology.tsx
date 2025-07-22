import Image from 'next/image';

const logos = [
  { src: '/images/Platforms1 1.svg', alt: 'Polygon Logo' },
  { src: '/images/Platforms6 1.svg', alt: 'Telos Logo' },
  { src: '/images/Platforms5 1.svg', alt: 'Celo Logo' },
  { src: '/images/Platforms4 1.svg', alt: 'EOS Logo' },
  { src: '/images/Platforms9 1.svg', alt: 'XinFin Logo' },
  { src: '/images/Platforms8 1.svg', alt: 'Aurora Logo' },
  { src: '/images/Platforms12 1.svg', alt: 'Ethereum Logo' },
  { src: '/images/Platforms2 1.svg', alt: 'Solana Logo' },
  { src: '/images/Platforms7 1.svg', alt: 'Avalanche Logo' },
  { src: '/images/Platforms3 1.svg', alt: 'Cardano Logo' },
];

export default function BlockchainTechnology() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex flex-col md:flex-row justify-between items-center md:mb-12">
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="text-[30px] md:text-[42px] font-extrabold mb-4 font-raleway">
            Get Started with
           <span className="bg-gradient-to-r from-[#5598F7] to-[#5D3DAF] bg-clip-text text-transparent"> Blockchain Technology</span>
          </h1>
          <p className="text-gray-600 text-[12px] md:text-[16px] font-raleway">
            Ready to take the leap into blockchain? Whether you want to build a new blockchain
            application, integrate blockchain into your existing system, or explore decentralized
            finance solutions, PlacerIT is here to help. Contact us today for a consultation and let
            us show you how blockchain can transform your business!
          </p>
        </div>
        <div className="mt-5 md:mt-0 w-40 h-40 relative  animate-[bounce_4s_infinite]">
          <Image
            src="/images/Group 328.svg"
            alt="Blockchain Icon"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {logos.map(({ src, alt }) => (
          <div
            key={alt}
            className="bg-white rounded-lg shadow p-4 flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Image src={src} alt={alt} width={90} height={90} />
          </div>
        ))}
      </div>
    </div>
  );
}
