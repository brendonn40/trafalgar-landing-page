import { Text, Container, Flex } from '@mantine/core';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Company',
    links: [
      { label: 'About', link: '#' },
      { label: 'Testimonials', link: '#' },
      { label: 'Find a doctor', link: '#' },
      { label: 'Apps', link: '#' },
    ],
  },
  {
    title: 'Region',
    links: [
      { label: 'Indonesia', link: '#' },
      { label: 'Singapore', link: '#' },
      { label: 'Hongkong', link: '#' },
      { label: 'Canada', link: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Help center', link: '#' },
      { label: 'Contact support', link: '#' },
      { label: 'Instructions', link: '#' },
      { label: 'How it works', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size={'xl'} className={classes.inner}>
        <Flex direction={'column'}>
          <Flex
            style={{ fontSize: '24px', fontWeight: 700, color: '#fff' }}
            gap={12}
          >
            <div className={classes.logo}>T</div>
            Trafalgar
          </Flex>
          <Text size="xs" className={classes.description} mt={22}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Text>
          <Text size="sm" className={classes.description} mt={30}>
            ©Trafalgar PTY LTD 2023. All rights reserved.
          </Text>
        </Flex>

        <div className={classes.groups}>{groups}</div>
      </Container>

    </footer>
  );
}
