import OTPForm from "@/components/OTPForm";

export default function OTPPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-3xl text-center">
        {/* LOGO */}
        <div className="flex justify-center mb-4">
          <div className="bg-[#9b1c23] rounded-full p-3">
            <span className="text-white font-bold text-sm">IDFC FIRST Bank</span>
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-2xl font-semibold text-[#9b1c23]">
          Secure Verification
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          Please enter the 6-digit OTP sent to your registered number
         
        </p>

        {/* OTP FORM */}
        <OTPForm />
      </div>
    </main>
  );
}