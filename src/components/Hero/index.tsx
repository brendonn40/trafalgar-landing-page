import { Stack, Title, Button, Flex, Image, Container } from '@mantine/core';
import { Text } from '../Text/index';
import { useIsMobile } from '../../hooks/useIsMobile';
function HeroSection() {
  const isMobile = useIsMobile();
  return (
    <Container size={'xl'}>
      <Flex  direction={isMobile ? 'column':'row'} justify={'space-between'} align={'center'} gap={isMobile ? 'xl':'sm'}>
        <Stack gap={25}>
          <Title order={2} size={48} maw={427}>
            Virtual healthcare for you
          </Title>
          <Text
            maw={445}
            size={'21px'}
            style={{ lineHeight: '32px', marginBottom: '20px' }}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Text>
          <Button
            radius={'xl'}
            style={{ width: 'fit-content', fontSize: '18px' }}
            size={isMobile ? 'md':"xl"}
          >
            Consult today
          </Button>
        </Stack>
        <Image src={'/hero-image.png'} />
      </Flex>
    </Container>
  );
}

export default HeroSection;
