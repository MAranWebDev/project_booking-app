'use client';

import { DOCTORS } from '@/constants/doctors';
import { ROUTES } from '@/constants/routes';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslations } from 'next-intl';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';

export const ScheduleForm = () => {
  const [date, setDate] = useState<Dayjs | null>(null);
  const [time, setTime] = useState<Dayjs | null>(null);
  const [doctorId, setDoctorId] = useState('');

  // "next-intl"
  const t = useTranslations();

  // Utils
  const handleClickSubmit = async () => {
    if (!date || !time || !doctorId)
      return enqueueSnackbar(t('messageEmptyFields'), { variant: 'error' });

    try {
      const response = await fetch(ROUTES.API_SCHEDULE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: dayjs(date).format('YYYY-MM-DD'),
          time: dayjs(time).format('HH:mm'),
          doctorId,
        }),
      });

      const message = response.ok
        ? t('messageSuccess')
        : `${t('messageServerError')}: ${(await response.json()).message}` ||
          t('messageSomethingWentWrong');

      enqueueSnackbar(message, { variant: response.ok ? 'success' : 'error' });
    } catch {
      enqueueSnackbar(t('messageSomethingWentWrong'), { variant: 'error' });
    } finally {
      setDate(null);
      setTime(null);
      setDoctorId('');
    }
  };

  return (
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
  );
};
