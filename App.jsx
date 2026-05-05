import { useEffect, useState } from 'react';
import List from './component/List';
import Form from './component/Form';

function App() {
  let productStr = localStorage.getItem('products')
  let prodData=[];
  
  if (productStr) {
    prodData = JSON.parse(productStr);
  }

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);


  const addProducts = (prod) => {
  const exists = products.some(
    (e) => e.sku === prod.sku
  );

  if (exists) {
    alert("Employee ID already exists!");
    return;
  }

  setProducts((prev) => [...prev, prod]);
};

  
let filtered = products.filter((prod) => {
    return prod.name.toLowerCase().includes(search.toLowerCase());
  });


  return(
    <>
    <h1>Data</h1>
      <label>Search:</label>
      <input
        type="text"
        name="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />  
    <Form onProductAdd={addProducts}/>
    <List products={filtered}/>
     {/* onEmpDelete={deleteEmployee}  */}
    </>
  );

}
export default App;