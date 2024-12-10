'use client';

import { DOCTORS } from '@/constants/doctors';
import { ROUTES } from '@/constants/routes';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslations } from 'next-intl';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

export default function SchedulePage() {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [doctorId, setDoctorId] = useState('');

  // "next-intl"
  const t = useTranslations();

  // Utils
  const handleClickSubmit = async () => {
    if (date && time && doctorId) {
      try {
        await fetch(ROUTES.API_SCHEDULE, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            date: dayjs(date).format('YYYY-MM-DD'),
            time: dayjs(time).format('HH:mm'),
            doctorId,
          }),
        });

        enqueueSnackbar('success', { variant: 'success' });
      } catch (error) {
        console.error(error);
        enqueueSnackbar('error', { variant: 'error' });
      }

      setDate(null);
      setTime(null);
      setDoctorId('');
    }
  };

  const isAvailableTime = (time, clockType) => {
    // Example: Disable times before 9 AM (hours 0-8)
    if (clockType === 'hours' && time < 9) return true;
    return false;
  };

  return (
    <Box sx={{ width: '90%', mx: 'auto', mt: 2 }} component="main">
      <Typography component="h1" variant="h4">
        {t('schedule')}
      </Typography>

      <Stack sx={{ width: 400, mx: 'auto' }} spacing={2}>
        <DateCalendar
          disablePast
          value={date}
          onChange={(newDate) => setDate(newDate)}
        />

        <TimePicker
          disablePast
          views={['hours']}
          value={time}
          onChange={(newTime) => setTime(newTime)}
          shouldDisableTime={isAvailableTime}
          ampm={false}
        />

        <FormControl fullWidth>
          <InputLabel id="select-label">{t('doctors')}</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            label={t('doctors')}
            value={doctorId}
            onChange={(event) => setDoctorId(event.target.value)}
          >
            {DOCTORS.map(({ id, name }) => (
              <MenuItem key={id} value={id}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="outlined" onClick={handleClickSubmit}>
          {t('submit')}
        </Button>
      </Stack>
    </Box>
  );
}
