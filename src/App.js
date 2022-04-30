import { ToastContainer } from "react-toastify";
import Routes from "./Routes";
import GlobalStyle from "./Styles/global";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes />
      <GlobalStyle />
    </div>
  );
};

export default App;
