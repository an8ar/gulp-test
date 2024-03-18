/* eslint-disable object-curly-newline */
import React from 'react';

import { useFormContext } from 'react-hook-form';

import { cn } from '~/lib/cn';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';

interface IProps {
  name: string;
  placeholder?: string;
  label?: string;
  defaultValue?: unknown;
  type?: string;
  labelStyle?: string;
}

export function RHFTextField({ name, placeholder, label, defaultValue, type, labelStyle }: IProps) {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={cn(labelStyle)}>{label}</FormLabel>}
          <FormControl>
            <Input placeholder={placeholder} {...field} type={type} className="h-10" />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
