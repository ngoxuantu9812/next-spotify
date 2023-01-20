import Head from 'next/head';
import logo from '../../public/logo2.png';
import NavbarMenu from './NavbarMenu';
import Footer from './Footer';
import Link from 'next/link';
import styles from './main.module.css';

export const siteTitle = 'Spotify';
export default function Main({home, children}) {
  return (
    <div className={styles.encore_dark_theme + " grid grid-cols-5 gap-4 "} >
      <Head>
        <meta
          name="description"
          content="Learn how to build a spotify website using Next.js"
        />
        <meta
          property="og:image"
          content={logo.blurDataURL}
        />
        <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <NavbarMenu ></NavbarMenu>
      <section className='col-span-4 bg-zinc-500 text-white content-right pt-6 px-6' >{children}</section>
      <Footer className="now_playing">

      </Footer>
    </div>
  );
}