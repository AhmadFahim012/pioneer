export function Menu() {
    return (
      <nav className="menu">
         <ul className="mobile-list p-10">
                  <li className="mobile-list-items flex flex-col gap-4">
                    <a
                      href="/"
                      className="text-white montserat-fonts text-4xl font-bold"
                    >
                      Home
                    </a>
                    <a
                      href="/"
                      className="text-white montserat-fonts text-4xl font-bold"
                    >
                      About Us
                    </a>
                    <a
                      href="/"
                      className="text-white montserat-fonts text-4xl font-bold"
                    >
                      Collections
                    </a>
                    <a
                      href="/"
                      className="text-white montserat-fonts text-4xl font-bold"
                    >
                      New Arrivals
                    </a>
                    <a
                      href="/"
                      className="text-white montserat-fonts text-4xl font-bold"
                    >
                      Best Sellers
                    </a>
                    <a
                      href="/"
                      className="text-white montserat-fonts text-4xl font-bold"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
      </nav>
    );
  }