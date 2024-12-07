'use client';

import { useState, useEffect } from 'react';
import { DateCalendar, TimePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleBooking = async () => {
    if (selectedDate && selectedTime) {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: dayjs(selectedDate).format('YYYY-MM-DD'),
          time: dayjs(selectedTime).format('HH:mm'),
        }),
      });

      const data = await response.json();
      console.log(data);
    }
  };

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
          views={['hours', 'minutes']}
          value={selectedTime}
          onChange={(newTime) => setSelectedTime(newTime)}
        />
      </div>
      <button onClick={handleBooking}>Submit</button>
    </div>
  );
}
