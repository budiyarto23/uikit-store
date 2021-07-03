import React, { useEffect } from "react";
import Header from "./Header/Header";
import Hero from "./Hero/index";
import Product from "./Product";
import Popular from "./Popular/popular";
import Strength from "./Strength/strength";
import Footer from "./Footer/footer";

export default function LandingPage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const theValue = [
    {
      id: "asdfsafsdfa",
      category: "web design",
      thumbnail:
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
      name: "Medical App Concept",
      description:
        "Medical Center App is a superapp to acomodate every people who want stay health and energic. Download and custom for your product",
      detailImage: [
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
      ],
      idrPrice: 35000,
      usdPrice: 24,
      discount: 0,
      benefits: [
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
      ],
    },
    {
      id: "asdfsafsdfb",
      category: "mobile design",
      thumbnail:
        "https://cdn.dribbble.com/users/941250/screenshots/15692699/media/d9ba7c272f575a4c2e9e1d44f0e25223.png",
      name: "Medical App Concept",
      description:
        "Medical Center App is a superapp to acomodate every people who want stay health and energic. Download and custom for your product",
      detailImage: [
        "https://cdn.dribbble.com/users/941250/screenshots/15692699/media/d9ba7c272f575a4c2e9e1d44f0e25223.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15692699/media/d9ba7c272f575a4c2e9e1d44f0e25223.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
      ],
      idrPrice: 0,
      usdPrice: 0,
      discount: 0,
      benefits: [
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
      ],
    },
    {
      id: "asdfsafsdfc",
      category: "design system",
      thumbnail:
        "https://cdn.dribbble.com/users/757683/screenshots/15616432/media/f63a40e9df1cc333000ffa23ea698716.jpg",
      name: "Medical App Concept",
      description:
        "Medical Center App is a superapp to acomodate every people who want stay health and energic. Download and custom for your product",
      detailImage: [
        "https://cdn.dribbble.com/users/757683/screenshots/15616432/media/f63a40e9df1cc333000ffa23ea698716.jpg",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
        "https://cdn.dribbble.com/users/757683/screenshots/15616432/media/f63a40e9df1cc333000ffa23ea698716.jpg",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
      ],
      idrPrice: 35000,
      usdPrice: 24,
      discount: 0,
      benefits: [
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
      ],
    },
    {
      id: "asdfsafsdfd",
      category: "design system",
      thumbnail:
        "https://cdn.dribbble.com/users/757683/screenshots/15565921/media/ebc32a3022b028c4c123974c56ddb7ee.jpg",
      name: "Medical App Concept",
      description:
        "Medical Center App is a superapp to acomodate every people who want stay health and energic. Download and custom for your product",
      detailImage: [
        "https://cdn.dribbble.com/users/757683/screenshots/15565921/media/ebc32a3022b028c4c123974c56ddb7ee.jpg",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
        "https://cdn.dribbble.com/users/757683/screenshots/15565921/media/ebc32a3022b028c4c123974c56ddb7ee.jpg",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
      ],
      idrPrice: 35000,
      usdPrice: 24,
      discount: 0,
      benefits: [
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
      ],
    },
    {
      id: "asdfsafsdfe",
      category: "web design",
      thumbnail:
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
      name: "Medical App Concept",
      description:
        "Medical Center App is a superapp to acomodate every people who want stay health and energic. Download and custom for your product",
      detailImage: [
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
      ],
      idrPrice: 35000,
      usdPrice: 24,
      discount: 0,
      benefits: [
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
      ],
    },
    {
      id: "asdfsafsdff",
      category: "mobile design",
      thumbnail:
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
      name: "Medical App Concept",
      description:
        "Medical Center App is a superapp to acomodate every people who want stay health and energic. Download and custom for your product",
      detailImage: [
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
      ],
      idrPrice: 35000,
      usdPrice: 24,
      discount: 0,
      benefits: [
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
        "Lorem ipsum",
        "Loremsus",
        "Lorem ipsum",
      ],
    },
  ];

  
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Product />
      <Popular data={theValue}/>
      <Strength />
      <Footer />
    </React.Fragment>
  );
}
