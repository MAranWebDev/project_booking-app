import Button from '@mui/material/Button';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

export const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <h1>Calendar</h1>
      <div>
        <DateCalendar
          disablePast
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
        />
        <TimePicker
          views={['hours']}
          value={selectedTime}
          onChange={(newTime) => setSelectedTime(newTime)}
        />
      </div>
      <Button>Submit</Button>
    </div>
  );
};
