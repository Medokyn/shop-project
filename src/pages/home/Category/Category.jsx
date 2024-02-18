import { useEffect, useState } from "react";
import { Link,} from "react-router-dom";
import styles from "./category.module.css";
import { getCategories, getProducts } from "../../../utils/constants";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCategories(await getCategories());
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = async (categoryId) => {
    try {
      setLoading(true);
      const products = await getProducts(categoryId);
      console.log("Products for category", products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>Catalog</h2>
      <div className={styles.cards}>
        {loading ? (
          // заглушка для категорий
          [...new Array(5)].map((_, index) => (
            <div key={index} className={styles.categoryItem}>
              <p>Loading...</p>
            </div>
          ))
        ) : (
          // Иначе отображается список категорий
          <div className={styles.cards}>
            {categories.map(({ id, name }) => (
              <Link
                key={id}
                to={{
                  pathname: `/catalog/${id}`,
                  state: { categoryName: name },
                }}
                onClick={() => handleCategoryClick(id)}
                className={styles.categoryItem}
              >
                <p>{name}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;