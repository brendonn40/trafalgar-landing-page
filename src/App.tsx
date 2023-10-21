import "@mantine/core/styles.css";
import { MantineProvider, Stack } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import HeroSection from "./components/Hero";
import Services from "./components/Services";
import Download from "./components/Download";
import Articles from "./components/Articles";
import { Footer } from "./components/Footer";
import CarouselFeedback from "./components/Carousel";

export default function App() {
  return <MantineProvider theme={theme}>
    <Stack gap={60}>
    <Header/>
    <HeroSection/>
    <Services/>
   <Download/>
   <CarouselFeedback/>
   <Articles/>
   <Footer/>
    </Stack>
 
   </MantineProvider>;
}
