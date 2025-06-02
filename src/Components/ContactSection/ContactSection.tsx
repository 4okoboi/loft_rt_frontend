import styles from "./ContactSection.module.css";
import downloadImage from "../../assets/images/reviews/download_image.svg";
import avito from "../../assets/images/reviews/avito.svg";
import yandex from "../../assets/images/reviews/yandex.svg";
import twoGIS from "../../assets/images/reviews/2gis.svg";
import ozon from "../../assets/images/reviews/ozon.svg";
import vk from "../../assets/images/reviews/vk_logo.svg";
import telegram from "../../assets/images/reviews/telegram_logo.svg";
import { useRef } from "react";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useWindowSize } from "../ReviewSection/useWindowSize";
import { ContactLine } from "./ContactLine";


export const ContactSection = () => {
  const block1 = useRef(null)
  const block2 = useRef(null)
  const block3 = useRef(null)
  const block4 = useRef(null)
	const observedElements = [block1, block2, block3, block4]

	useIntersectionObserver(observedElements, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5,
	})

  const {width} = useWindowSize()
  const isMobile = width < 600

  return(
  <section className={styles.contactSection}>
    <h2 className={styles.heading} ref={block1}>Мы всегда рады помочь Вам
    {isMobile && <ContactLine />}
    </h2>
    
    <div className={styles.content}>
      <div className={styles.left} ref={block2}>
        <div className={styles.card}>
          <h3>Готовы сделать проект и для Вас</h3>
          <p className={styles.subtext}>
            Мы реализовали десятки{isMobile && <br></br>}проектов, но{isMobile? null :<br></br>} показали Вам{isMobile && <br></br>}только единицы
          </p>
          <p className={styles.description}>
            Оставьте заявку — и уже сегодня наши менеджеры свяжутся с вами,
            чтобы обсудить задачу. Мы быстро подключимся к работе и при
            необходимости выедем на объект в ближайшее время
          </p>
          <div className={styles.buttons_wrapper}>
            <div className={styles.buttons}>
              <button className={styles.yellowBtn}>Обратиться к нам</button>
              <button className={styles.whiteBtn}>
                {isMobile? "Скачать портфолио" : <img src={downloadImage} alt="" />}
              </button>
            </div>
            <p className={styles.portfolio_btn_signature}>скачать<br></br>полное<br></br>портфолио</p>
          </div>
        </div>
      </div>
      <div className={styles.right} ref={block3}>
        <div className={styles.card}>
          <h4>Отзывы о нас на других<br></br>площадках</h4>
          <div className={styles.links}>
            {isMobile? 
            (
              <div className={styles.link_wrapper}>
                <div className={styles.platforms}>
                  <button className={styles.platformBtn}>
                    <img src={avito} alt="" />
                  </button>
                  <button className={styles.platformBtn}>
                    <img src={twoGIS} alt="" />
                  </button>
                </div>
                <div className={styles.platforms}>
                  <button className={styles.platformBtn}>
                    <img src={yandex} alt="" />
                  </button>
                  <button className={styles.platformBtn_ozon}>
                    <img src={ozon} alt="" />
                  </button>
                </div>
              </div>
            ) : (<><div className={styles.link_wrapper}>
             <button className={styles.platformBtn_avito}></button>
            </div>
            <div className={styles.link_wrapper}>
              <button className={styles.platformBtn_yandex}></button>
              <button className={styles.platformBtn_twoGIS}></button>
            </div>
            <div className={styles.link_wrapper}>
              <button className={styles.platformBtn_ozon}></button>
            </div></>)}
          </div>
        </div>
        <div className={styles.socials_wrapper} ref={block4}>
          <h4>Подпишитесь на наши соцсети</h4>
          <div className={styles.socials}>
            <button className={styles.socialBtn}></button>
            <button className={styles.socialBtn}></button>
          </div>
        </div>
      </div>
    </div>
  </section>
)};
