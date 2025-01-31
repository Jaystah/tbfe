import SunShape from "@/components/ShapeAnimation/SunShape";
import trackImg from "@/images/track-line.png";
import ListenOnBtns from "@/components/Shared/ListenOnBtns";
import waveLine from "@/images/wave-line.png";
import bannerImg from "@/images/hero1-main.png";
import FadeDown from "@/motion/FadeDown";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import Flag from "react-flagpack";

const Hero = () => {
  const { t } =  useTranslation();
  return (
    <section className="hero-section texture-bg-2 pt-120">
      <div className="vector-line position-absolute top-50 start-50 translate-middle w-100 h-100 z-n1 mt-20">
        <img className="w-100" src={waveLine} alt="line" />
      </div>
      <SunShape position={"sun-shape-1"} visibility={"d-none d-md-block"} />
      <SunShape position={"sun-shape-2"} visibility={"d-none d-md-block"} />
      <SunShape position={"sun-shape-3"} visibility={"d-none d-md-block"} />
      <div className="container">
        <div className="row g-6">
          <div className="col-lg-8">
            <div className="hero-content-wrapper text-lg-start text-center pb-xxl-17 pb-xl-12 pb-10">
              <div className="img-area mb-4 mx-lg-0 mx-auto">
                <img className="w-100" src={trackImg} alt="image" />
              </div>
              <FadeDown>
                <h2 className="hero-title display-two mb-6" dangerouslySetInnerHTML={{__html: t('headerTitle')}}/>
                <p className="fs-xl fw-normal me-xl-20 pe-xxl-5">
                {t('headerFirst')}
                </p>
                <br />
                <p className="fs-xl fw-normal me-xl-20 pe-xxl-5" dangerouslySetInnerHTML={{__html: t('headerSecond')}}>
                </p>
                <br />
                <div className="d-flex align-items-center justify-content-lg-start justify-content-center flex-wrap gap-sm-6 gap-3 mt-xxl-10 mt-lg-8 mt-6 mb-xxl-17 mb-lg-10 mb-8">
                  <div className="input-wrapper alt-color d-grid col-md-6 col-10">
                    <input
                      type="email"
                      id="email"
                      className="p-3"
                      placeholder={t('form.yourEmail')}
                      name="email"
                    />
                  </div>
                  <Link to="/latest-episode" className="bttn-1 col-md-6 mt-2 col-10">
                    <span className="text-nowrap fw-semibold">
                      {t('joinWaitlist')}
                    </span>
                    <span className="icon icon-right">
                      <i className="ti ti-arrow-right"></i>
                    </span>
                  </Link>
                  {/* <a
                    href="#newsletter"
                    className="bttn-1 bttn-outline alt-position"
                  >
                    <span className="text-nowrap fw-semibold">Create Debating Profile</span>
                    <span className="icon icon-right">
                      <i className="ti ti-arrow-right"></i>
                    </span>
                  </a> */}
                </div>
                {/* <div className="listen-to-area">
                  <p className="fs-lg mb-6 fw-medium">
                    Debating available in the following languages:
                  </p>
                  <div className="d-flex gap-5">
                  <Flag code="US" /> <Flag code="NL" />
                  </div>
                </div> */}
              </FadeDown>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="hero-banner-wrapper scrollAnimation ">
              <img className="col-md-10 col-12" src={bannerImg} alt="banner" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
