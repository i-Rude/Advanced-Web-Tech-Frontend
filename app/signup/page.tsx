"use client";

import { useState } from "react";
import Link from "next/link";
import axios from 'axios';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    role: "customer", // Default role
  });
  
  const [errors, setErrors] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    serverError: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors: any = {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      serverError: ""
    };

    // only letters and spaces allowed
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full name is required";
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullname.trim())) {
      newErrors.fullname = "Full name can only contain letters and spaces";
      isValid = false;
    }

    // minimum 3 characters
    if (formData.username.trim().length < 3) {
      newErrors.username = "Username must be at least 3 characters";
      isValid = false;
    }

    // Email validation - must be an AIUB email address
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if (!/^[A-Za-z0-9._%+-]+@aiub\.edu$/.test(formData.email.trim())) {
      newErrors.email = "Please use your AIUB email address (@aiub.edu)";
      isValid = false;
    }

    // required and must be exactly 11 digits
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{11}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 11 digits";
      isValid = false;
    }

    // minimum 8 characters
    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // match with password
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors(prev => ({ ...prev, serverError: "" }));
    
    if (validateForm()) {
      setLoading(true);
      try {
        const userData = {
          fullname: formData.fullname,
          username: formData.username,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          role: formData.role
        };

        await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`, userData);
        setSubmitSuccess(true);

        setFormData({
          fullname: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
          role: "customer"
        });
      } catch (error: any) {
        console.error("Signup failed:", error);
        if (error.response && error.response.data) {
          const serverErrors = error.response.data;
          if (serverErrors.message) {
            setErrors(prev => ({ 
              ...prev, 
              serverError: Array.isArray(serverErrors.message) 
                ? serverErrors.message[0] 
                : serverErrors.message 
            }));
          }
        } else {
          setErrors(prev => ({ ...prev, serverError: "An error occurred during sign up. Please try again." }));
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-md mx-auto px-4 sm:px-6">
        <h1 className="text-xl font-semibold mb-1">Create Account</h1>
        <p className="text-sm text-black/70 mb-6">
          Sign up to start shopping and manage your orders.
        </p>
        
        {submitSuccess ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="mt-2 text-xl font-medium text-black">Registration Successful!</h3>
              <p className="mt-1 text-sm text-gray-600">
                Thank you for creating an account. Please check your email to verify your account.
              </p>
              <div className="mt-6">
                <Link href="/login" 
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800"
                >
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {errors.serverError && (
              <div className="mb-4 bg-gray-100 border border-gray-300 text-black p-3 rounded-md">
                {errors.serverError}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-black">Full Name</label>
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={formData.fullname}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.fullname ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                />
                {errors.fullname && <p className="mt-2 text-sm text-red-600">{errors.fullname}</p>}
              </div>

              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-black">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                />
                {errors.username && <p className="mt-2 text-sm text-red-600">{errors.username}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">Email address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                />
                {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                />
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black">Confirm Password</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                />
                {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 disabled:opacity-50"
                >
                  {loading ? "Creating Account..." : "Sign Up"}
                </button>
              </div>
            </form>

            <div className="text-sm text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-black hover:text-gray-700">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
