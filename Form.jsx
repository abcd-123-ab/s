import { useState } from "react";

function Form({onProductAdd}){
    const[sku,setsku]=useState('');
    const[category,setCategory]=useState('');
    const[name,setName]=useState('');
    const[price,setPrice]=useState('');

    const handleSubmit = (e) => {
    e.preventDefault();

if (!sku || !category || !name || !price) {
  alert("Please fill all fields");
  return;
}


    onProductAdd({ sku,category,name,price });

    setsku('');
    setCategory('');
    setName('');
    setPrice('');
};


return (
    <>
     <h1>add product</h1>
    <form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <label>sku:</label>
                    </td>
                    <td>
                        <input name="sku" value={sku} onChange={(e) => setsku(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>category:</label>
                    </td>
                    <td>
                        <input name="category" value={category} onChange={(e) => setCategory(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                     <td>
                        <label>name:</label>
                    </td>
                    <td>
                        <input name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                     <td>
                        <label>price:</label>
                    </td>
                    <td>
                        <input name="price" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                     <td>
                        &nbsp;
                    </td>
                    <td>
                        <button type="submit">ADD</button>
                    </td>
                </tr>
            </tbody>    
        </table>
     </form>
    </>  
);   
}; 

export default Form;