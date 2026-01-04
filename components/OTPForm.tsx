"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OTPForm() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [timer, setTimer] = useState(58);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter(); // ✅ added

  /* Countdown timer */
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  /* Handle input */
  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  /* Handle backspace */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  /* ✅ VERIFY OTP (ADDED) */
  const handleVerify = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      alert("Please enter full OTP");
      return;
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/verify-otp`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ otp: otpValue }),
      }
    );

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Invalid OTP");
    }
  };

  /* ✅ RESEND OTP (ADDED) */
  const handleResend = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/send-otp`, {
      method: "POST",
    });
    setTimer(58);
  };

  return (
    <div className="mt-10">
      {/* OTP INPUTS */}
      <div className="flex justify-center gap-3 sm:gap-6 mb-6">
        {otp.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 sm:w-14 sm:h-14 text-center text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1c23]"
          />
        ))}
      </div>

      {/* RESEND */}
      <p className="text-sm text-gray-500 mb-2">
        Resend available in{" "}
        <span className="text-[#9b1c23] font-medium">
          00:{timer.toString().padStart(2, "0")}
        </span>
      </p>

      <button
        disabled={timer !== 0}
        onClick={handleResend} // ✅ updated
        className="text-[#9b1c23] text-sm font-medium disabled:opacity-40"
      >
        Resend OTP
      </button>

      {/* VERIFY BUTTON */}
      <button
        onClick={handleVerify} // ✅ added
        className="w-full mt-8 bg-[#9b1c23] text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#7f161c] transition"
      >
        <ShieldCheck size={18} />
        Verify Securely
      </button>

      {/* SECURITY NOTE */}
      <div className="mt-6 text-xs text-gray-500 flex flex-col items-center gap-1">
        <Lock size={14} />
        <p>Your OTP is protected by 256-bit encryption.</p>
        <p>We never store your authentication codes.</p>
      </div>
    </div>
  );
}
