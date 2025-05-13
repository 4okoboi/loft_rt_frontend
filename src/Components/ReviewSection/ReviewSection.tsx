import { useRef } from "react";
import classes from "./ReviewSection.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import checkmark from '../../assets/images/reviews/checkmark.svg'


interface ReviewSectionProps {
  goldTitle: string;
  whiteTitle: string;
  images: string[];
  firstTextSection: string;
  secondTextSection: string;
  secondTextSectionLow?: string;
  thirdTextSection: string;
  thirdTextSectionLow?: string;
  extraImage: string;
  innopolis?:boolean
}
export const ReviewSection = ({
  firstTextSection,
  goldTitle,
  images,
  secondTextSection,
  thirdTextSection,
  whiteTitle,
  secondTextSectionLow,
  thirdTextSectionLow,
  extraImage,
  innopolis
}: ReviewSectionProps) => {
  const block1 = useRef(null);
  const block2 = useRef(null);
  const block3 = useRef(null);
  const block4 = useRef(null);
  const block5 = useRef(null);
  const block6 = useRef(null);
  const block7 = useRef(null);
  const block8 = useRef(null);
  const observedElements = [block1, block2, block3, block4, block5, block6, block7, block8];

  useIntersectionObserver(observedElements, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  return (
    <div className={classes.review_section}>
      <div className={classes.review_section_heading} ref={block1}>
        <p className={classes.review_section_heading_gold}>{goldTitle}
          {innopolis && (<img src={checkmark} alt="" />)}
        </p>
      </div>
      <div ref={block2}>
        <p className={classes.review_section_heading_white}>{whiteTitle}</p>
      </div>
      <div className={classes.review_section_cards} ref={block3}>
        {images.map((image) => (
          <>
            <div>
              <img src={image} />
            </div>
          </>
        ))}
      </div>
      <div className={classes.review_section_text} ref={block4}>
        <p className={classes.review_section_text_heading}>История проекта</p>
        <div className={classes.review_section_text_first_wrapper}>
          <div className={classes.review_section_text_first} >
            <p className={classes.review_section_text_number}>1</p>
            <p className={classes.review_section_text_description}>
              {firstTextSection}
            </p>
          </div>
          <div className={classes.image_block}>
            <img src={extraImage} alt="" />
          </div>
        </div>

        <div className={classes.review_section_text_second_and_third}>
          <p className={classes.review_section_text_number}>2</p>
          <p className={classes.review_section_text_description}>
            {secondTextSection}
            {secondTextSectionLow && (
              <>
                <br></br>
                <br></br>
                {secondTextSectionLow}
              </>
            )}
          </p>
        </div>
        <div className={classes.review_section_text_second_and_third}>
          <p className={classes.review_section_text_number}>3</p>
          <p className={classes.review_section_text_description}>
            {thirdTextSection}
            {thirdTextSectionLow && (
              <>
                <br></br>
                <br></br>
                {thirdTextSectionLow}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
