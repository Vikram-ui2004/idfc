"use client";

import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, CreditCard } from "lucide-react";

import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();

    const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    dob: "",
    cardLimit: "", // ✅ added
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value.trimStart(),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        throw new Error("Signup failed");
      }

      router.push("/dashboard");
    } catch (error) {
      alert("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow-sm p-6 mt-6">
      <h3 className="flex items-center gap-2 font-medium mb-6">
        🔒 Personal Information
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          icon={User}
          name="fullName"
          placeholder="Full Name *"
          maxLength={50}
          pattern="^[A-Za-z\s]+$"
          title="Only letters and spaces allowed"
          onChange={handleChange}
        />

        <Input
          icon={Mail}
          name="email"
          placeholder="Email Address *"
          type="email"
          maxLength={100}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          onChange={handleChange}
        />

        <Input
          icon={Phone}
          name="mobile"
          placeholder="Mobile Number *"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          pattern="^[6-9]\d{9}$"
          title="Enter a valid 10-digit mobile number"
          onChange={handleChange}
        />

        <Input
          icon={MapPin}
          name="city"
          placeholder="City *"
          maxLength={30}
          pattern="^[A-Za-z\s]+$"
          title="Only letters allowed"
          onChange={handleChange}
        />

        <Input
          icon={Calendar}
          name="dob"
          type="date"
          max={new Date().toISOString().split("T")[0]}
          onChange={handleChange}
        />


        <Input
          icon={CreditCard}
          name="cardLimit"
          placeholder="Card Limit (₹)"
          inputMode="numeric"
          maxLength={7}
          pattern="^\d+$"
          title="Enter card limit in numbers only"
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-[#9b1c23] text-white py-3 rounded-lg font-medium hover:bg-[#7f161c] transition disabled:opacity-60"
        >
          {loading ? "Processing..." : "Continue Securely →"}
        </button>
      </form>

      <div className="text-center text-xs text-gray-500 mt-6">
        <p>🔒 Your information is encrypted and protected.</p>
        <p className="mt-1">We use bank-grade 256-bit SSL security.</p>
      </div>
    </div>
  );
}

/* Input Component */
function Input({
  icon: Icon,
  name,
  placeholder,
  type = "text",
  onChange,
  maxLength,
  pattern,
  title,
  inputMode,
  max,
}: {
  icon: any;
  name: string;
  placeholder?: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  pattern?: string;
  title?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  max?: string;
}) {
  return (
    <div className="flex items-center gap-3 border rounded-lg px-4 py-3 bg-gray-50">
      <Icon size={18} className="text-gray-500" />
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
        maxLength={maxLength}
        pattern={pattern}
        title={title}
        inputMode={inputMode}
        max={max}
        className="w-full bg-transparent outline-none text-sm"
      />
    </div>
  );
}
