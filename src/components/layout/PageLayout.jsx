import Background from './Background';
import Footer from './Footer';

// Standard page shell: gradient background, page content, then the footer
export default function PageLayout({ backgroundClassName, children }) {
    return (
        <Background className={backgroundClassName}>
            {children}
            <Footer />
        </Background>
    );
}
