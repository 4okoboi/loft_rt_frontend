import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTypedSelector, useTypedDispatch } from "../../redux/redux-store";
import { getProductById } from "../../redux/catalog-reducer";
import ProductDetailPage from "./ProductDetailPage";
import { ProductType } from "../../utils/generalTypes";

const ProductDetailPageContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const [shopModal, setShopModal] = useState(false);
  const [basketItems, setBasketItems] = useState<Array<ProductType>>([]);

  const currentProduct = useTypedSelector(
    (state) => state.catalogPage.currentProduct
  );
  const isLoading = useTypedSelector(
    (state) => state.catalogPage.isLoadingProduct
  );
  const error = useTypedSelector((state) => state.catalogPage.error);

  useEffect(() => {
    if (id) {
      // Получаем товар по ID
      dispatch(getProductById(id) as any);
    }
  }, [dispatch, id]);

  const addProduct = (product: ProductType, counter: number) => {
    const existingProduct = basketItems.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedItems = basketItems.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 0) + counter }
          : item
      );
      setBasketItems(updatedItems);
    } else {
      setBasketItems([...basketItems, { ...product, quantity: counter }]);
    }

    setShopModal(true);
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "18px",
        }}
      >
        Загрузка товара...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ color: "red", fontSize: "18px" }}>{error}</div>
        <button
          onClick={() => navigate("/catalog")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Вернуться в каталог
        </button>
        <button
          onClick={() => dispatch(getProductById(id!) as any)}
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Попробовать снова
        </button>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ fontSize: "18px" }}>Товар не найден</div>
        <button
          onClick={() => navigate("/catalog")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Вернуться в каталог
        </button>
      </div>
    );
  }

  const photos: string[] = Array.isArray(currentProduct.photo_links)
    ? currentProduct.photo_links
    : currentProduct.image
    ? [currentProduct.image]
    : [];

  return (
    <ProductDetailPage
      id={currentProduct.id}
      name={currentProduct.name}
      material={currentProduct.category || ""}
      size=""
      type={currentProduct.category || ""}
      for_what=""
      description={currentProduct.description}
      photo_links={photos}
      price={currentProduct.price}
      unit=""
      added_at=""
      setShopModal={setShopModal}
      product={currentProduct}
      addProduct={addProduct}
    />
  );
};

export default ProductDetailPageContainer;
