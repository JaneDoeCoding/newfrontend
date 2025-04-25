// ProductList.tsx
import { useEffect, useState } from 'react';
import './ProductList.css';  // 引入样式文件
import WelcomeSection from './WelcomeSection';  // 引入WelcomeSection组件

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  protein: string;
  fat: string;
  calories: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // 请求数据
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-list">
      {/* 在这里引入WelcomeSection */}
      <WelcomeSection />

      {/* 产品列表 */}
      <h2>Fish Products Nutritional Information</h2>
      <div className="cards-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p>{product.description}</p>
            <div className="nutrition-info">
              <p><strong>Protein:</strong> {product.protein}</p>
              <p><strong>Fat:</strong> {product.fat}</p>
              <p><strong>Calories:</strong> {product.calories}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
