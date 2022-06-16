import { Alert, Image } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import styles from "@/styles/components/home/Products.module.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import LearnMore from "../Common/LearnMore";
import { MdKeyboardArrowRight } from "react-icons/md";
const Products = () => {
  const [xcord, setXcord] = useState(0);
  const [ycord, setYcord] = useState(0);
  const [opacitycord, setOpacitycord] = useState("0");
  useEffect(() => {
    AOS.refresh();
    AOS.init();
  }, []);
  const ProductsList = [
    {
      name: "MxMarket",
      detail:
        "A Centralized Trading platform for Spot trading, OTC desk, and P2P Trading. Offers world-class trading technology, robust legal and compliance solutions, and round-the-clock support. Automate trades without involving a central authority and connect buyers and sellers directly.",
      link1: "",
      link2: "",
      img: "/assets/images/mh1.svg",
    },
    {
      name: "MxSuper",
      detail:
        "A Top-notch derivative and Margin exchange platform that promises to open up new investment avenues for traders. Gain access to a pool of untapped crypto holders and accelerate the transaction process with automated smart contracts.",
      link1: "",
      link2: "",
      img: "/assets/images/mh2.svg",
    },
    {
      name: "MxDex",
      detail:
        "We help you facilitate the large-scale trading of crypto assets between many users with a decentralized trading platform. A fast and transparent solution enables users to have complete control over their accounts and assets.",
      link1: "",
      link2: "",
      img: "/assets/images/mh3.svg",
    },
    {
      name: "MxFi",
      detail:
        "Take a shift from traditional and centralized finance to peer-to-peer and decentralized technologies based on the Ethereum blockchain. The DeFi ecosystem includes banking, payments and settlements, lending and borrowing platforms.",
      link1: "",
      link2: "",
      img: "/assets/images/mh4.svg",
    },
    {
      name: "MxFund",
      detail:
        "A digital asset fundraising platform will boost fundraising opportunities for IEO, ICO, IDO, and IGO development. Helps to know more about the product and its roadmap.",
      link1: "",
      link2: "",
      img: "/assets/images/mh5.svg",
    },
    {
      name: "MxWallet",
      detail:
        "Wallets not just allow you to send and receive digital currency but also monitor and manage your cryptocurrency assets. It can store one or multiple currencies at just one time. Its features offer a chance to level up cryptocurrency transactions.",
      link1: "",
      link2: "",
      img: "/assets/images/mh6.svg",
    },
    {
      name: "MxBlock",
      detail:
        "Our experts have a knack for making end-users' life simple. With the help of MxBlock, physical assets can be converted into digital tokens and traded on exchanges through tokenization. and blockchain helps you manage ownership transfer efficiently.",
      link1: "",
      link2: "",
      img: "/assets/images/mh7.svg",
    },
    {
      name: "MxNFT",
      detail:
        "A custom NFT ecosystem infused with cutting-edge technology and transparent accessibility allows creators, collectors, and dealers to benefit from liquid investments.",
      link1: "",
      link2: "",
      img: "/assets/images/mh8.svg",
    },
  ];
  return (
    <div className={styles.OurProductsContainer}>
      <div
        className={styles.FollowerLight}
        style={{ left: xcord, top: ycord, opacity: opacitycord }}
      ></div>
      <div>
        <h3
          className={styles.OurProductsHeading}
          // data-aos="zoom-in"
          // data-aos-duration="2000"
        >
          Our Products
        </h3>
        <div className={styles.OurProductsCardsContainer}>
          <div
            className={styles.OurProductsCard}
            onMouseMove={(e) => {
              setXcord(e.pageX);
              setYcord(e.pageY);
              setOpacitycord("0.7");
            }}
            onMouseOut={() => setOpacitycord("0")}
            onMouseLeave={() => setOpacitycord("0")}
          >
            {/*  */}
            {ProductsList.map((value, index) => (
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-offset="300"
                className={`${styles.OurProductsCardsMain}`}
              >
                <div className={styles.OurProductsCardSub}>
                  <div className={styles.OurProductsCardImage}>
                    <Image src={value.img} />
                  </div>
                  <div className={styles.OurProductsCardDetail}>
                    <h4 className={styles.OurProductsHead}>{value.name}</h4>
                    <p className={styles.OurProductsParagraph}>
                      {value.detail}
                    </p>
                    {/* <div className={styles.LearnMore}>
                      Learn More{" "}
                      <Image src="/assets/images/sendBtn.svg" height={15} />
                    </div> */}
                    <LearnMore
                      t1={<MdKeyboardArrowRight />}
                      t2={<MdKeyboardArrowRight />}
                    />
                  </div>
                  <div>
                    <div className={styles.BtnContainer}>
                      <div
                        className={styles.RequestDemo}
                        // style={{ opacity: "0" }}
                      >
                        Explore Product&nbsp;&nbsp;
                        <HiOutlineExternalLink />
                      </div>
                      <div className={styles.RequestDemo1}>
                        <HiOutlineExternalLink />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
