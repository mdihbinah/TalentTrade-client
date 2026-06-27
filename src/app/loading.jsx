export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-red-600">

      <div className="flex flex-col items-center gap-5">

        {/* Animated Spinner */}
        <div className="relative w-20 h-20">
          <div className="
            absolute inset-0
            rounded-full
            border-4
            border-purple-300
            border-t-red-500
            animate-spin
          "></div>

          <div className="
            absolute inset-3
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-red-500
            animate-pulse
          "></div>
        </div>


        {/* Text */}
        <h1 className="
          text-3xl 
          font-bold 
          text-white
          tracking-wide
        ">
          Loading...
        </h1>


        <p className="
          text-purple-100
          text-sm
        ">
          Please wait while we prepare your content
        </p>


        {/* Loading dots */}
        <div className="flex gap-2 mt-2">
          <span className="w-3 h-3 rounded-full bg-red-400 animate-bounce"></span>
          <span className="w-3 h-3 rounded-full bg-purple-300 animate-bounce [animation-delay:200ms]"></span>
          <span className="w-3 h-3 rounded-full bg-red-500 animate-bounce [animation-delay:400ms]"></span>
        </div>

      </div>

    </div>
  );
}