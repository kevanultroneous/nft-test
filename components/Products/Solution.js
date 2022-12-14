import styles from "@/styles/components/Products/Solution.module.css";
import { Image } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { HiOutlineExternalLink } from "react-icons/hi";
import ActionButtonV2 from "../Common/ActionButtonV2";
import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
const Solution = () => {
  useEffect(() => {
    Aos.refresh();
    Aos.init();
  }, []);
  return (
    <section
      className={styles.SolutionHelps}
      data-aos="fade"
      data-aos-duration="500"
    >
      <h3>This Solution Helps</h3>
      <Row
        className={styles.Solutionrow}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <Col
          xl={3}
          xs={12}
          md={4}
          className={styles.SolutionDetail}
          // data-aos="fade-up"
          // data-aos-duration="2000"
        >
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5 className={styles.Divider}>
            Strong Technical Competence{" "}
            {/* <span className={styles.divider}>|</span> */}
          </h5>
        </Col>

        <Col
          xl={3}
          xs={12}
          md={4}
          className={styles.SolutionDetail}
          // data-aos="fade-up"
          // data-aos-duration="2000"
        >
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5 className={styles.Divider}>
            Strong Technical Competence{" "}
            {/* <span className={styles.divider}>|</span> */}
          </h5>
        </Col>

        <Col
          xl={3}
          xs={12}
          md={4}
          className={styles.SolutionDetail}
          // data-aos="fade-up"
          // data-aos-duration="2000"
        >
          <Image alt="solution" src={"/assets/images/solutionicon.svg"} />
          <h5>Strong Technical Competence</h5>
        </Col>
      </Row>
      <div
        className={styles.Button}
        // data-aos="fade-up"
        // data-aos-duration="2000"
      >
        <ActionButtonV2
          text={
            <>
              <span className={styles.Btntext}>Try Free Demo </span>
              <span className={styles.Icon}>
                <HiOutlineExternalLink />
              </span>
            </>
          }
          href={"#"}
        />
      </div>
    </section>
  );
};

export default Solution;
