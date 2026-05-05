// function ma onEmpDelete remove kryu
function List({products}){
    return (
        <>
        <h1>Product Catalog</h1>
        <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>sku</th>
            <th>category</th>
            <th>name</th>
            <th>price</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>

        <tbody>
          {products.map((prod) => {
            return(
            <tr key={prod.sku}>
              <td>{prod.sku}</td>
              <td>{prod.category}</td>
              <td>{prod.name}</td>
              <td>{prod.price}</td>
              {/* <td>
                <button onClick={() => onEmpDelete(emp.empId)}>Delete</button>
              </td> */}
            </tr>
          );})}
        </tbody>
      </table>
    </>
  );
}
export default List;
