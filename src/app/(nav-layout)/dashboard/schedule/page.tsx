'use client';

import { ROUTES } from '@/constants/routes';
import { doctors } from '@/data/doctors';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslations } from 'next-intl';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');

  // "next-intl"
  const t = useTranslations('Navbar');

  // Utils

  const handleSchedule = async () => {
    if (selectedDate && selectedTime && selectedDoctor) {
      try {
        const response = await fetch(ROUTES.API_SCHEDULE, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: dayjs(selectedDate).format('YYYY-MM-DD'),
            time: dayjs(selectedTime).format('HH:mm'),
            doctor: selectedDoctor,
          }),
        });

        console.log(selectedDoctor);
        await response.json();

        enqueueSnackbar('success', { variant: 'success' });
      } catch (error) {
        console.log(error);
        enqueueSnackbar('error', { variant: 'error' });
      }
    }

    setSelectedDate(null);
    setSelectedTime(null);
  };

  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: 2 }}>
      <Typography component="h1" variant="h4">
        {t('schedule')}
      </Typography>
      <Stack sx={{ width: 400, mx: 'auto' }} spacing={2}>
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
        <Select
          label="Doctor"
          value={selectedDoctor}
          onChange={(event: SelectChangeEvent) => {
            setSelectedDoctor(event.target.value as string);
          }}
        >
          <MenuItem value={doctors[0].name}>{doctors[0].name}</MenuItem>
          <MenuItem value={doctors[1].name}>{doctors[1].name}</MenuItem>
        </Select>
        <Button variant="outlined" onClick={handleSchedule}>
          {t('submit')}
        </Button>
      </Stack>
    </Box>
  );
}
