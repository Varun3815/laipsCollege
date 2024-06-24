"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { contactusFormSchema } from "@/schemas/contactUsForm";
import Banner from "@/components/global/Banner";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function Contact() {
  const form = useForm<z.infer<typeof contactusFormSchema>>({
    resolver: zodResolver(contactusFormSchema),
    defaultValues: {
      name: "",
      mobileNo: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof contactusFormSchema>) => {
    console.log({ values });
  };

  return (
    <>
      <Banner name="Contact Us" shortDesc="Submit your query" />
      <div className="container flex flex-col md:flex-row justify-between my-24 gap-10">
        <div className="basis-1/2">
          <p className="w-full text-xl">
            Thank you for your interest in joining our community.
          </p>
          <div className="pt-6 md:-ml-4 md:px-4 md:pt-5 ">
            <div>
              <div className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary mb-4">
                <span className="flex items-center md:text-lg ">
                  <FaLocationPin className="mr-1" /> Jail Road, Teli Kheda,
                  Mhow(Madhya Pradesh), India
                </span>
              </div>
            </div>
            <p>
              <a
                href="mailto:admin@laipscollege.in"
                rel="noreferrer"
                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
              >
                <span className="flex items-center md:text-lg">
                  <FaEnvelope className="mr-1" /> admin@laipscollege.in
                </span>
              </a>
              <a
                href="tel:+917247282851"
                rel="noreferrer"
                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
              >
                <span className="flex items-center md:text-lg">
                  <FaPhone className="mr-1" /> 7247282851
                </span>
              </a>
              <a
                href="https://wa.me/+917247282851"
                rel="noreferrer"
                className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
              >
                <span className="flex items-center md:text-lg">
                  <FaWhatsapp className="mr-1" /> Whatsapp
                </span>
              </a>
            </p>
            <div className="mt-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d471700.747809002!2d75.696118!3d22.535600000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f82a3f748031%3A0x6b9d6f01c406dc5a!2sLittle%20Angels%20Higher%20Secondary%20School%20%2CMhow!5e0!3m2!1sen!2sin!4v1719162690221!5m2!1sen!2sin"
                width="600"
                height="450"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full md:w-[600px]"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="basis-1/2">
          <span className="text-red-500 text-xs text-right block mb-2">
            * All fields required.
          </span>
          <div className="border border-gray-300 rounded-md p-5">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="w-full flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Name <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Name"
                          type="text"
                          aria-label="Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobileNo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Mobile No.{" "}
                        <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Mobile No."
                          type="text"
                          aria-label="Mobile No."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Email <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Email"
                          type="email"
                          aria-label="Email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Address{" "}
                        <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Address"
                          aria-label="Address"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-1/2">
                  Submit
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
