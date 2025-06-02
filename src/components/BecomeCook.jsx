import { IoMdAddCircle } from "react-icons/io";
import { HiMiniMinusCircle } from "react-icons/hi2";
import React, { useState } from "react";
import { becomeACook } from "../API/Api";
import Swal from "sweetalert2";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CircularProgress } from "@mui/material";

const BecomeCook = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    zipCode: "",
    phoneNumber: "",
    passport: "",
  });
  const [certification, setCertification] = useState([
    {
      title: "",
      file: null,
      issueDate: "",
      documentType: "",
      description: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [certErrors, setCertErrors] = useState([]);

  //Validation of forms
  const validateForm = () => {
    const newErrors = {};
    const newCertErrors = [];
    // Validate basic form fields
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors[key] = "This is a required field";
    });
    // Validate certification fields
    const certFields = [
      "title",
      "issueDate",
      "documentType",
      "file",
      "description",
    ];

    certification.forEach((cert) => {
      const certError = {};
      certFields.forEach((field) => {
        if (!cert[field]) certError[field] = "This is a required field";
      });
      newCertErrors.push(certError);
    });

    setErrors(newErrors);
    setCertErrors(newCertErrors);

    return (
      Object.keys(newErrors).length === 0 &&
      newCertErrors.every((err) => Object.keys(err).length === 0)
    );
  };

  //this all for first form formData useState
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async () => {
    if (!validateForm()) {
      Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "You did not fill all the required fields.",
        confirmButtonText: "Go Back",
        confirmButtonColor: "#006A5A",
      });
      return;
    }

    setIsLoading(true);
    try {
      //append basic form fields
      const submitData = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        submitData.append(key, value);
      });

      //prepare document Meta excluding files
      const documentsMeta = certification.map(
        ({ title, issueDate, documentType, description }) => ({
          title,
          issueDate,
          documentType,
          description,
        })
      );

      //append documents meta as a stringified JSON (Object)
      submitData.append("documentsMeta", JSON.stringify(documentsMeta));

      //append actual file
      certification.forEach((cert) => {
        if (cert.file) {
          submitData.append("documents", cert.file);
        }
      });

      const res = await becomeACook(submitData);
      console.log(res.data);
      Swal.fire({
        title: "Registration Successful!",
        text: "Your application has been submitted.",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#006A5A",
      }).then(() => {
        setStep(1);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          zipCode: "",
          phoneNumber: "",
          passport: "",
        });
        setCertification([
          {
            title: "",
            file: null,
            issueDate: "",
            documentType: "",
            description: "",
          },
        ]);
      });
    } catch (error) {
      console.error("Submission Failed", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Close",
        confirmButtonColor: "#d33",
      }).then(() => {
        setStep(1);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          zipCode: "",
          phoneNumber: "",
          passport: "",
        });
        setCertification([
          {
            title: "",
            file: null,
            issueDate: "",
            documentType: "",
            description: "",
          },
        ]);
      });
    } finally {
      setIsLoading(false);
    }
  };

  // this all for 2nd form cert useState
  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleCertChange = (index, field, value) => {
    const updated = [...certification];
    updated[index][field] = value;
    setCertification(updated);
  };

  const handleAddCert = () => {
    setCertification([
      ...certification,
      {
        title: "",
        file: null,
        issueDate: "",
        documentType: "",
        description: "",
      },
    ]);
  };

  const handleRemoveCert = (index) => {
    const updated = certification.filter((_, i) => i !== index);
    setCertification(updated);
  };

  return (
    <>
      <div className="py-0 md:py-[5rem] lg:py-[10rem] bg-[url('../../imgs/Vegetables.jpg')] bg-cover bg-center bg-no-repeat w-ful overflow-hidden text-white">
        <div className="container mx-auto lg:max-w-5xl md:max-w-2xl max-w-[20rem]">
          {step === 1 && (
            <div className="py-2 lg:py-10 text-center flex flex-col justify-center items-center">
              <h1 className="md:text-4xl text-2xl font-bold mb-2">
                Turn Your Passion for Cooking into a Thriving Business!
              </h1>
              <p className="md:text-xl text-sm font-medium">
                Let us handle the logistics, while you focus on creating
                delicious meals
              </p>
            </div>
          )}
          {step === 1 && (
            <form className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full md:gap-8 gap-1">
              {/* first name */}
              <div>
                <label className="text-sm md:text-base">First Name :</label>
                <input
                  name="firstName"
                  placeholder="First Name"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  id="firstName"
                  className="px-5 border-1 text-black border-black bg-white rounded-xl sm:w-[20rem] w-[20rem] sm:h-[3rem] h-[2rem] focus:outline-[#006A5A] placeholder:text-gray-600"
                  required
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">{errors.firstName}</p>
                )}
              </div>

              {/* lastName */}
              <div>
                <label className="text-sm md:text-base">Last Name :</label>
                <input
                  name="lastName"
                  placeholder="Last Name"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  id="lastName"
                  className="px-5 border-1 text-black border-black bg-white rounded-xl sm:w-[20rem] w-[20rem] sm:h-[3rem] h-[2rem] focus:outline-[#006A5A] placeholder:text-gray-600"
                  required
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">{errors.lastName}</p>
                )}
              </div>

              {/* email */}
              <div>
                <label className="text-sm md:text-base">Email :</label>
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  id="email"
                  className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem] focus:outline-[#006A5A] placeholder:text-gray-600"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              {/* password */}
              <div>
                <label className="text-sm md:text-base">Password :</label>
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  id="password"
                  className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem] focus:outline-[#006A5A] placeholder:text-gray-600"
                  required
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                )}
              </div>

              {/* zip code */}
              <div>
                <label className="text-sm md:text-base">Zip Code :</label>
                <input
                  name="zipCode"
                  placeholder="Zip Code"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  id="zipCode"
                  className="no-spinner px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem] focus:outline-[#006A5A] placeholder:text-gray-600"
                  required
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-sm">{errors.zipCode}</p>
                )}
              </div>

              {/* phone number */}
              <div>
                <label className="text-sm md:text-base">Phone Number :</label>
                <PhoneInput
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, phoneNumber: value }))
                  }
                  id="phoneNumber"
                  className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem] focus:outline-[#006A5A] placeholder:text-gray-600"
                  required
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Passport/National ID */}
              <div>
                <label className="text-sm md:text-base">
                  Passport/National ID :
                </label>
                <input
                  name="passport"
                  placeholder="Passport/National ID"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={formData.passport}
                  onChange={handleInputChange}
                  id="passport"
                  className="no-spinner px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem] focus:outline-[#006A5A] placeholder:text-gray-600"
                  required
                />
                {errors.passport && (
                  <p className="text-red-500 text-sm">{errors.passport}</p>
                )}
              </div>
            </form>
          )}
          {step === 1 && (
            <div className="text-center py-3 md:py-10">
              <button
                onClick={handleNext}
                type="submit"
                className="bg-[#006A5A] text-white md:px-[3rem] md:py-[0.5rem] px-[2rem] py-[0.3rem] md:text-base text-[15px] rounded-full hover:bg-[#006a5abb] hover:cursor-pointer"
              >
                Next
              </button>
            </div>
          )}

          {/* Step 2 */}

          {step === 2 && (
            <div className="py-2 lg:py-10 text-center flex flex-col justify-center items-center">
              <h1 className="md:text-4xl text-2xl font-bold mb-2">
                Upload Required Documents
              </h1>
              <p className="md:text-xl text-sm font-medium">
                Upload necessary documents for verification and approval.
              </p>
            </div>
          )}
          {step === 2 && (
            <form className="grid grid-cols-1 w-full gap-4">
              {certification.map((cert, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-end"
                >
                  <div>
                    <label className="text-sm md:text-base">
                      Document Title :
                    </label>
                    <input
                      name="documentTitle"
                      placeholder="Document Title"
                      type="text"
                      value={cert.title}
                      onChange={(e) =>
                        handleCertChange(index, "title", e.target.value)
                      }
                      id="certicate-title"
                      className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem]  focus:outline-[#006A5A] placeholder:text-gray-600"
                      required
                    />
                    {certErrors[index]?.title && (
                      <p className="text-red-500 text-sm">
                        {certErrors[index]?.title}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm md:text-base">
                      Upload Document :
                    </label>
                    <input
                      name="file"
                      type="file"
                      onChange={(e) =>
                        handleCertChange(index, "file", e.target.files[0])
                      }
                      id="upload-certificate"
                      className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] file:sm:h-[3rem] file:h-[2rem] file:text-gray-600"
                      required
                    />
                    {certErrors[index]?.file && (
                      <p className="text-red-500 text-sm">
                        {certErrors[index]?.file}
                      </p>
                    )}

                    {cert.file && (
                      <p className="text-sm text-gray-200 mt-1">
                        Selected: {cert.file.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm md:text-base">Issue Date :</label>
                    <input
                      name="issueDate"
                      placeholder="Issue Date"
                      type="date"
                      value={cert.issueDate}
                      onChange={(e) =>
                        handleCertChange(index, "issueDate", e.target.value)
                      }
                      id="issueDate"
                      className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem]  focus:outline-[#006A5A] placeholder:text-gray-600"
                      required
                    />
                    {certErrors[index]?.issueDate && (
                      <p className="text-red-500 text-sm">
                        {certErrors[index]?.issueDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm md:text-base">
                      Document Type :
                    </label>
                    <input
                      name="documentType"
                      placeholder="Document Type"
                      type="text"
                      value={cert.documentType}
                      onChange={(e) =>
                        handleCertChange(index, "documentType", e.target.value)
                      }
                      id="documentType"
                      className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem]  focus:outline-[#006A5A] placeholder:text-gray-600"
                      required
                    />
                    {certErrors[index]?.documentType && (
                      <p className="text-red-500 text-sm">
                        {certErrors[index]?.documentType}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row items-end gap-2">
                    <div>
                      <label className="text-sm md:text-base">
                        Description :
                      </label>
                      <input
                        name="description"
                        placeholder="Tell briefly about your certificate..."
                        type="text"
                        value={cert.description}
                        onChange={(e) =>
                          handleCertChange(index, "description", e.target.value)
                        }
                        id="description"
                        className="px-5 border-1 text-black border-black bg-white rounded-xl w-[20rem] sm:h-[3rem] h-[2rem]  focus:outline-[#006A5A] placeholder:text-gray-600"
                        required
                      />
                      {certErrors[index]?.description && (
                        <p className="text-red-500 text-sm">
                          {certErrors[index]?.description}
                        </p>
                      )}
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        onClick={handleAddCert}
                        className="text-3xl sm:text-5xl hover:text-emerald-500 hover:cursor-pointer"
                      >
                        <IoMdAddCircle />
                      </button>

                      {certification.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveCert(index)}
                          className="text-3xl sm:text-5xl hover:text-red-500 hover:cursor-pointer"
                        >
                          <HiMiniMinusCircle />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </form>
          )}

          {step === 2 && (
            <div className="my-5 flex justify-between">
              <button
                onClick={handlePrev}
                type="submit"
                className="bg-[#006A5A] text-white md:px-[3rem] md:py-[0.5rem] px-[2rem] py-[0.3rem] md:text-base text-[15px] rounded-full hover:bg-[#006a5abb] hover:cursor-pointer"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={handleFormSubmit}
                className="bg-[#006A5A] text-white md:px-[3rem] md:py-[0.5rem] px-[2rem] py-[0.3rem] md:text-base text-[15px] rounded-full hover:bg-[#006a5abb] hover:cursor-pointer"
              >
                {isLoading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  "Become a Chef"
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BecomeCook;
