import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import styles from "../styles/artist.module.scss";
import footerstyles from "@/styles/footer.module.scss"
export default function Artist() {
  return (
    <>
      <Head>
        <title>Goonj 2024 | Artist</title>
        <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header>
          <Navbar color={"#AD0000"} />
        </header>
        <div className={styles.artist} style={{display:"grid", placeItems:"center" }}>
          <h2>Kulwinder Billa</h2>
          <div className={styles.media}>
            <video
              src="/artist/reel.mp4"
              className={styles.vid}
              controls
              autoPlay
            />
            <Image
              className={styles.img}
              src="/artist/Kulwinder Billa.png"
              alt="Kulwinder Billa"
              width={1080}
              height={1080}
            />
          </div>
          <div className={styles.preArtist} style={{display:"grid", placeItems:"center" }}>
          <p>Our Previous Star</p>
          <h3 style={{marginTop:"4rem", marginBottom:"-30px"}}>Gurnaam Bullar</h3>
            <Image
              className={styles.imgb}
              style={{ width: "60%", height: "auto" }}
              src="/artist/gurnaam.png"
              alt="Gurnaam Bullar"
              width={700}
              height={408}
            />
          </div>
        </div>
        <div className={footerstyles.footer} style={{backgroundColor:"#1c1919"}}>
        <p style={{color:"white"}}>Designed and Developed by <a href="https://hiteshbandhu05.notion.site/Goonj-24-Digital-Operations-b599af47a83b4ccbb6b0a621bb2922c9?pvs=74">© Goonj&apos;24 Digital Operations</a></p>
        <p>Powered and Secured By <a style={{color:"white"}} rel="follow" target="_blank" href="https://quinji.com">Quinji Tech</a></p>
    </div>
      </main>
    </>
  );
}
