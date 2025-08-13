import React, { useState } from "react";
import classes from "./Product.module.css";
import { useNavigate } from "react-router-dom";
import basket from "../../../../assets/images/catalogs/basket.svg";
import fallbackImage from "../../../../assets/images/home_page_kitchen.png";
import { ProductType } from "../../../../utils/generalTypes";

type ProductElementType = {
  id: number;
  name: string;
  material: string;
  description: string;
  price: number;
  setShopModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: ProductType;
  addProduct: (product: ProductType, counter: number) => void;
};

const Product: React.FC<ProductElementType> = (props) => {
  const navigate = useNavigate();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getImageSrc = () => {
    const candidate =
      props.product.photo_links && props.product.photo_links[0]
        ? props.product.photo_links[0]
        : props.product.image;

    if (imageError || !candidate) {
      return fallbackImage;
    }

    const url = candidate;
    if (url.startsWith("http://") || url.startsWith("https://")) {
      return url;
    }
    if (url.startsWith("/")) {
      return `http://79.174.86.248:8080${url}`;
    }
    return `http://79.174.86.248:8080/${url}`;
  };

  return (
    <div className={classes.product}>
      {/* Временно закомментирована модалка
      <MyModal visible={itemModal} setVisible={setItemModal}>
        <ProductPage
          id={props.id}
          name={props.name}
          material={props.material}
          size={props.size}
          type={props.type}
          for_what={props.for_what}
          description={props.description}
          photo_links={props.photo_links}
          price={props.price}
          unit={props.unit}
          added_at={props.added_at}
          setItemModal={setItemModal}
          setShopModal={props.setShopModal}
          product={props.product}
          addProduct={props.addProduct}
        />
      </MyModal>
      */}
      <div className={classes.prodImg}>
        <img
          src={getImageSrc()}
          alt={props.name}
          onError={handleImageError}
          style={{
            maxWidth: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
      <div className={classes.title}>{props.name}</div>
      <div className={classes.charact}>
        <div>Категория: {props.material}</div>
      </div>
      <div className={classes.text}>{props.description}</div>
      <div className={classes.price}>от {props.price}/ шт</div>
      <div className={classes.buttons}>
        <div className={classes.divMoreButton}>
          <button
            className={classes.moreButton}
            onClick={() => navigate(`/product/${props.id}`)}
          >
            Подробнее
          </button>
        </div>
        <div className={classes.divBasketButton}>
          <button
            className={classes.basketButton}
            onClick={() => {
              props.setShopModal(true);
              props.addProduct(props.product, 1);
            }}
          >
            <img src={basket} />
            <div>В корзину</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
