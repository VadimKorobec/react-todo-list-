import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./components/App";
import { store } from "./redux/store";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
