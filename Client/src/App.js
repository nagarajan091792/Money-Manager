import "../src/sb-admin-2.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./Components/Login";
import Portal from "./Portal";
import Dashboard from "./Components/Dashboard";
import Incomelist from "./Pages/Income/List";
import Expenselist from "./Pages/Expense/List";
import Expenseedit from "./Pages/Expense/Edit";
import Incomeedit from "./Pages/Income/Edit";
import Addincome from "./Pages/Income/Create";
import Addexpense from "./Pages/Expense/Create";
import Register from "./Components/Register";
import PrivateRoutes from "./PrivateRoute";


function App() {
  return (
   <> <BrowserRouter>
   <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
     <Route element={<PrivateRoutes />}>
     <Route path="/portal" element={<Portal/>}>
       <Route path="dashboard" element={<Dashboard/>} />

       <Route path="incomelist" element={<Incomelist/>} />
       <Route path="expenselist" element={<Expenselist/>} />
       <Route path="expenselist/edit/:id" element={<Expenseedit/>} />
       <Route path="incomelist/edit/:id" element={<Incomeedit/>} />
       <Route path="addincome" element={<Addincome/>} />
       <Route path="addexpense" element={<Addexpense/>} />
     </Route></Route>
   </Routes>
 </BrowserRouter>
   </>
  );
}

export default App;
