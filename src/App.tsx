import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Header } from "./components/Header/Header";
import HeroSection from "./components/Hero";
import Services from "./components/Services";
import Download from "./components/Download";
import Articles from "./components/Articles";
import { Footer } from "./components/Footer";

export default function App() {
  return <MantineProvider theme={theme}>
    <Header/>
    <HeroSection/>
    <Services/>
   <Download/>
   <Articles/>
   <Footer/>
   </MantineProvider>;
}
