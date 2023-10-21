import { Card, Image, Text, Button, Group } from '@mantine/core';
import classes from './Card.module.css';

function PostCard({
  image,
  title,
  preview,
}: {
  image: string;
  title: string;
  preview: string;
}) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="xl"
      withBorder
      maw={350}
      style={{ alignItems: 'self-start' }}
      className={classes.card}
    >
      <Card.Section>
        <Image src={image}  alt={`Post ${title}`} />
      </Card.Section>

      <Group justify="center" mt="md" mb="xs">
        <Text fw={700} maw={266} lh={'32px'} fz={'21px'}>
          {title}
        </Text>
      </Group>

      <Text size="sm" c="dimmed" maw={266}>
        {preview}
      </Text>
      <Button variant="transparent" color="blue" p={0} mt="md" radius="md">
        Read more
      </Button>
    </Card>
  );
}

export default PostCard;
