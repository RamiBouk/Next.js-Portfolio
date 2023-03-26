import Head from 'next/head';
import Image from 'next/image';
import Link from '../styles/utils.module.css';
import styles from'./layout.module.css';
import utilStyles from'../styles/utils.module.css';

const name='Rami B.'
export const siteTitle='next.js sample website'

export default function Layout({children,home}){
	return (
		<div  className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico"/>
				<meta 
					name="description"
					content="learn how to build personal website using next.js"/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle,
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home?(<>
					<Image
						priority
						src="/profile.jpg"
						className={utilStyles.borderCircle}
						height={144}
						width={144}
						alt="error"
					/>
					<Image
						priority
						src="/images/profile.jpg"
						className={utilStyles.borderCircle}
						height={144}
						width={144}
						alt="error"
					/>
					<Image
						priority
						src="./images/profile.jpg"
						className={utilStyles.borderCircle}
						height={144}
						width={144}
						alt="error"
					/>
					<h1 className={utilStyles.heading2Xl}>{name}</h1>
				</>
				):(
					<>
						<Link href="/">
							<Image
								priority
								src='/profile.jpg'
								className={utilStyles.borderCircle}
								height={144}
								width={144}
								alt="error"
							/>
						</Link>
						<h2 className={utilStyles.headingLg}>
							<Link href="/" className={utilStyles.colorInherit}>
								{name}
							</Link>
						</h2>
					</>

				)}
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
