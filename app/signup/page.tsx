import SignupForm from "@/components/SignupForm";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4">
      
      {/* HERO */}
      <div className="w-full max-w-5xl rounded-xl bg-gradient-to-r from-[#9b1c23] via-[#6b3b5a] to-[#0d5c7f] text-white py-10 px-6 text-center mt-6">
        <div className="flex justify-center mb-4">
          <div className="bg-[#9b1c23] rounded-full p-4">
            <img
              src="/idfc-logo2.png"
              alt="IDFC FIRST Bank"
              className="w-10 h-10"
            />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold">
          IDFC FIRST Bank
        </h1>
        <p className="mt-2 text-sm md:text-base">
          Welcome to IDFC Card Portal
        </p>
        <p className="text-xs mt-1 opacity-90">
          Trusted. Secure. Instant Access.
        </p>
      </div>

      {/* TITLE */}
      <div className="text-center mt-8">
        <h2 className="text-xl font-semibold text-[#9b1c23]">
          Let’s set up your account
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Fill in your personal details below to get started.
        </p>
        <p className="text-sm mt-2">Card Activation</p>
      </div>

      {/* FORM */}
      <SignupForm />
    </div>
  );
}
