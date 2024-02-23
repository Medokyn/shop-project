import  { useEffect, useState } from "react";
import axios from "axios";
import styles from "../Catalog/Catalog.module.css";

async function getCategories() {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getProducts(categoryId, offset = 0, limit = 10) {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products?categoryId=${categoryId}&offset=${offset}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function searchProducts(searchTerm) {
  try {
    const response = await axios.get(
      `https://api.escuelajs.co/api/v1/products/?title=${searchTerm}`
    );
    return response.data;
  } catch (error) {
    console.error("Error during search:", error);
    throw error;
  }
}

function Catalog() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);

        const defaultCategoryId = categoriesData.length > 0 ? categoriesData[0].id : 1;
        setSelectedCategory(defaultCategoryId);

        const productsData = await getProducts(defaultCategoryId);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = async (categoryId) => {
    try {
      setSelectedCategory(categoryId);
      const productsData = await getProducts(categoryId);
      setProducts(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = async (value) => {
    setSearchTerm(value);
    try {
      const searchResults = await searchProducts(value);
      setProducts(searchResults);
    } catch (error) {
      console.error("Error during search:", error);
    }
  };

  const handleLoadMore = async () => {
    try {
      const newProducts = await getProducts(selectedCategory, offset + 10);
      setProducts([...products, ...newProducts]);
      setOffset(offset + 10);
    } catch (error) {
      console.error("Error fetching more products:", error);
    }
  };

  return (
    <>
      <div className={styles.catalogMain}>
        <h2>Categories</h2>
        <div className={styles.categories}>
          {categories.map((category) => (
            <button key={category.id} onClick={() => handleCategoryClick(category.id)}>
              <li>{category.name}</li>
              <img src={category.image} alt="" style={{ width: "150px" }} />
            </button>
          ))}
        </div>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.id}>
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <img src={product.images[0]} alt="" style={{ width: "150px" }} />
            </div>
          ))}
        </div>
        <button onClick={handleLoadMore}>Load more</button>
      </div>
    </>
  );
}

export default Catalog;
