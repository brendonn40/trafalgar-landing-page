import { Text  as TextMantine } from '@mantine/core';

export function Text({ color = '#7D7987', ...rest }) {
  return <TextMantine c={color} {...rest}  />;
}


