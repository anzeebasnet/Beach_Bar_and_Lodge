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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import styled from "styled-components";
import { Button } from "../ui/button";
import { MdPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { Textarea } from "../ui/textarea";

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
  checkintime: z
    .string()
    .min(1, { message: "Check-in Time selection is required" }),
  checkouttime: z
    .string()
    .min(1, { message: "Check-out Time selection is required" }),
  request: z
    .string()
    .min(3, {
      message: "Review can't be empty",
    })
    .max(200),
});

const StyledFormMessage = styled(FormMessage)`
  color: red;
`;

function isValidPhoneNumber(phoneNumber: string): boolean {
  return phoneNumber.replace(/\D/g, "").length >= 10;
}

const generateTimeSlots = () => {
  const slots = [];
  let hour = 0;
  let minute = 0;

  while (hour < 24) {
    const formattedTime = `${hour.toString().padStart(2, "0")}:${minute
      .toString()
      .padStart(2, "0")}`;
    slots.push(formattedTime);

    minute += 30;
    if (minute === 60) {
      minute = 0;
      hour++;
    }
  }

  return slots;
};

const timeSlots = generateTimeSlots();

const CustomerDetailForm = () => {
  const bookingDetails = useAppSelector(
    (state: RootState) => state.bookingDetails.currentBookingDetails
  );

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
    <Form {...form}>
      <form
        className="sm:px-6 px-3  flex flex-col sm:gap-6 gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/*Basic Information*/}

        <div className=" bg-white">
          <h2 className="font-normal text-2xl  text-gray-700 py-6 px-5">
            Customer
          </h2>
          <p className="border-b border-b-gray-300"></p>
          <div className="sm:px-6 px-3 sm:py-6 py-3">
            <p className="text-xs font-medium text-gray-600 sm:mb-4 mb-2">
              Enter the details of the customer.
            </p>
            <div className="grid sm:grid-cols-2 items-start sm:gap-x-4 gap-x-2 sm:gap-y-5 gap-y-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First Name"
                        {...field}
                        className=" font-medium outline-none rounded-none h-10 border border-gray-300 shadow-sm shadow-gray-300 placeholder:font-thin placeholder:text-gray-600 placeholder:sm:text-[15px] placeholder:text-sm"
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
                        className=" font-medium outline-none rounded-none h-10 border border-gray-300 shadow-sm shadow-gray-300 placeholder:font-thin placeholder:text-gray-600 placeholder:sm:text-[15px] placeholder:text-sm"
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
                          className="font-medium outline-none rounded-none pl-10 h-10  border border-gray-300 shadow-sm shadow-gray-300 placeholder:font-thin placeholder:text-gray-600 placeholder:sm:text-[15px] placeholder:text-sm"
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
                          className="font-medium outline-none rounded-none pl-10 h-10  border border-gray-300 shadow-sm shadow-gray-300 placeholder:font-thin placeholder:text-gray-600 placeholder:sm:text-[15px] placeholder:text-sm"
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
          </div>
        </div>

        {/*Additional Information*/}
        <div className=" bg-white">
          <h2 className="font-normal text-2xl  text-gray-700 py-6 px-5">
            Additional Information
          </h2>
          <p className="border-b border-b-gray-300"></p>
          <div className="sm:px-6 px-3 sm:py-6 py-3 flex flex-col gap-4">
            <p className="text-xs font-medium text-gray-600">
              Enter the details of the customer.
            </p>
            <p className="sm:text-xl text-base font-normal">
              Check-in and Check-out Time
            </p>
            <div className="grid sm:grid-cols-2 items-start sm:gap-x-4 gap-x-2 sm:gap-y-5 gap-y-2">
              <FormField
                control={form.control}
                name="checkintime"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full font-medium outline-none rounded-none h-10 border border-gray-300 shadow-sm shadow-gray-300 text-gray-700"
                      >
                        <option value="" disabled>
                          Select a time
                        </option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <StyledFormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="checkouttime"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <select
                        {...field}
                        className="w-full font-medium outline-none rounded-none h-10 border border-gray-300 shadow-sm shadow-gray-300 text-gray-700"
                      >
                        <option value="" disabled>
                          Select a time
                        </option>
                        {timeSlots.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <StyledFormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="request"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="sm:text-xl text-base font-normal">
                        Special Request
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={3}
                          placeholder="If you have any special requirements or requests, feel free to let us know. We're here to make your experience as pleasant and personalized as possible."
                          className="border-2 border-gray-200 rounded w-full"
                        />
                      </FormControl>
                      <StyledFormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          type="submit"
          className="bg-primary hover:bg-secondary font-normal sm:w-1/3 w-full place-self-end"
        >
          Book Now
        </Button>
      </form>
    </Form>
  );
};

export default CustomerDetailForm;
