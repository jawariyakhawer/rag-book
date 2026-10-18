import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import modules from '@site/src/data/modules.json';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const {book} = siteConfig.customFields;

  return (
    <Layout title={book.bookTitle} description={book.tagline}>
      <header className={styles.hero}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
        <div className="container">
          <div className={styles.heroInner}>
            <span className={styles.badge}>{book.edition}</span>
            <h1 className={styles.title}>
              {book.bookTitle.split(' & ')[0]} <em>&amp;</em> {book.bookTitle.split(' & ')[1]}
            </h1>
            <p className={styles.sub}>{book.tagline}.</p>
            <div className={styles.actions}>
              <Link className={styles.btnPrimary} to="/docs/">
                Start reading
              </Link>
              <button
                type="button"
                className={styles.btnGhost}
                onClick={() => window.dispatchEvent(new Event('cw:open'))}>
                Ask the AI tutor
              </button>
            </div>
            <div className={styles.stats}>
              <div className={styles.stat}><strong>9</strong><span>Modules</span></div>
              <div className={styles.stat}><strong>41</strong><span>Weeks</span></div>
              <div className={styles.stat}><strong>2</strong><span>Languages</span></div>
              <div className={styles.stat}><strong>24/7</strong><span>AI tutor</span></div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHead}>
              <h2>Nine modules, one journey</h2>
              <p>From your first line of Python to building autonomous AI agents.</p>
            </div>
            <div className={styles.grid}>
              {modules.map((m) => (
                <Link key={m.n} to={m.path} className={styles.card}>
                  <span className={styles.cardNum}>MODULE {String(m.n).padStart(2, '0')}</span>
                  <h3>{m.title}</h3>
                  <p>{m.summary}</p>
                  <span className={styles.cardMeta}>{m.weeks} &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <div className="container">
          <div className={styles.tutor}>
            <div>
              <h2>Stuck on a topic?</h2>
              <p>
                The AI tutor reads this book and explains any topic with examples, in English or Roman Urdu. Click the chat
                icon in the corner anytime.
              </p>
            </div>
            <button type="button" className={styles.btnPrimary} onClick={() => window.dispatchEvent(new Event('cw:open'))}>
              Open the tutor
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
