import axios from "axios";
import API_CONFIG from "./apiConfig";

const { apiKey } = API_CONFIG;

const api = axios.create({
  baseURL: apiKey,
});

//POST API for become a cook
export const becomeACook = (data) => {
  return api.post("/register-chef", data);
};

//GET API for Menu Items
export const getAllMenu = () => {
  return api.get("/get-menu");
};

//GET API for Deal Items
export const getAllDeals = () => {
  return api.get("/get-deal");
};
//POST API for Customer Signup
export const postCustomerSignup = (data) => {
  return api.post("/add-customer", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
//POST API for Login
export const postCustomerLogin = (data) => {
  return api.post("/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
//POST API for Email Verification
export const postEmailVerification = (data) => {
  return api.post("/forget-password", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
//POST API for OTP
export const postOTP = (data) => {
  return api.post("/verify-reset-code", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
//PUT API for Reset Password
export const UpdatePassword = (data) => {
  return api.put("/reset-password", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
