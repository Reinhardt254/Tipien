"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { Toaster, toast } from "react-hot-toast";

const messageSchema = z.object({
  name: z.string().min(3, "name should be at least three characters"),
  email: z.string().email(),
  message: z.string().min(1, "please enter a message, it cannot be empty"),
});

type TmessageSchema = z.infer<typeof messageSchema>;

const Contact = () => {
  const [disabled, setIsDisabled] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<TmessageSchema>({
    resolver: zodResolver(messageSchema),
  });

  const scriptURL = process.env.NEXT_PUBLIC_SCRIPT_URL || "";

  const onSubmit = async (data: FieldValues) => {
    setIsDisabled(true);

    // Prepare form data for Google Apps Script
    const formData = new URLSearchParams();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    // Submit the form to Google Apps Script Web App
    try {
      fetch(scriptURL, {
        method: "POST",
        body: formData,
      });
      toast.success("successfully sent");
    } catch (error) {
      toast.error("an error occured");
      console.log(error);
    } finally {
      setIsDisabled(false);
      reset();
    }
  };

  return (
    <main>
      <section className="relative w-full">
        <Image
          src="/tea.jpg"
          height={800}
          width={1600}
          alt="Good looking agricultural products"
          className="w-full h-auto hidden-sm darken"
        />

        <Image
          src="/teamob.jpg"
          height={800}
          width={800}
          alt="Good looking agricultural products"
          className="w-full h-auto hidden-lg darken"
        />

        <div className="absolute inset-center  z-10 text-white bold text-6xl max-sm:text-3xl max-sm:w-screen box-border">
          <h1 className="text-center">CONTACT US</h1>
        </div>
        <div className="home-layout-divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <div>
        <Toaster />
      </div>

      <section className="h-[700px] pb-20 w-full max-sm:h-auto max-sm:pt-10 max-sm:pb-32">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex space-y-4 h-full w-full flex-col justify-center items-center box-border max-sm:px-5"
        >
          <input
            {...register("name")}
            type="name"
            placeholder="name"
            className="px-4 py-3 rounded sm:w-96 bg-gray-300 w-full box-border"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <input
            {...register("email")}
            type="email"
            placeholder="email"
            className="px-4 py-3 rounded sm:w-96 bg-gray-300 w-full box-border"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <textarea
            {...register("message")}
            placeholder="Enter message here"
            className="px-4 py-2 rounded h-60 sm:w-96 bg-gray-300 w-full box-border"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}

          <button
            disabled={disabled}
            type="submit"
            className="disabled:bg-gray-500 text-xl text-center bg-green-700 text-white rounded-md px-5 py-2 max-sm:py-2 max-sm:px-4 max-sm:text-lg hover:bg-white hover:text-green-700 border-2 border-green-700 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
