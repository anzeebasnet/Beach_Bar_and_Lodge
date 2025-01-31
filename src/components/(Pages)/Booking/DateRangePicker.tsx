"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  checkin: Date | null;
  checkout: Date | null;
  onDateChange: (range: DateRange | undefined) => void;
}

export function DateRangePicker({
  className,
  checkin,
  checkout,
  onDateChange,
}: DateRangePickerProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: checkin || new Date(),
    to: checkout || addDays(new Date(), 1),
  });

  React.useEffect(() => {
    if (checkin && checkout) {
      setDate({ from: checkin, to: checkout });
    }
  }, [checkin, checkout]);

  const handleDateChange = (range: DateRange | undefined) => {
    setDate(range);
    onDateChange(range); // Trigger the callback when the date changes
  };

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "relative lg:w-[25vw] sm:w-[43vw] w-full h-14 justify-between text-left font-normal rounded-none pt-6",
              !date && "text-muted-foreground"
            )}
          >
            <p className={`absolute top-2 text-gray-700 text-xs font-normal`}>
              Check-in and Check-out
            </p>
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
