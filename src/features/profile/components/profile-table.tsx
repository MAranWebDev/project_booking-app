'use client';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { ROUTES } from '@/constants/routes';
import dayjs from 'dayjs';
import { DOCTORS } from '@/constants/doctors';
import { useTranslations } from 'next-intl';

// Types
type State = { _id: string; date: Date; time: string; doctorId: string }[];

export const ProfileTable = () => {
  const [data, setData] = useState<State>([]);

  // "next-intl"
  const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(ROUTES.API_SCHEDULE);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{t('date')}</TableCell>
            <TableCell>{t('time')}</TableCell>
            <TableCell>{t('doctor')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map(({ _id, date, time, doctorId }) => (
            <TableRow key={_id}>
              <TableCell>{dayjs(date).format('DD/MM/YYYY')}</TableCell>
              <TableCell>{time}</TableCell>
              <TableCell>
                {DOCTORS.find(({ id }) => id == doctorId)?.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
