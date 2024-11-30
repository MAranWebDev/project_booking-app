'use client';

import { Locale, LOCALES } from '@/libs/next-intl/constants';
import { setUserLocale } from '@/libs/next-intl/utils';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useLocale, useTranslations } from 'next-intl';

export const LanguageDropdown = () => {
  const t = useTranslations('Language');
  const currentLocale = useLocale();

  const languages = [
    { value: LOCALES.EN, label: t('en') },
    { value: LOCALES.ES, label: t('es') },
  ];

  // Utils
  const handleChange = (event: SelectChangeEvent) =>
    setUserLocale(event.target.value as Locale);

  return (
    <FormControl>
      <InputLabel id="select-label">{t('label')}</InputLabel>/
      <Select
        labelId="select-label"
        id="select"
        name="select"
        value={currentLocale}
        onChange={handleChange}
        label={t('label')}
      >
        {languages.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography>{label}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
