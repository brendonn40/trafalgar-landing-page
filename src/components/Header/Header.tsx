import { useState } from 'react';
import { Container, Group, Burger, Flex } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderSimple.module.css';

const links = [
  { link: '/about', label: 'Home' },
  { link: '/pricing', label: 'Find a doctor' },
  { link: '/learn', label: 'Apps' },
  { link: '/community', label: 'Testimonials' },
  { link: '/te', label: 'About us' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size='xl' className={classes.inner}>
        <Flex color='#233348;' style={{fontSize:'24px',fontWeight:700}} gap={12}>
        <div className={classes.logo}>T</div>
        Trafalgar
        </Flex>
        <Group gap={40} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
