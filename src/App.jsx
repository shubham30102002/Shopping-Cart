import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App ">
      <Provider store={store}>
        <BrowserRouter>
          <div className=" bg-slate-900">
            <Navbar />

          </div>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
          </Routes>
          <Toaster />
        </BrowserRouter>
      </Provider>

    </div>
  );
}
export default App;
