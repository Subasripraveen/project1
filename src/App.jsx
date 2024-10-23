import React, { useState } from "react";
import "./App.css"
import CounterComp from "./Component/CounterComp";
import ExampleTwoComp from "./Component/ExampleTwoComp";
import ExampleThreeComp from "./Component/ExampleThreeComp";
import NameChangeComp from "./Component/NameChangeComp";
import ProductComp from "./Component/ProductComp";
import PropsEg from "./Component/PropsEg";
import PropsProductComp from "./Component/PropsProductComp";
import ApiCallWithBtn from "./Component/ApiCallWithBtn";
import LifeCycleFunComp from "./Component/LifeCycleFunComp";
import Mounting from "./Component/Mounting";
import FormReact from "./Component/FormReact";
import TodoList from "./Component/TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactHookForm from "./Component/ReactHookForm";
import ErrorHandling from "./Component/ErrorHandling";
import UseRef from "./Component/UseRef";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  // const[name,setname]=useState("subasri")
  // const[age,setage]=useState(31)
  //   const[data,setdata]=useState([{
  //     id: 3,
  //     title: "Mens Cotton Jacket",
  //     price: 55.99,
  //     description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
  //     rating: {
  //         "rate": 4.7,
  //         "count": 500
  //     }
  // },
  // {
  //     id: 4,
  //     title: "Mens Casual Slim Fit",
  //     price: 15.99,
  //     description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
  //     category: "men's clothing",
  //     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
  //     rating: {
  //         "rate": 2.1,
  //         "count": 430
  //     }
  // },
  // {
  //     id: 5,
  //     title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
  //     price: 695,
  //     description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
  //     category: "jewelery",
  //     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  //     rating: {
  //         "rate": 4.6,
  //         "count": 400
  //     }
  // }])



  return (
    <BrowserRouter>
      {/* <CounterComp/> */}
      {/* <ExampleTwoComp/> */}
      {/* <ExampleThreeComp/> */}
      {/* <NameChangeComp/> */}
      {/* <ProductComp/> */}
      {/* <PropsEg a={name} b={age}/> */}

      {/* {data.map((da)=>(
<div>
<PropsProductComp da={da}/>

</div>

))} */}

      {/* <ApiCallWithBtn/> */}
      {/* <LifeCycleFunComp/> */}
      {/* <Mounting/> */}

      {/* <FormReact /> */}
      {/* <ReactHookForm /> */}
      {/* <ErrorHandling /> */}

      {/* <TodoList/> */}

      {/* <h2>githubprocess one vercel</h2> */}

      {/* <UseRef/> */}

      <div className="m-2">

        <Link to={"/"} className="ms-2">home </Link>
        <Link to={"HookForm"} className="ms-2">HookForm</Link>
        <Link to={"ErrorHandling"}className="ms-2">ErrorHandling</Link>

      </div>

      <Routes>

        <Route path="/" element={<FormReact />} />

        <Route path="HookForm" element={<ReactHookForm />} />

        <Route path="ErrorHandling" element={<ErrorHandling />} />

      </Routes>

    </BrowserRouter>
  )
}
export default App
