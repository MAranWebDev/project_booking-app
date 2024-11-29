'use client';

import { Locale } from '@/libs/next-intl/config';
import { setUserLocale } from '@/libs/next-intl/locale';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { useLocale, useTranslations } from 'next-intl';

export const LanguageDropdown = () => {
  const t = useTranslations('LocaleSwitcher');
  const currentLocale = useLocale();

  const LANGUAGES = [
    { value: 'en', label: t('en') },
    { value: 'es', label: t('es') },
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
        {LANGUAGES.map(({ value, label }) => (
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
