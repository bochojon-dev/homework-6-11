// import React, { useState, useEffect } from "react";
// import axios from "../../api";
// import Products from "../../components/products/Products";

// function Products() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get("/products")
//       .then((res) => setData(res.data.products))
//       .catch((res) => console.log(res))
//       .finally(() => setLoading(false));
//   }, []);

//   return (
//     <div className="products">
//       <Products loading={loading} data={data} />
//     </div>
//   );
// }

// export default Products;
