import Head from 'next/head';
import Image from 'next/image';
import Link from '../styles/utils.module.css';
import styles from'./layout.module.css';
import utilStyles from'../styles/utils.module.css';
import profilePic from '../public/profile.jpg';

const name='Rami B.'
export const siteTitle='next.js sample website'

export default function Layout({children,home}){
	return (
		<div  className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta 
					name="description"
					content="Project for learing next.js"/>
				<meta
					property="og:image"
					content=	"test content"	/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				<>
					<Image
						priority
						src={profilePic}
						className={utilStyles.borderCircle}
						height={144}
						width={144}
						alt="error"
					/>
					<h1 className={utilStyles.heading2Xl}>{name}</h1>
				</>
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">← Back to home</Link>
				</div>
			)}
		</div>
	);
}
