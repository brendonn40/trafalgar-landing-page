import {
  Container,
  Flex,
  Title,
  Card,
  Image,
  Text,
  Button,
  Group,
  Stack,
} from '@mantine/core';

function Articles() {
  return (
    <Container size="xl" >
        <Stack justify='center' align='center'>
        <Title order={2} fw={700} lh={'56px'} fz="36px">
        Check out our latest article
      </Title>
      <Flex gap={34}>
        <Card shadow="sm" padding="lg" radius="xl" withBorder maw={350}  style={{alignItems:'self-start'}}>
          <Card.Section>
            <Image src="/post1.png" height={160} alt="Post#1" />
          </Card.Section>

          <Group justify="center" mt="md" mb="xs">
            <Text fw={700} maw={266} lh={'32px'} fz={'21px'}>Disease detection, check up in the laboratory</Text>
          </Group>

          <Text size="sm" c="dimmed" maw={266}>
            In this case, the role of the health laboratory is very important to
            do a disease detection...
          </Text>
    <Button variant='transparent' color="blue" p={0} mt="md" radius="md">
            Read more
          </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="xl" withBorder maw={350} style={{alignItems:'self-start'}}>
          <Card.Section>
            <Image src="/post2.png" height={160} alt="Post#2" />
          </Card.Section>

          <Group justify="center" mt="md" mb="xs">
            <Text fw={700} maw={266} lh={'32px'} fz={'21px'}>Herbal medicines that are safe for consumption</Text>
          </Group>

          <Text size="sm" c="dimmed" maw={266}>
            Herbal medicine is very widely used at this time because of its very
            good for your health...
          </Text>

    <Button variant='transparent' color="blue" p={0} mt="md" radius="md">
            Read more
            </Button>
        </Card>
        <Card shadow="sm" padding="lg" radius="xl" withBorder maw={350} style={{alignItems:'self-start'}}>
          <Card.Section>
            <Image src="/post3.png" height={160} alt="Post#3" />
          </Card.Section>

          <Group justify="center" mt="md" mb="xs">
            <Text fw={700} maw={266} lh={'32px'} fz={'21px'}>Natural care for healthy facial skin</Text>
          </Group>

          <Text size="sm" c="dimmed" maw={266}>
            A healthy lifestyle should start from now and also for your skin
            health. There are some...
          </Text>
    <Button variant='transparent' color="blue" p={0} mt="md" radius="md">
            Read more
          </Button>
       
        </Card>
      </Flex>
        </Stack>
     
    </Container>
  );
}

export default Articles;
