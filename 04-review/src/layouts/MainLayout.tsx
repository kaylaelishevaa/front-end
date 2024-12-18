import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/appetizer">Appetizer</a>
            </li>
            <li>
              <a href="/beverage">Beverage</a>
            </li>
            <li>
              <a href="/dessert">Dessert</a>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>This is footer</footer>
    </>
  );
}
