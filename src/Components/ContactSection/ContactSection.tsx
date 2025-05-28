import styles from "./ContactSection.module.css";
import downloadImage from "../../assets/images/reviews/download_image.svg";
import avito from "../../assets/images/reviews/avito.svg";
import yandex from "../../assets/images/reviews/yandex.svg";
import twoGIS from "../../assets/images/reviews/2gis.svg";
import ozon from "../../assets/images/reviews/ozon.svg";

export const ContactSection = () => (
  <section className={styles.contactSection}>
    <h2 className={styles.heading}>Мы всегда рады помочь Вам</h2>
    <div className={styles.content}>
      <div className={styles.left}>
        <div className={styles.card}>
          <h3>Готовы сделать проект и для Вас</h3>
          <p className={styles.subtext}>
            Мы реализовали десятки проектов, но<br></br>показали Вам только
            единицы
          </p>
          <p className={styles.description}>
            Оставьте заявку — и уже сегодня наши менеджеры свяжутся с вами,
            чтобы обсудить задачу. Мы быстро подключимся к работе и при
            необходимости выедем на объект в ближайшее время
          </p>
          <button className={styles.yellowBtn}>Обратиться к нам</button>
          <button className={styles.whiteBtn}>
            <img src={downloadImage} alt="" />
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.card}>
          <h4>Отзывы о нас на других<br></br>площадках</h4>
          <div className={styles.links}>
            <div className={styles.link_wrapper}>
             <button className={styles.platformBtn}>
              <img src={avito} alt="" />
             </button>
            </div>
            <div className={styles.link_wrapper}>
              <button className={styles.platformBtn}>
                <img src={yandex} alt="" />
              </button>
              <button className={styles.platformBtn}>
                <img src={twoGIS} alt="" />
              </button>
            </div>
            <div className={styles.link_wrapper}>
              <button className={styles.platformBtn_ozon}>
                <img src={ozon} alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h4>Подпишитесь на наши соцсети</h4>
          <div className={styles.socials}>
            <button className={styles.socialBtn}>ВК</button>
            <button className={styles.socialBtn}>Телеграм</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);
