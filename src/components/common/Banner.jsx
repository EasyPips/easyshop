import { Link } from 'react-router-dom';
import banner from '../../assets/banner.jpg';

const Banner = () => {
  return (
    <section className="relative bg-gray-100 overflow-hidden rounded-lg shadow-md mt-6 mx-4 sm:mx-8 md:mx-16">
      <img
        src={banner}
        alt="Sale Banner"
        className="w-full h-48 sm:h-64 md:h-80 object-cover opacity-70"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 py-6">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
          Summer Sale is Here!
        </h1>
        <p className="text-sm sm:text-lg md:text-2xl text-gray-700 mb-4 sm:mb-6">
          Up to 50% off on selected items
        </p>
        <Link
          to="/"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-full text-sm sm:text-base"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
