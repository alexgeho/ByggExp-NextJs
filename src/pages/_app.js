import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';
import '@/css/App.css';
import '@/css/styles.css';
import '@/Components/Header/Header.css';
import '@/Components/Footer/Footer.css';
import '@/Components/FAQBlock/FAQBlock.css';
import '@/Components/Features3/Features.css';
import '@/Components/BlueBlock/BlueBlock.css';
import '@/Components/ContentBlocks/ContentBlocks.css';
import '@/Components/TitleAndSubtitle/TitleAndSubtitle.css';
import '@/Components/BlueButton/BlueButton.css';
import '@/Components/PhoneBlock/PhoneBlock.css';
import '@/Components/HeroBlock/HeroBlock.css';
import '@/Components/Badge/Badge.css';
import '@/widgets/TitleBadge/TitleBadge.css';
import '@/pages/about/About.css';
import '@/pages/faq/Faq.css';
import '@/pages/contacts/Contacts.css';
import '@/pages/blog/Blog.css';
import Header from '@/Components/Header/Header';
import Footer from '@/Components/Footer/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}