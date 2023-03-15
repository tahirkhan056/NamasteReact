import { render } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import store from "../store";
import { StaticRouter } from "react-router-dom/server";

test("should Load Logo on header render", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const logo = header.getByTestId("logo");
  expect(logo.src).toBe("http://localhost/logo.png");

  const online = header.getByTestId("online");
  expect(online.innerHTML).toBe("🟢");

  const cart = header.getByTestId("cart-item");
  expect(cart.innerHTML).toBe("0");
});
