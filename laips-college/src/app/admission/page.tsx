"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { admissionFormSchema } from "@/schemas/admissionForm";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Admission() {
  const form = useForm<z.infer<typeof admissionFormSchema>>({
    resolver: zodResolver(admissionFormSchema),
    defaultValues: {
      name: "",
      mobileNo: "",
      email: "",
      address: "",
      course: undefined,
    },
  });
  const handleSubmit = (values: z.infer<typeof admissionFormSchema>) => {
    console.log({ values });
  };
  return (
    <>
      <Banner name="Admission" shortDesc="Admissions Open" />
      <div className="container flex flex-col md:flex-row justify-between my-24 gap-10">
        <div className="basis-1/2">
          <h2 className="text-2xl mb-4 font-light">
            Welcome to <strong>LAIPS!</strong>
          </h2>
          <p className="w-full text-xl">
            Thank you for your interest in joining our community. Please
            complete this admission form with accurate and up-to-date
            information. Your responses will help us process your application
            efficiently and effectively. We look forward to reviewing your
            application and potentially welcoming you to our institution.
          </p>
        </div>
        <div className=" basis-1/2 border border-gray-300 rounded-md  p-5">
          <span className="text-red-500 text-xs text-right block">
            * All field required.
          </span>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className=" w-full flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Name <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Name" type="text" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="mobileNo"
                render={({ field }) => {
                  return (
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
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Email <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Email." type="email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Address <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea {...field} placeholder="Address" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel className="font-semibold">
                        Course <span className="text-red-500 text-xs">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="MBA">MBA</SelectItem>
                            <SelectItem value="LAW">LAW</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="w-1/2">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
