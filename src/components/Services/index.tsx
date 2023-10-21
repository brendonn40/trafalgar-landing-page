import {
  SimpleGrid,
  Stack,
  Title,
  Image,
  Container,
  Button,
} from '@mantine/core';
import { Text } from '../Text/index';
import './styles.css';
import search from '../../../public/search.svg';
import flask from '../../../public/flask.svg';
import ficha from '../../../public/ficha.svg';
import report from '../../../public/report.svg';
import healthbox from '../../../public/healthBox.svg';
import list from '../../../public/list.svg';
function Services() {
  return (
    <Stack
      style={{
        backgroundImage: 'url("/background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center left',
      }}
    >
      <Container size={'xl'} style={{width:'100%'}}>
        <Stack justify="center" align="center" gap={60}>
          <Title order={2}> Our services</Title>
          <Text
            size={'18px'}
            maw={952}
            style={{ lineHeight: '30px', fontWeight: 300 }}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Text>
          <SimpleGrid
            cols={3}
            spacing={'34px'}
            verticalSpacing={'37px'}
            style={{ width: '100%' }}
          >
            <div className="box">
              <Image src={search} maw={90} mb={22} />
              <Text
                color="black"
                size={'24px'}
                style={{ lineHeight: '56px', fontWeight: 700 }}
              >
                Search doctor
              </Text>
              <Text
                size={'16px'}
                style={{ lineHeight: '22px', fontWeight: 300 }}
                maw={256}
              >
                Choose your doctor from thousands of specialist, general, and
                trusted hospitals
              </Text>
            </div>
            <div className="box">
              <Image src={flask} maw={90} mb={22} />
              <Text
                color="black"
                size={'24px'}
                style={{ lineHeight: '56px', fontWeight: 700 }}
              >
                Online pharmacy
              </Text>
              <Text
                size={'16px'}
                style={{ lineHeight: '22px', fontWeight: 300 }}
                maw={256}
              >
                Buy your medicines with our mobile application with a simple
                delivery system
              </Text>
            </div>
            <div className="box">
              <Image src={ficha} maw={90} mb={22} />
              <Text
                color="black"
                size={'24px'}
                style={{ lineHeight: '56px', fontWeight: 700 }}
              >
                Consultation
              </Text>
              <Text
                size={'16px'}
                style={{ lineHeight: '22px', fontWeight: 300 }}
                maw={256}
              >
                Free consultation with our trusted doctors and get the best
                recomendations
              </Text>
            </div>
            <div className="box">
              <Image src={report} maw={90} mb={22} />
              <Text
                color="black"
                size={'24px'}
                style={{ lineHeight: '56px', fontWeight: 700 }}
              >
                Details info
              </Text>
              <Text
                size={'16px'}
                style={{ lineHeight: '22px', fontWeight: 300 }}
                maw={256}
              >
                Free consultation with our trusted doctors and get the best
                recomendations
              </Text>
            </div>
            <div className="box">
              <Image src={healthbox} maw={90} mb={22} />
              <Text
                color="black"
                size={'24px'}
                style={{ lineHeight: '56px', fontWeight: 700 }}
              >
                Emergency care
              </Text>
              <Text
                size={'16px'}
                style={{ lineHeight: '22px', fontWeight: 300 }}
                maw={256}
              >
                You can get 24/7 urgent care for yourself or your children and
                your lovely family
              </Text>
            </div>
            <div className="box">
              <Image src={list} maw={90} mb={22} />
              <Text
                color="black"
                size={'24px'}
                style={{ lineHeight: '56px', fontWeight: 700 }}
              >
                Tracking
              </Text>
              <Text
                size={'16px'}
                style={{ lineHeight: '22px', fontWeight: 300 }}
                maw={256}
              >
                Track and save your medical history and health data{' '}
              </Text>
            </div>
          </SimpleGrid>
          <Button
            size="lg"
            variant="outline"
            radius={'xl'}
            style={{ fontWeight: 300 }}
            color="#458FF6"
          >
            Learn more
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Services;
