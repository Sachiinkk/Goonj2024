import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import footerstyles from "@/styles/footer.module.scss"
import styles from "../styles/sponsers.module.scss";

export default function Sponsers() {
  const size = 150;
  return (
    <>
      <Head>
        <title>Goonj 2024 | Sponsers</title>
        <meta name="Goonj" content="Goonj 2023, UIET,PU CHD" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header>
          <Navbar />
        </header>
        {/* <Image
          className={styles.bg}
          src="/theme.png"
          alt="theme"
          width={1920}
          height={1080}
        /> */}
        <div className={styles.tplayer}></div>
        <div className={styles.sponsors}>
          <div className={styles.event1}>
          <img src="/events-hero.svg" alt="Event Banner" />
          </div>
          <div className={styles.sponsersWrapper}>
          <div className={styles.sps}>
            <a href="https://bit.ly/3Yujgba" download>
              APPLY FOR SPONSORSHIP
            </a>
          </div>
            <div>
              <Image
                className={styles.white}
                src="/sponsors/newSponsors/chaigad.jpg"
                alt="Edcosmo"
                width={size}
                height={size}
                style={{ borderRadius: "10px" }}
              />
              <h3>Chaa-Gad</h3>
            </div>


            <div>
              <Image
                className={styles.white}
                src="/sponsors/newSponsors/rankspiders.jpg"
                alt="MyFM"
                width={size}
                height={size}
                style={{ borderRadius: "10px" }}
              />
              <h3>Rank Spiders Digital Academy</h3>
            </div>
            <div>
            <Image
                className={styles.white}
                src="/sponsors/newSponsors/easemytrip.png"
                alt="MyFM"
                width={300}
                height={size+20}
                style={{ borderRadius: "10px", border: "20px solid white" }}
              />
              
              <h3>EaseMyTrip.com</h3>
            </div>
            <div>
            <Image
                className={styles.white}
                src="/sponsors/newSponsors/pu pulse.png"
                alt="MyFM"
                width={300}
                height={size+20}
                style={{ borderRadius: "10px", border: "20px solid white" }}
              />
              
              <h3>Youth Media Partner - PU Pulse</h3>
            </div>
          </div>
          <div className={footerstyles.footer} >
        
          <div style={{border: "2px solid white"}}></div>
        <p style={{color:"white"}}>© Goonj&apos;24 Digital Operations</p>
        <p style={{color:"white"}}>
       Designed by Akashdeep  
        <br/> 
        Developed by{" "}
      
        <a href="/" style={{color:"white"}}>
          Hitesh Bandhu,&nbsp;
        </a>
        <a href="/" style={{color:"white"}}>
            Kanika Tiwari,&nbsp;
        </a>
        <a href="/" style={{color:"white"}}>
        Mayur Sehgal,&nbsp;
        </a>
        <a href="/" style={{color:"white"}}>
          Bhargavi Goyal
        </a>
        </p>
        <p style={{color:"white"}}>Powered By <a style={{color:"white"}} rel="follow" target="_blank" href="https://quinji.com">Quinji Tech</a></p>
    </div>
        </div>
      </main>
    </>
  );
}