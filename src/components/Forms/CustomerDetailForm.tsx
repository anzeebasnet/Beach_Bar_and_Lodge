"use client";
import { useAppSelector } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";

import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { Button } from "../ui/button";
import { MdPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

const formSchema = z.object({
  firstname: z.string().min(3, {
    message: "First Name must be entered!",
  }),
  lastname: z.string().min(3, {
    message: "Last Name must be entered!",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().refine((value: string) => isValidPhoneNumber(value), {
    message: "Invalid phone number!",
  }),
});

const StyledFormMessage = styled(FormMessage)`
  color: red;
`;

function isValidPhoneNumber(phoneNumber: string): boolean {
  return phoneNumber.replace(/\D/g, "").length >= 10;
}

const CustomerDetailForm = () => {
  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );
  if (!bookingDetails) {
    return <p>No booking details available</p>;
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="">
      {/*Basic Information*/}
      <div className="sm:mx-6 mx-3 sm:my-6 my-10 bg-white">
        <h2 className="font-normal text-2xl border-b border-b-gray-300 text-gray-700 py-6 px-5">
          Customer
        </h2>
        <Form {...form}>
          <form
            className="sm:px-6 px-3 sm:py-6 py-10 "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <p className="text-xs font-medium text-gray-600 mb-4">
              Enter the details of the customer.
            </p>
            <div className="grid grid-cols-2 items-start sm:gap-x-4 gap-x-2 sm:gap-y-5 gap-y-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        className=" font-medium outline-none rounded-none h-10"
                      />
                    </FormControl>
                    <StyledFormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Last Name"
                        {...field}
                        className=" font-medium outline-none rounded-none h-10"
                      />
                    </FormControl>
                    <StyledFormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Phone Number"
                          type="phone number"
                          {...field}
                          className="font-medium outline-none rounded-none pl-10 h-10"
                        />
                        <MdPhone
                          size={20}
                          className="absolute left-2 top-2 text-gray-500"
                        />
                      </div>
                    </FormControl>
                    <StyledFormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Email"
                          {...field}
                          className="font-medium outline-none rounded-none pl-10 h-10"
                        />
                        <IoIosMail
                          size={22}
                          className="absolute left-2 top-2 text-gray-500"
                        />
                      </div>
                    </FormControl>
                    <StyledFormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="bg-green-500">
              Book
            </Button>
          </form>
        </Form>
      </div>
      {/*Additional Information*/}
    </div>
  );
};

export default CustomerDetailForm;
