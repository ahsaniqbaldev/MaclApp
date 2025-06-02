import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Swal from "sweetalert2";
import { postCustomerLogin, postCustomerSignup } from "../API/Api";
import { CircularProgress } from "@mui/material";
import ForgotPasswordModal from "./ForgotPasswordModal";

const AuthModal = ({ isOpen, onClose }) => {
  const [signup, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [showForgotModal, setShowForgotModal] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignupForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await postCustomerSignup(userData);
      console.log("customer response", response.data);
      if (response.status === 201) {
        Swal.fire({
          title: "Account Created Successfully!",
          text: "You can now log in to your account.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#006A5A",
        }).then(() => {
          setUserData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            country: "",
            zip: "",
          });
        });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      Swal.fire({
        title: "Signup Failed",
        text: "Please check your details and try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#D33",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSigninForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await postCustomerLogin(userData);

      if (response.status === 200) {
        const token = response.data.data.token;
        localStorage.setItem("token", token);

        Swal.fire({
          title: "Login Successful!",
          text: "Welcome back to our platform.",
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "#006A5A",
        }).then(() => {
          setUserData({
            email: "",
            password: "",
          });
          onClose();
        });
      }
    } catch (error) {
      console.error("Error during signin:", error);
      Swal.fire({
        title: "Login Failed",
        text: "Please check your email and password and try again.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#D33",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
      <div className="relative w-full h-[55%] sm:h-auto sm:max-w-lg max-w-sm overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 mx-4 sm:mx-0 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
          {signup ? "Create an Account" : "Welcome Back!"}
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          {signup
            ? "Join us and start your journey today!"
            : "Login to continue your journey!"}
        </p>

        <form
          onSubmit={signup ? handleSignupForm : handleSigninForm}
          className="space-y-4"
        >
          {signup && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                placeholder="John"
                name="firstName"
                value={userData.firstName}
                onChange={handleInputChange}
              />
              <Input
                label="Last Name"
                placeholder="Doe"
                name="lastName"
                value={userData.lastName}
                onChange={handleInputChange}
              />
            </div>
          )}

          <Input
            type="email"
            label="Email"
            placeholder="example@mail.com"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />

          <div className="grid grid-cols-1">
            <Input
              type="password"
              label="Password"
              placeholder="********"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
            />
          </div>

          {signup && (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <PhoneInput
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006A5A] focus:outline-none text-sm placeholder-gray-400"
                    placeholder="+123456789"
                    name="phone"
                    value={userData.phone}
                    onChange={(value) =>
                      setUserData((prev) => ({ ...prev, phone: value }))
                    }
                  />
                </div>
                <Input
                  label="Address"
                  placeholder="123 Street Name"
                  name="address"
                  value={userData.address}
                  onChange={handleInputChange}
                />
                <Input
                  label="City"
                  placeholder="City"
                  name="city"
                  value={userData.city}
                  onChange={handleInputChange}
                />
                <Input
                  label="State"
                  placeholder="State"
                  name="state"
                  value={userData.state}
                  onChange={handleInputChange}
                />
                <Input
                  label="Country"
                  placeholder="Country"
                  name="country"
                  value={userData.country}
                  onChange={handleInputChange}
                />
                <Input
                  label="Zip Code"
                  placeholder="000000"
                  name="zip"
                  value={userData.zip}
                  onChange={handleInputChange}
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#006A5A] text-white font-semibold rounded-full hover:bg-[#007F6B] transition hover:cursor-pointer"
          >
            {loading ? (
              <CircularProgress size={24} className="text-white" />
            ) : signup ? (
              "Sign Up"
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Or Divider */}
        <div className="flex items-center justify-center my-4 gap-2 text-gray-400 text-sm">
          <div className="h-px bg-gray-300 flex-1" />
          <span>OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* Social Logins */}
        <div className="flex justify-center gap-4 mb-4">
          <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg text-sm hover:bg-gray-100 transition hover:cursor-pointer">
            <img
              src="../../imgs/googleLogoForm.png"
              alt="Google"
              className="w-5 h-5"
            />
            Google
          </button>
          <button className="flex items-center gap-2 border border-gray-300 px-2 py-1 rounded-lg text-sm hover:bg-gray-100 transition hover:cursor-pointer">
            <img
              src="../../imgs/facebookLogoForm.png"
              alt="Facebook"
              className="w-5 h-5"
            />
            Facebook
          </button>
        </div>

        {!signup && (
          <div className="text-center text-sm mt-3">
            <button
              className="text-[#006A5A] hover:underline"
              onClick={() => setShowForgotModal(true)}
            >
              Forgot Password?
            </button>
          </div>
        )}

        <ForgotPasswordModal
          open={showForgotModal}
          onClose={() => setShowForgotModal(false)}
        />

        <div className="text-center text-sm">
          {signup ? (
            <span>
              Already have an account?{" "}
              <button
                onClick={() => setSignup(false)}
                className="text-[#006A5A] hover:underline hover:cursor-pointer"
              >
                Login
              </button>
            </span>
          ) : (
            <span>
              Don’t have an account?{" "}
              <button
                onClick={() => setSignup(true)}
                className="text-[#006A5A] hover:underline hover:cursor-pointer"
              >
                Sign up
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export const Input = ({
  label,
  placeholder,
  type = "text",
  name,
  value,
  onChange,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#006A5A] focus:outline-none text-sm placeholder-gray-400"
      required
    />
  </div>
);

export default AuthModal;
