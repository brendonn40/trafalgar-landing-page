import { Container, Stack, Image, Flex, Title, Button } from '@mantine/core';
import { Text } from '../Text/index';
import { useIsMobile } from '../../hooks/useIsMobile';

function Download() {
  const isMobile = useIsMobile();
  return (
    <Container size={'xl'} style={{width:'100%'}}>
      <Stack gap={100} w={'100%'}>
        <Flex direction={isMobile ? 'column':'row'} justify={'space-between'} align={'center'} gap={isMobile ? 'xl':'sm'} >
          <Image src={'/trafalgar-landing-page/mid-section-1.png'} maw={650} />
          <Stack gap={37}>
            <Title
              order={2}
              style={{
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '56px',
                maxWidth: '481px',
              }}
            >
              Leading healthcare providers
            </Title>
            <Text
              style={{
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: '30px',
                maxWidth: '450px',
              }}
            >
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone. To us, it’s not just
              work. We take pride in the solutions we deliver
            </Text>
            <Button
              size="lg"
              variant="outline"
              radius={'xl'}
              style={{ fontWeight: 300, width: 'fit-content' }}
              color="#458FF6"
            >
              Learn more
            </Button>
          </Stack>
        </Flex>
        <Flex direction={isMobile ? 'column':'row'} justify={'space-around'} align={'center'} gap={isMobile ? 'xl':'sm'}>
          <Stack gap={37}>
            <Title
              order={2}
              style={{
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '48px',
                maxWidth: '254px',
              }}
            >
              Download our mobile apps
            </Title>
            <Text
              style={{
                fontSize: '18px',
                fontWeight: 300,
                lineHeight: '30px',
                maxWidth: '420px',
              }}
            >
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </Text>
            <Button
              size="lg"
              variant="outline"
              radius={'xl'}
              style={{ fontWeight: 300, width: 'fit-content' }}
              color="#458FF6"
            >
              Download
            </Button>
          </Stack>
          <Image src={'/trafalgar-landing-page/mid-section-2.png'} maw={665} />
        </Flex>
      </Stack>
    </Container>
  );
}

export default Download;
