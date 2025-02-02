"use client";

import React, { useState } from "react";
import { DatePicker } from "@/components/(Pages)/Booking/DatePicker";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus, X } from "lucide-react";
import { Roboto_Condensed } from "next/font/google";
import { addDays } from "date-fns";
import styled from "styled-components";
import { useAppDispatch } from "@/lib/store/hooks";
import { setBooking } from "@/lib/store/features/Booking/Booking";
import { setBookingView } from "@/lib/store/features/BookingView/BookingView";

const roboto = Roboto_Condensed({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const formSchema = z.object({
  checkin: z.date(),
  checkout: z.date(),
  rooms: z.array(
    z.object({
      adults: z.string().min(1, {
        message: "Please select the number of adults.",
      }),
      children: z.array(z.string()),
    })
  ),
});

const StyledFormMessage = styled(FormMessage)`
  color: red;
`;
const BookingForm = () => {
  const [rooms, setRooms] = useState<
    { id: number; adults: string; children: string[] }[]
  >([{ id: 1, adults: "2 Adults", children: [] }]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      checkin: new Date(),
      checkout: addDays(new Date(), 1),
      rooms: [
        {
          adults: "2",
          children: [],
        },
      ],
    },
  });

  const adultNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const childAge = ["under1", "1", "2", "3", "4", "5", "6"];
  const dispatch = useAppDispatch();

  const handleAddRoom = () => {
    const currentRooms = form.getValues("rooms");
    form.setValue("rooms", [...currentRooms, { adults: "", children: [] }]);
  };

  const handleRemoveRoom = (roomIndex: number) => {
    const currentRooms = form.getValues("rooms");
    const updatedRooms = currentRooms.filter((_, index) => index !== roomIndex);
    form.setValue("rooms", updatedRooms);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values) {
      dispatch(setBooking(values));
      dispatch(setBookingView("cards"));
    }
  }

  return (
    <div className="bg-[#ecefea] ">
      <p className="border-b border-b-gray-300 text-center text-xl py-4 text-primary font-semibold">
        Details of your stay
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto flex flex-col gap-4 sm:py-12 py-6 sm:px-12 px-6"
        >
          <div className="grid sm:grid-cols-2 gap-4 border-b border-b-gray-300 pb-4">
            <FormField
              control={form.control}
              name="checkin"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-gray-700 text-[17px] font-normal">
                    Check-in Date
                  </FormLabel>
                  <FormControl>
                    <DatePicker field={field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="checkout"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-gray-700 text-[17px] font-normal">
                    Check-out Date
                  </FormLabel>
                  <FormControl>
                    <DatePicker field={field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          {form.watch("rooms").map((room, index) => (
            <div
              key={index}
              className="grid sm:grid-cols-2 items-end gap-4 border-b border-b-gray-300 pb-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-gray-700 text-[17px] font-normal">
                    Stay in room {index + 1}
                  </h3>
                  {index > 0 && (
                    <Button
                      variant="outline"
                      className="h-8 px-2 py-0"
                      onClick={() => handleRemoveRoom(index)}
                    >
                      Remove Room
                    </Button>
                  )}
                </div>
                <FormField
                  control={form.control}
                  name={`rooms.${index}.adults`} // Binding to the specific room's adults field
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-gray-400">
                        Guests aged 7 or above
                      </FormLabel>
                      <Select
                        onValueChange={(value: string) => field.onChange(value)}
                      >
                        <SelectTrigger className="bg-white rounded-none h-10">
                          <SelectValue placeholder="Select Adults" />
                        </SelectTrigger>
                        <SelectContent>
                          <ScrollArea className="h-[20vh]">
                            {adultNum.map((adult, index) => (
                              <SelectItem
                                key={index}
                                value={adult}
                                defaultValue={"2"}
                              >
                                {`${adult} ${
                                  adult === "1" ? "adult" : "adults"
                                }`}
                              </SelectItem>
                            ))}
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                      <StyledFormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {form
                    .watch(`rooms.${index}.children`)
                    .map((child, childIndex) => (
                      <button
                        key={childIndex}
                        className="flex items-center bg-white px-4 py-1 my-1"
                        onClick={() => {
                          const children = form.getValues(
                            `rooms.${index}.children`
                          );
                          form.setValue(
                            `rooms.${index}.children`,
                            children.filter((_, i) => i !== childIndex)
                          );
                        }}
                      >
                        <span className="mr-2 text-sm">
                          Child aged {child} year(s) old
                        </span>
                        <X color="red" size={20} />
                      </button>
                    ))}
                </div>
                <FormField
                  control={form.control}
                  name={`rooms.${index}.children`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs font-medium text-gray-400"></FormLabel>
                      <Select
                        onValueChange={(value: string) => {
                          const updatedChildren = [...field.value, value];
                          field.onChange(updatedChildren); // Add new child to array
                        }}
                      >
                        <SelectTrigger className="bg-white rounded-none h-10">
                          <SelectValue placeholder="Add a child" />
                        </SelectTrigger>
                        <SelectContent>
                          <ScrollArea className="h-[20vh]">
                            {childAge.map((child, index) => (
                              <SelectItem key={index} value={child}>
                                {`Child aged ${child} ${
                                  child === "under1" || child === "1"
                                    ? "year"
                                    : "years"
                                } old`}
                              </SelectItem>
                            ))}
                          </ScrollArea>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}

          <div>
            <button
              onClick={handleAddRoom}
              className="bg-primary hover:bg-opacity-65 text-white sm:px-6 px-3 sm:py-[6px] py-1 text-sm rounded flex gap-2 items-center"
              type="button"
            >
              Add Room <Plus size={20} />
            </button>
          </div>
          <button
            type="submit"
            className="w-full rounded-md my-4 sm:h-12 h-10 sm:text-lg text-base font-thin text-white hover:bg-primary_text bg-primary"
          >
            Check availability
          </button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
