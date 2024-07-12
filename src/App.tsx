import { GlobalStyles } from "./themes";
import { Rotas } from "./routes";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./data";

function App() {
  return (
    <div>
      <ToastContainer
          position="top-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <BrowserRouter>
          <AppProvider>
            <GlobalStyles />
            <Rotas />
          </AppProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
