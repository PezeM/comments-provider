import Head from 'next/head';
import {useAuth} from '../lib/auth'
import styles from '../styles/Home.module.css'

export default function Home() {
    const auth = useAuth();

    return (
        <div className={styles.container}>
            <Head>
                <title>Comments Provider</title>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Comments Provider Demo
                </h1>

                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/index.js</code>
                </p>

                <div>
                    <button onClick={() => auth.signIn()}>Sign In</button>

                    <div>
                        {auth?.user?.email}
                    </div>

                    {auth?.user && (
                        <button onClick={() => auth.signOut()}>Sign Out</button>
                    )}
                </div>

            </main>
        </div>
    )
}
