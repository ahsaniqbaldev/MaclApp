import React, { useState } from "react";
import { Modal } from "@mui/material";
import Swal from "sweetalert2";
import { Input } from "./AuthModal";
import { postEmailVerification, postOTP, UpdatePassword } from "../API/Api";

const ForgotPasswordModal = ({ open, onClose }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendOtp = async () => {
    setLoading(true);
    try {
      console.log("Sending email:", email);
      const res = await postEmailVerification({ email });
      console.log("res", res.data);
      Swal.fire({
        title: "OTP Sent",
        text: "An OTP has been sent to your email",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#006A5A",
        customClass: {
          popup: "z-[2000]",
        },
      });
      setStep(2);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Failed to send OTP.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#D33",
        customClass: {
          popup: "z-[2000]",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      await postOTP({ email, code: otp });
      Swal.fire({
        title: "OTP Verified",
        text: "You can now reset your password",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#006A5A",
        customClass: {
          popup: "z-[2000]",
        },
      });
      setStep(3);
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Invalid OTP. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#D33",
        customClass: {
          popup: "z-[2000]",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmPassword) {
      Swal.fire({
        title: "Error",
        text: "Passwords do not match. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#D33",
        customClass: {
          popup: "z-[2000]",
        },
      });
      return;
    }
    setLoading(true);
    try {
      await UpdatePassword({ email, password: newPassword });
      Swal.fire({
        title: "Password Reset",
        text: "Your password has been reset successfully.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#006A5A",
        customClass: {
          popup: "z-[2000]",
        },
      });
      onClose();
    } catch (err) {
      Swal.fire({
        title: "Error",
        text: "Failed to reset password. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#D33",
        customClass: {
          popup: "z-[2000]",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ zIndex: 1000 }}>
      <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <div className="relative w-full h-auto sm:max-w-lg max-w-sm bg-white rounded-2xl shadow-2xl p-8 mx-4 sm:mx-0 animate-fadeIn">
          {step === 1 && (
            <>
              <h2 className="text-center text-xl font-semibold mb-5">Forgot Password?</h2>
              
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSendOtp}
                className="w-full py-2 bg-[#006A5A] text-white rounded-full my-5"
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="text-xl font-semibold mb-5">Enter OTP</h2>
              <Input
                label="OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={handleVerifyOtp}
                className="w-full py-2 bg-[#006A5A] text-white rounded-full my-5"
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="text-xl font-semibold mb-5">Reset Password</h2>
              <Input
                type="password"
                label="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <Input
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                onClick={handleResetPassword}
                className="w-full py-2 bg-[#006A5A] text-white rounded-full my-5"
              >
                {loading ? "Resetting..." : "Reset Password"}
              </button>
            </>
          )}

          <button
            className="text-sm text-[#006A5A] hover:underline w-full mt-2"
            onClick={() => {
              setStep(1);
              setEmail("");
              setOtp("");
              setNewPassword("");
              setConfirmPassword("");
              onClose();
            }}
          >
            Cancel / Back to Login
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPasswordModal;
