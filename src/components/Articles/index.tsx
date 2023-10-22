import { Container, Flex, Title, Stack, Button } from '@mantine/core';
import { useIsMobile } from '../../hooks/useIsMobile';
import PostCard from '../PostCard';

function Articles() {
  const isMobile = useIsMobile();
  return (
    <Container size="xl">
      <Stack justify="center" align="center" gap={60}>
        <Title order={2} fw={700} lh={'56px'} fz="36px" ta='center'>
          Check out our latest article
        </Title>
        <Flex direction={isMobile ? 'column' : 'row'} gap={34}>
          <PostCard
            image="/post1.png"
            title="Disease detection, check up in the laboratory"
            preview="In this case, the role of the health laboratory is very important to
            do a disease detection..."
          />
          <PostCard
            image="/post2.png"
            title="Herbal medicines that are safe for consumption"
            preview="Herbal medicine is very widely used at this time because of its very
            good for your health..."
          />
          <PostCard
            image="/post3.png"
            title="Natural care for healthy facial skin"
            preview="A healthy lifestyle should start from now and also for your skin
            health. There are some..."
          />
        </Flex>
        <Button
            size="lg"
            variant="outline"
            radius={'xl'}
            style={{ fontWeight: 300 }}
            color="#458FF6"
            px={40}
          >
            View all
          </Button>
      </Stack>
    </Container>
  );
}

export default Articles;
