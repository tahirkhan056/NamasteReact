import { Provider } from "react-redux";
import Body from "../components/Body";
import store from "../store";
import { StaticRouter } from "react-router-dom/server";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import { RESTAURANTDATA } from "../../mocks/data";
import { toBeInTheDocument } from "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANTDATA),
  });
});

test("Shimmer should render on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer).toBeInTheDocument();
  expect(shimmer.children.length).toBe(12);
});

test("Restaurent list should render on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const restList = body.getByTestId("rest-list");
  expect(restList.children.length).toBe(15);

  const searchInput = body.getByTestId("search-input");
  const searchButton = body.getByTestId("search-btn");
  act(() => {
    fireEvent.change(searchInput, {
      target: {
        value: "the",
      },
    });

    fireEvent.click(searchButton);
  });

  expect(restList.children.length).toBe(3);
});
