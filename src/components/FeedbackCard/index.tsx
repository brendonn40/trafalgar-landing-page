import { Avatar, Flex, Title, Text } from '@mantine/core';
import classes from './FeedbackCard.module.css';
import { useIsMobile } from '../../hooks/useIsMobile';
function FeedbackCard() {
    const isMobile = useIsMobile();
  return (
    <div className={classes.card} style={{width:isMobile ? 'fit-content':'1120px',height: isMobile ? 'fit-content':'425px'}}>
      <Title ta={'center'} order={1}>What our customers are saying</Title>
      <Flex justify={'space-around'} direction={isMobile ? 'column':'row'} gap={60}>
        <Flex gap={20} justify={'center'} align={'center'}>
          <Avatar
            src={
              'https://images.unsplash.com/photo-1584940120743-8981ca35b012?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd1eSUyMGluJTIwc3VpdHxlbnwwfHwwfHx8MA%3D%3D'
            }
            size={120}
            style={{ border: 'solid 3px #fff' }}
          />
          <Flex direction={'column'}>
            <Text fw={700} fz={22} c={'#fff'}>
              Edward Newgate
            </Text>
            <Text fw={400} fz={18} c={'#fff'}>
              Founder Circle
            </Text>
          </Flex>
        </Flex>

        <Text maw={420} fw={400} fz={19} lh={'30px'} c={'#fff'}>
          “Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely”
        </Text>
      </Flex>
    </div>
  );
}

export default FeedbackCard;
