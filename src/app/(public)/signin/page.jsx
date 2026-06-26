'use client'
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { authClient } from '../../lib/auth-client';
import { useRouter } from 'next/navigation';

const SignInPage = () => {
  const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const userData = Object.fromEntries(formData.entries())
    console.log('form data', userData);
    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      // callbackURL: '/'
    })

    if (error) {
      toast.error('Sign in Error:' + error.message, {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
    } else if (data) {
      console.log();
      toast.success('Sign In Successful ', {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
      });
      // console.log(data, data.user.role);
      if (data?.role?.role == 'client'){
        router.push('/')
      } else {
        router.push(`/dashboard/${data?.user?.role}`)
      }
    }

  }

  const handleGoogleLogIn = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    })
  }


  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-purple-100 px-4">

      <div className="hero-content flex-col w-full max-w-md">

        {/* Title */}
        <div className="text-center mb-4">
          <h1 className="text-4xl font-extrabold text-purple-700">
            Welcome Back
          </h1>
          <p className="text-gray-500 mt-2">
            Login to continue your TalentTrade journey
          </p>
        </div>

        {/* Card */}
        <div className="card w-full bg-white shadow-2xl border border-purple-100 rounded-2xl">
          <div className="card-body">

            <form onSubmit={handleLogin}>
              <fieldset className="fieldset space-y-3">

                {/* Email */}
                <label className="label font-semibold text-purple-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                {/* Password */}
                <label className="label font-semibold text-purple-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Enter your password"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                />

                {/* Button */}
                <button
                  className="btn w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md transition-all duration-300"
                >
                  Login
                </button>

              </fieldset>
            </form>

            {/* Signup link */}
            <p className="text-center text-sm mt-4 text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="text-purple-600 font-bold hover:underline"
              >
                Sign Up
              </Link>
            </p>

            {/* Divider */}
            <div className="divider text-gray-400">OR</div>

            {/* Google Login */}
            <button
              onClick={handleGoogleLogIn}
              className="btn w-full flex items-center justify-center gap-3 bg-white border-2 border-purple-300 hover:bg-purple-100 transition-all duration-300"
            >
              <FcGoogle className="text-xl" />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default SignInPage;