"use client ";
import Link from "next/link";
import { AuthFooter, AuthHeader } from "../../components/auth-layout";
import {
  PasswordField,
  SubmitButton,
  TextField,
} from "../../components/auth-form";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmitForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/auth/otp")
      .then((res) => {
        setLoading(false);
        alert(res.data.message);
        router.push("login/otp?email=${email}");
      })
      .catch(({ response }) => {
        alert(response.message);
      });
  };
  return (
    <>
      <AuthHeader
        title='Welcome back'
        subtitle='Log in to keep ordering your favorite dishes.'
      />

      <form
        onSubmit={handleSubmitForm}
        className='flex flex-col gap-4'
      >
        <TextField
          value={otp}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          id='otp'
          label='OTP'
          type='number'
          placeholder='Enter your otp'
          required
        />

        <SubmitButton loading={loading}>{"Let's Go"}</SubmitButton>
      </form>
    </>
  );
}
