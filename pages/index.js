import Head from "next/head";
import Image from "next/image";
import pro from "../public/pro.jpeg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CV</title>
        <meta name="description" content="Naranzul's CV" />
      </Head>

      <main className={styles.main}>
        <div className={styles.first}>
          <a className={styles.cardd}>
            <h2>Personal profile </h2>
            <p> +976 99125355</p>
            <p> GantogtokhNaranzul@gmail.com</p>
          </a>

          <Image
            className={styles.image}
            alt="Profile image"
            src={pro}
            width={150}
            height={150}
          />

          <a className={styles.carddd}>
            <h2>Personal profile </h2>
            <p>
              i am a life-long learner who loves the quote &quot;Live like you
              are going to die today, Learn like you will never die&quot;.
            </p>
          </a>
        </div>
        <div className={styles.grid}>
          <a className={styles.card}>
            <a className={styles.neg}>
              <h2>Experience </h2>
              <h3>2019-2021</h3>
              <p>FRONT END DEVELOPER</p>
              <p>React</p>
              <h3>2021-2022</h3>
              <p>FRONT END DEVELOPER</p>
              <p>Angular</p>

              <h2>Education</h2>
              <h3>2016-2019</h3>
              <p>
                High school of Mongolian university of science and technology
              </p>

              <h3>2019-2022</h3>
              <p>National University of Mongolian</p>
              <p>Software Engineer</p>
            </a>
            <a className={styles.hoyr}>
              <h2>Skills</h2>
              <div className="box">
                <h4> Leadership</h4>
                <div className={styles.percent}>
                  <div className={styles.huvi}></div>
                </div>
              </div>
              <div className="box">
                <h4> Creativity</h4>
                <div className={styles.percent}>
                  <div className={styles.huvi2}></div>
                </div>
              </div>
              <div className="box">
                <h4> Teamwork</h4>
                <div className={styles.percent}>
                  <div className={styles.huvi}></div>
                </div>
              </div>
              <h2>Language</h2>
              <div className="box">
                <h4> Javascript</h4>
                <div className={styles.percent}>
                  <div className={styles.huvi}></div>
                </div>
              </div>
              <div className="box">
                <h4> Typescript</h4>
                <div className={styles.percent}>
                  <div className={styles.huvi1}></div>
                </div>
              </div>
              <div class="box">
                <h4> React</h4>
                <div className={styles.percent}>
                  <div className={styles.huvi2}></div>
                </div>
              </div>
              <div className="box">
                <h4> Angular</h4>
                <div className={styles.percent}>
                  <div className={styles.huvi3}></div>
                </div>
              </div>
            </a>
          </a>
        </div>
      </main>
    </div>
  );
}
