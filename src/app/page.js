import {
    About,
    Contact,
    Experience,
    Feedback,
    Footer,
    Hero,
    Navbar,
    StarsCanvas,
    Works,
} from './components';

export default function Home() {
    return (
        <main className="relative overflow-hidden z-0 bg-primary">
            <Navbar />
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Hero />
            </div>
            <About />
            <Experience />
            <Works />
            <Feedback />
            <Contact />
            <StarsCanvas />
            <Footer />
        </main>
    );
}
