import React, { useEffect, useMemo, useRef, useState } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { ProductType } from "../../../utils/generalTypes";
import classes from "./AllProducts.module.css";
import Product from "./Product/Product";
import RangeSlider from "../../../UI/RangeSlider/RangeSlider";
import { useTypedDispatch, useTypedSelector } from "../../../redux/redux-store";
import MyModal from "../../../UI/MyModal/MyModal";
import BasketPage from "../../BasketPage/BasketPage";
import filtImg from "../../../assets/images/catalogs/filtImg.svg";
import first_image from "../../../assets/images-webp/catalog/first_img.svg";
import second_image from "../../../assets/images-webp/catalog/second_img.svg";
import third_image from "../../../assets/images-webp/catalog/third_img.svg";
import fourth_image from "../../../assets/images-webp/catalog/fourth_img.svg";
import fifth_image from "../../../assets/images-webp/catalog/fifth_img.svg";
import sixth_image from "../../../assets/images-webp/catalog/sixth_img.svg";
import { relative } from "path";

type AllProductsFormPropsType = {
  products: Array<ProductType>;
  isShowPreloader: boolean;
  getProducts: (
    counter: string,
    material: string,
    type: string,
    price_range: string,
    sort: string,
    search_query: string
  ) => void;
  getItem: (itemId: string) => void;
  postAudit: (
    name: string,
    number: string,
    comment: string,
    items: string
  ) => void;
};

const filtersData: Array<string> = [
  "Кухни",
  "Шкафы",
  "Столы",
  "Стеллажи",
  "Кухонные столы",
  "Скамейки",
  "Журнальные столы",
  "Тумбы под TV",
  "Зеркала",
  "Стулья",
  "Консоли",
  "Диваны",
  "Кровати",
];

const categoriesData : Record<string, Array<string>> = {
  'Торговое оборудование': [
    'Рейлы',
    'Вешала',
    'Стеллажи',
    'Ресепшены',
    'Демонстрационные столы',
    'Примерочные',
    'Зеркала',
    'Витрины',
    'Журнальные столы'
  ],
  'Офисная мебель': [
    'Столы',
    'Столы переговорные',
    'Столы руководительские',
    'Тумбы',
    'Шкафы',
    'Стеллажи',
    'Диваны',
    'Ресепшены',
    'Стулья',
    'Кухни'
  ],
  'Кафе, бары, рестораны': [
    'Столы для кафе',
    'Диваны',
    'Стеллажи',
    'Стулья'
  ],
  'Мебель для дома': [
    'Кухни',
    'Шкафы',
    'Столы',
    'Кухонные столы',
    'Стеллажи',
    'Тумбы под ТВ',
    'Журнальные столы',
    'Скамейки',
    'Зеркала',
    'Кровати',
    'Диваны',
    'Консоли',
    'Стулья'
  ],
  'Кухни, шкафы купе': [], // Нет подкатегорий в примере
  'Для гостиниц': [
    'Кухни',
    'Шкафы',
    'Столы',
    'Кухонные столы',
    'Стеллажи',
    'Тумбы под ТВ',
    'Журнальные столы',
    'Скамейки',
    'Зеркала',
    'Кровати',
    'Диваны',
    'Консоли',
    'Стулья'
  ]
};

const AllProducts: React.FC<AllProductsFormPropsType> = (props) => {
  const products = useTypedSelector((state) => state.catalogPage.products);

  const dispatch = useTypedDispatch();

  const [shopModal, setShopModal] = useState(false);

  const [selected, setSelected] = useState("Все_породы_дерева");

  const [counter, setCounter] = useState(1);
  const [material, setMaterial] = useState("none");
  const [type, setType] = useState<Array<string>>([]);
  const [price_range, setPrice_range] = useState("1499-45999");
  const [sort, setSort] = useState("default");
  const [search_query, setSearch_query] = useState();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const currentSubcategories = selectedCategory ? categoriesData[selectedCategory] : []

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    switch (e.target.value) {
      case "Все_породы_дерева":
        return setMaterial("none");
      case "Хвоя":
        return setMaterial("хвоя");
      case "Ангарская_сосна":
        return setMaterial("ангарская_сосна");
      case "Берёза":
        return setMaterial("берёза");
      case "Лиственница":
        return setMaterial("лиственница");
      case "Дуб":
        return setMaterial("дуб");
      case "Кедр":
        return setMaterial("кедр");
      default:
        return setMaterial("none");
    }
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "Порядок: по умолча":
        setSort("default");
        break;
      case "Порядок: цена вверх":
        setSort("priceup");
        break;
      case "Порядок: цена вниз":
        setSort("pricedown");
        break;
      default:
        setSort("default");
        break;
    }
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const label = event.target.name;

    if (label === "все") {
      if (event.target.checked) {
        const allLabels = [
          "вешало",
          "журнальные столики",
          "консоли",
          "кухня",
          "рейлы",
          "ресепшн",
          "стелажи",
          "стол переговорный",
          "стол руководителя",
          "столы",
          "стулья",
          "торговый островок",
          "тумбы",
          "шкафы",
          "прочее",
        ];
        setType(allLabels);
      } else {
        setType([]);
      }
    } else {
      setType((prevType) => {
        if (event.target.checked) {
          return [...prevType, label];
        } else {
          return prevType.filter((item) => item !== label);
        }
      });
    }
  };

  const handlePrice_range = (range0: number, range1: number) => {
    setPrice_range(String(range0) + "-" + String(range1));
  };

  const [basketItems, setBasketItems] = useState<Array<ProductType>>([]);

  const addProduct = (product: ProductType, counter: number) => {
    const existingProduct = basketItems.find((item) => item.id === product.id);

    if (existingProduct) {
      existingProduct.added_at = String(Number(existingProduct.added_at) + 1);
      setBasketItems([...basketItems]);
    } else {
      product.added_at = String(counter);
      setBasketItems([...basketItems, product]);
    }
  };

  const removeItemById = (idToRemove: number): Array<ProductType> => {
    const updatedArray = basketItems.filter((item) => item.id !== idToRemove);
    return setBasketItems(updatedArray);
  };

  const [articles, setArticles] = useState<Array<string>>([]);

  const addArticle = (article: string) => {
    setArticles([...articles, article]);
  };

  const removeArticle = (stringToRemove: string) => {
    const updatedArray = articles.filter((item) => item !== stringToRemove);
    return setArticles(updatedArray);
  };

  useEffect(() => {
    props.getProducts(
      String(counter),
      material,
      type.join("_"),
      price_range,
      sort,
      search_query
    );
  }, [counter, material, type, price_range, sort, search_query]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1200);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [isMiniMobile, setIsMiniMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMiniMobile(window.innerWidth < 450);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className={classes.products}>
      <MyModal visible={shopModal} setVisible={setShopModal}>
        <BasketPage
          basketItems={basketItems}
          setBasketItems={setBasketItems}
          addProduct={addProduct}
          removeItemById={removeItemById}
        />
      </MyModal>
      <div className={classes.leftFilterBlock} style={{display: isMobile ? 'none': 'block'}}>
        <div className={classes.allWoodSpecies}>
          <div>
            <input
              className={classes.customRadio}
              name="color"
              type="radio"
              id="Все_породы_дерева"
              value="Все_породы_дерева"
              checked={selected === "Все_породы_дерева"}
              onChange={handleChange}
            />
            <label
              htmlFor="Все_породы_дерева"
              style={{
                opacity: selected === "Все_породы_дерева" ? 1 : 0.6,
                color: "#C9C9C9",
              }}
            >
              Все породы дерева
            </label>
          </div>
          <div>
            <input
              className={classes.customRadio}
              name="color"
              type="radio"
              id="Хвоя"
              value="Хвоя"
              checked={selected === "Хвоя"}
              onChange={handleChange}
            />
            <label
              htmlFor="Хвоя"
              style={{
                opacity: selected === "Хвоя" ? 1 : 0.6,
                color: "#C9C9C9",
              }}
            >
              Хвоя
            </label>
          </div>
          <div>
            <input
              className={classes.customRadio}
              name="color"
              type="radio"
              id="Ангарская_сосна"
              value="Ангарская_сосна"
              checked={selected === "Ангарская_сосна"}
              onChange={handleChange}
            />
            <label
              htmlFor="Ангарская_сосна"
              style={{
                opacity: selected === "Ангарская_сосна" ? 1 : 0.6,
                color: "#C9C9C9",
              }}
            >
              Ангарская сосна
            </label>
          </div>
          <div>
            <input
              className={classes.customRadio}
              name="color"
              type="radio"
              id="Берёза"
              value="Берёза"
              checked={selected === "Берёза"}
              onChange={handleChange}
            />
            <label
              htmlFor="Берёза"
              style={{
                opacity: selected === "Берёза" ? 1 : 0.6,
                color: "#C9C9C9",
              }}
            >
              Берёза
            </label>
          </div>
          <div>
            <input
              className={classes.customRadio}
              name="color"
              type="radio"
              id="Лиственница"
              value="Лиственница"
              checked={selected === "Лиственница"}
              onChange={handleChange}
            />
            <label
              htmlFor="Лиственница"
              style={{
                opacity: selected === "Лиственница" ? 1 : 0.6,
                color: "#C9C9C9",
              }}
            >
              Лиственница
            </label>
          </div>
          <div>
            <input
              className={classes.customRadio}
              name="color"
              type="radio"
              id="Дуб"
              value="Дуб"
              checked={selected === "Дуб"}
              onChange={handleChange}
            />
            <label
              htmlFor="Дуб"
              style={{
                opacity: selected === "Дуб" ? 1 : 0.6,
                color: "#C9C9C9",
              }}
            >
              Дуб
            </label>
          </div>
          <div>
            <input
              className={classes.customRadio}
              name="color"
              type="radio"
              id="Кедр"
              value="Кедр"
              checked={selected === "Кедр"}
              onChange={handleChange}
            />
            <label
              htmlFor="Кедр"
              style={{
                opacity: selected === "Кедр" ? 1 : 0.6,
                color: "#C9C9C9",
              }}
            >
              Кедр
            </label>
          </div>
        </div>
        <div className={classes.rangeSlider}>
          <RangeSlider handlePrice_range={handlePrice_range} />
        </div>
        <div className={classes.checkTitle}>Тип товара:</div>
        <div className={classes.productsType}>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="все"
              name="все"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="все">Все</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="вешало"
              name="вешало"
              onChange={handleCheckboxChange}
              checked={type.includes("вешало")}
            />
            <label htmlFor="вешало">Вешало</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="журнальные столики"
              name="журнальные столики"
              onChange={handleCheckboxChange}
              checked={type.includes("журнальные столики")}
            />
            <label htmlFor="журнальные столики">Журнальные столики</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="консоли"
              name="консоли"
              onChange={handleCheckboxChange}
              checked={type.includes("консоли")}
            />
            <label htmlFor="консоли">Консоли</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="кухня"
              name="кухня"
              onChange={handleCheckboxChange}
              checked={type.includes("кухня")}
            />
            <label htmlFor="кухня">Кухня</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="рейлы"
              name="рейлы"
              onChange={handleCheckboxChange}
              checked={type.includes("рейлы")}
            />
            <label htmlFor="рейлы">Рейлы</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="ресепшн"
              name="ресепшн"
              onChange={handleCheckboxChange}
              checked={type.includes("ресепшн")}
            />
            <label htmlFor="ресепшн">Ресепшн</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="стол переговорный"
              name="стол переговорный"
              onChange={handleCheckboxChange}
              checked={type.includes("стол переговорный")}
            />
            <label htmlFor="стол переговорный">Стол переговорный</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="стол руководителя"
              name="стол руководителя"
              onChange={handleCheckboxChange}
              checked={type.includes("стол руководителя")}
            />
            <label htmlFor="стол руководителя">Стол руководителя</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="столы"
              name="столы"
              onChange={handleCheckboxChange}
              checked={type.includes("столы")}
            />
            <label htmlFor="столы">Столы</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="стулья"
              name="стулья"
              onChange={handleCheckboxChange}
              checked={type.includes("стулья")}
            />
            <label htmlFor="стулья">Стулья</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="торговый островок"
              name="торговый островок"
              onChange={handleCheckboxChange}
              checked={type.includes("торговый островок")}
            />
            <label htmlFor="торговый островок">Торговый островок</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="тумбы"
              name="тумбы"
              onChange={handleCheckboxChange}
              checked={type.includes("тумбы")}
            />
            <label htmlFor="тумбы">Тумбы</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="шкафы"
              name="шкафы"
              onChange={handleCheckboxChange}
              checked={type.includes("шкафы")}
            />
            <label htmlFor="шкафы">Шкафы</label>
          </div>
          <div>
            <input
              type="checkbox"
              className={classes.customCheckbox}
              id="прочее"
              name="прочее"
              onChange={handleCheckboxChange}
              checked={type.includes("прочее")}
            />
            <label htmlFor="прочее">Прочее</label>
          </div>
        </div>
      </div>
      <div className={classes.rightProductsBlock}>
        <div className={classes.searchAndSort}>
          <div className={classes.filtAlt} style={{cursor: "pointer"}}>
            <div>
              <img src={filtImg} />
            </div>
            <div style={{fontFamily:'NAMU-1960-otf', position:'relative'}}>Фильтры
              <div className={classes.sortSelection}>
                <select className={classes.sortfield} onChange={handleSort}>
                  <option>Порядок: по умолча</option>
                  <option>Порядок: цена вверх</option>
                  <option>Порядок: цена вниз</option>
                </select>
              </div>
            </div>
          </div>
          <div className={classes.divSearchfield}>
            <input
              placeholder={isMiniMobile ? "" : "Поиск"}
              className={classes.searchfield}
              onChange={(event) => setSearch_query(event.target.value)}
            />
          </div>
          <div className={classes.divSortfield}>
            <select className={classes.sortfield} onChange={handleSort}>
              <option>Порядок: по умолча</option>
              <option>Порядок: цена вверх</option>
              <option>Порядок: цена вниз</option>
            </select>
          </div>
        </div>
        <div className={classes.filtersWrapper}>
          <div className={classes.filtersWithImgWrapper}>
            <div className={classes.filtersWithImg}>
              <div className={selectedCategory === 'Торговое оборудование' ? classes.filterWithImgWrapperActive  : classes.filterWithImgWrapper} onClick={() => setSelectedCategory('Торговое оборудование')} >
                <div className={classes.labelWrapper}>
                  <div className={classes.filterLabel}>
                    Торговое оборудование
                  </div>
                </div>
                <div className={classes.imgWrapper}>
                  <img src={first_image} className={classes.firstImg} />
                </div>
              </div>
              <div className={selectedCategory === 'Офисная мебель' ? classes.filterWithImgWrapperActive  : classes.filterWithImgWrapper} onClick={() => setSelectedCategory('Офисная мебель')}>
                <div className={classes.labelWrapper}>
                  <div className={classes.filterLabel}>Офисная мебель</div>
                </div>
                <div className={classes.imgWrapper}>
                  <img src={second_image} className={classes.secondImg} />
                </div>
              </div>
              <div className={selectedCategory === 'Кафе, бары, рестораны' ? classes.filterWithImgWrapperActive  : classes.filterWithImgWrapper} onClick={() => setSelectedCategory('Кафе, бары, рестораны')}>
                <div className={classes.labelWrapper}>
                  <div className={classes.filterLabel}>
                    Кафе<br></br>Бары<br></br>Рестораны
                  </div>
                </div>
                <div className={classes.imgWrapper}>
                  <img src={third_image} className={classes.thirdImg} />
                </div>
              </div>
              <div className={selectedCategory === 'Мебель для дома' ? classes.filterWithImgWrapperActive  : classes.filterWithImgWrapper} onClick={() => setSelectedCategory('Мебель для дома')}>
                <div className={classes.labelWrapper}>
                  <div className={classes.filterLabel}>Для дома</div>
                </div>
                <div className={classes.imgWrapper}>
                  <img src={fourth_image} className={classes.fourthImg} />
                </div>
              </div>
              <div className={selectedCategory === 'Кухни, шкафы купе' ? classes.filterWithImgWrapperActive  : classes.filterWithImgWrapper} onClick={() => setSelectedCategory("Кухни, шкафы купе")}>
                <div className={classes.labelWrapper}>
                  <div className={classes.filterLabel}>
                    Кухни<br></br>Шкафы купе
                  </div>
                </div>
                <div className={classes.imgWrapper}>
                  <img src={fifth_image} className={classes.fifthImg} />
                </div>
              </div>
              <div className={selectedCategory === 'Для гостиниц' ? classes.filterWithImgWrapperActive  : classes.filterWithImgWrapper} onClick={() => setSelectedCategory('Для гостиниц')}>
                <div className={classes.labelWrapper}>
                  <div className={classes.lastFilterLabel}>
                    Для<br></br>гостиниц
                  </div>
                </div>
                <div className={classes.imgWrapper}>
                  <img src={sixth_image} className={classes.sixthImg} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.allWoods} style={{display: isMobile ? 'flex': 'none'}}>
            <div className={classes.woodSpecialWrapper}>
              <input
                className={classes.customRadio}
                name="color"
                type="radio"
                id="Все_породы_дерева"
                value="Все_породы_дерева"
                checked={selected === "Все_породы_дерева"}
                onChange={handleChange}
              />
              <label
                htmlFor="Все_породы_дерева"
                style={{
                  opacity: selected === "Все_породы_дерева" ? 1 : 0.3,
                  color: "#C9C9C9",
                }}
              >
                Все породы дерева
              </label>
            </div>
            <div className={classes.woodSpecialWrapper}>
              <input
                className={classes.customRadio}
                name="color"
                type="radio"
                id="Ангарская_сосна"
                value="Ангарская_сосна"
                checked={selected === "Ангарская_сосна"}
                onChange={handleChange}
              />
              <label
                htmlFor="Ангарская_сосна"
                style={{
                  opacity: selected === "Ангарская_сосна" ? 1 : 0.3,
                  color: "#C9C9C9",
                }}
              >
                Ангарская сосна
              </label>
            </div>
            <div className={classes.woodSpecialWrapper}>
              <input
                className={classes.customRadio}
                name="color"
                type="radio"
                id="Хвоя"
                value="Хвоя"
                checked={selected === "Хвоя"}
                onChange={handleChange}
              />
              <label
                htmlFor="Хвоя"
                style={{
                  opacity: selected === "Хвоя" ? 1 : 0.3,
                  color: "#C9C9C9",
                }}
              >
                Хвоя
              </label>
            </div>
            <div className={classes.woodSpecialWrapper}>
              <input
                className={classes.customRadio}
                name="color"
                type="radio"
                id="Берёза"
                value="Берёза"
                checked={selected === "Берёза"}
                onChange={handleChange}
              />
              <label
                htmlFor="Берёза"
                style={{
                  opacity: selected === "Берёза" ? 1 : 0.3,
                  color: "#C9C9C9",
                }}
              >
                Берёза
              </label>
            </div>
            <div className={classes.woodSpecialWrapper}>
              <input
                className={classes.customRadio}
                name="color"
                type="radio"
                id="Лиственница"
                value="Лиственница"
                checked={selected === "Лиственница"}
                onChange={handleChange}
              />
              <label
                htmlFor="Лиственница"
                style={{
                  opacity: selected === "Лиственница" ? 1 : 0.3,
                  color: "#C9C9C9",
                }}
              >
                Лиственница
              </label>
            </div>
            <div className={classes.woodSpecialWrapper}>
              <input
                className={classes.customRadio}
                name="color"
                type="radio"
                id="Дуб"
                value="Дуб"
                checked={selected === "Дуб"}
                onChange={handleChange}
              />
              <label
                htmlFor="Дуб"
                style={{
                  opacity: selected === "Дуб" ? 1 : 0.3,
                  color: "#C9C9C9",
                }}
              >
                Дуб
              </label>
            </div>
            <div className={classes.woodSpecialWrapper}>
              <input
                className={classes.customRadio}
                name="color"
                type="radio"
                id="Кедр"
                value="Кедр"
                checked={selected === "Кедр"}
                onChange={handleChange}
              />
              <label
                htmlFor="Кедр"
                style={{
                  opacity: selected === "Кедр" ? 1 : 0.3,
                  color: "#C9C9C9",
                }}
              >
                Кедр
              </label>
            </div>
          </div>
          <div className={classes.commonFiltersWrapper}>
            <div className={classes.commonFilters}>
              {currentSubcategories.map((name) => (
                <div className={classes.commonFilterButton}>{name}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.productsList}>
          {products.map((product: any) => {
            return (
              <Product
                id={product.id}
                name={product.name}
                material={product.material}
                size={product.size}
                type={product.type}
                for_what={product.for_what}
                description={product.description}
                photo_links={product.photo_links}
                price={product.price}
                unit={product.unit}
                added_at={product.added_at}
                setShopModal={setShopModal}
                product={product}
                addProduct={addProduct}
                // itemInBasket = {itemInBasket}
                // setItemToBasket={setItemToBasket}
              />
            );
          })}
        </div>
        <div className={classes.allWoodSpecies}>
          <button
            className={classes.loadMore}
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Загрузить еще
          </button>
        </div>
      </div>

      {/* <div className={classes.posts}>
                <PostsFilter
                    onSetSearchQuery={props.onSetSearchQuery}
                    searchQuery={props.searchQuery}
                    selectedSort={props.selectedSort}
                    sortPosts={sortPosts}
                />
                {props.isShowPreloader
                    && <Preloader/>}
                {
                    sortedAndSearchPosts.map((post: PostType | UserType, index: number) => {
                            const typedPost = post as PostType;
                            return (
                                <Post
                                    number={index + 1}
                                    id={typedPost.id}
                                    name={typedPost.title}
                                    massage={typedPost.body}
                                    key={typedPost.id}
                                />
                            );
                    })
                }
                <div ref={lastElement} style={{height: 20, background: "red"}}/>
                {sortedAndSearchPosts.length === 0 && !props.isShowPreloader
                    && <h1 className={classes.headlines}>Posts not found!</h1>}
            </div> */}
    </div>
  );
};

export default AllProducts;
