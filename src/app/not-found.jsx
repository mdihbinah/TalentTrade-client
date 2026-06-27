import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-950 via-purple-800 to-purple-600 px-4">

      <div className="text-center">

        {/* 404 */}
        <h1 className="
          text-8xl
          font-extrabold
          text-purple-200
          drop-shadow-lg
        ">
          404
        </h1>


        {/* Title */}
        <h2 className="
          mt-4
          text-4xl
          font-bold
          text-white
        ">
          Page Not Found
        </h2>


        {/* Description */}
        <p className="
          mt-4
          text-purple-100
          max-w-md
          mx-auto
        ">
          Sorry, the page you are looking for does not exist or may have been moved.
        </p>


        {/* Button */}
        <Link href="/">
          <button
            className="
              mt-8
              px-8
              py-3
              bg-purple-500
              text-white
              font-semibold
              rounded-xl
              shadow-lg
              hover:bg-purple-400
              transition
              duration-300
            "
          >
            Back To Home
          </button>
        </Link>


        {/* Decorative circle */}
        <div className="
          mt-10
          mx-auto
          w-24
          h-24
          rounded-full
          bg-purple-400/20
          animate-pulse
        "></div>

      </div>

    </div>
  );
}