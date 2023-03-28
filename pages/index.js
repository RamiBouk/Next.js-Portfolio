import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Computer science student with a strong work ethic, a passion for computer science and a solid foundation in math. 
          Experienced in developing and testing cross-platform mobile applications. 
        Worked for an international software development company. 
       </p>
            <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      </section>
    </Layout>
    </>
  );
}
