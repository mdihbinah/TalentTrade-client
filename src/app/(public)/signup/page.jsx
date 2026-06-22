'use client'
import { authClient } from '@/app/lib/auth-client';
import { Description, FieldError, Input, Label, TextField, Select, ListBox, } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';

const SignUP = () => {
  const router = useRouter()

  const handleSignUp = async(e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries())
    console.log('Form submitted with:', userData);

    const {data, error} = await authClient.signUp.email({
      name: userData.name,
      image: userData.photolink,
      email: userData.email,
      password: userData.password,
      role: userData.role,
      callbackURL: '/signin'
    })
    console.log('Sign up response:', {data, error});
    
    if(error){
        toast.error('Error Sign Up:' + error.message, {
        position: "top-center",
        autoClose: 2000,
        theme: "light",
        });
    }
    if(data){
      router.push('/signin')
    }
  }


  
  const handleGoogleSignUp = async() => {
    const data = await authClient.signIn.social({
      provider: 'google',
    })
  }
    return (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center px-4">
    
    <div className="hero">
      <div className="hero-content flex-col w-full">

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-extrabold text-purple-700">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Join TalentTrade and start your freelancing journey
          </p>
        </div>

        {/* Card */}
        <div className="card w-full max-w-md bg-white shadow-2xl border border-purple-100 rounded-2xl">
          <div className="card-body">

            <form onSubmit={handleSignUp}>
              <fieldset className="fieldset space-y-2">

                <label className="label font-semibold text-purple-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your name"
                />

                <label className="label font-semibold text-purple-700">Photo URL</label>
                <input
                  type="text"
                  name="photolink"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Profile photo link"
                />

                <label className="label font-semibold text-purple-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                  placeholder="Enter your email"
                />

                {/* Password */}
                <div className="mt-2">
                  <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                      if (value.length < 8) {
                        return "Password must be at least 8 characters";
                      }
                      if (!/[A-Z]/.test(value)) {
                        return "Must contain 1 uppercase letter";
                      }
                      if (!/[a-z]/.test(value)) {
                        return "Must contain 1 lowercase letter";
                      }
                      return null;
                    }}
                  >
                    <Label className="font-semibold text-purple-700">
                      Password
                    </Label>

                    <Input
                      className="input input-bordered w-full focus:ring-2 focus:ring-purple-400"
                      placeholder="Enter strong password"
                    />

                    <Description className="text-xs text-gray-500">
                      Min 8 chars, 1 uppercase, 1 lowercase
                    </Description>

                    <FieldError className="text-red-500 text-sm" />
                  </TextField>
                </div>

                <div className="space-y-2">
  <label className="label font-semibold text-purple-700">
    Signup As
  </label>

  <select
    name="role"
    type="role"
    required
    className="select select-bordered w-full focus:border-purple-500 focus:outline-none"
  >
    <option value="">Select Role</option>
    <option value="buyer">Client</option>
    <option value="seller">Freelancer</option>
  </select>
</div>



                {/* Submit */}
                <button
                  type="submit"
                  className="btn w-full mt-5 bg-purple-600 hover:bg-purple-700 text-white border-none transition-all duration-200 shadow-md"
                >
                  Sign Up
                </button>
              </fieldset>
            </form>

            {/* Links */}
            <p className="text-center mt-4 text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/signin"
                className="text-purple-700 font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>

            {/* Divider */}
            <div className="divider text-purple-400">OR</div>

            {/* Google */}
            <button
              onClick={handleGoogleSignUp}
              className="btn w-full bg-white border-2 border-purple-300 hover:bg-purple-100 text-gray-700 flex items-center gap-3"
            >
              <FcGoogle className="text-xl" />
              Continue with Google
            </button>

          </div>
        </div>

      </div>
    </div>
  </div>
);
};

export default SignUP;