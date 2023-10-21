import { Container } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import FeedbackCard from '../FeedbackCard';
import '@mantine/carousel/styles.css';
import { useIsMobile } from '../../hooks/useIsMobile';

function CarouselFeedback() {
  const isMobile = useIsMobile();
  return (
    <Container size={'xl'}>
      {!isMobile ? (
        <Carousel
          maw={1120}
          align={'center'}
          withIndicators
          loop
          slidesToScroll={1}
        >
          <Carousel.Slide>
            <FeedbackCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <FeedbackCard />
          </Carousel.Slide>
          <Carousel.Slide>
            <FeedbackCard />
          </Carousel.Slide>
        </Carousel>
      ) : (
        <FeedbackCard />
      )}
    </Container>
  );
}

export default CarouselFeedback;
