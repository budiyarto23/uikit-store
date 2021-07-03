import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "assets/scss/style.scss";

import LandingPage from "pages/LandingPage/index";
import UIKits from "pages/UIKits/UIKits";
import CustomRequest from "pages/CustomRequest/CustomRequest";
import PaidDownload from "pages/PaidDownload/PaidDownload";
import PaymentConfirm from "pages/PaymentConfirm/PaymentConfirm";
import Detail from "pages/DetailKits/Detail";
import CustomDesign from "pages/CustomDesign/CustomDesign";
import PricingOption from "pages/PricingOption/PricingOption";
import Register from "pages/Admin/Register/index";
import Login from "pages/Admin/Login/index";
import UICollection from "pages/Admin/UICollection";
import AddUIKit from "pages/Admin/AddUIKit/index";
import UIPreview from "pages/Admin/UICollection/UIPreview/index";
import UIDownloaded from "pages/Admin/UIDownloaded";
import DonwloadDetail from "pages/Admin/UIDownloaded/DownloadDetail/index";
import UICustomRequest from "pages/Admin/UICustomRequest";
import CustomDetail from "pages/Admin/UICustomRequest/CustomDetail";

import ProtectedRoute from "pages/UploadImage";
import PageNotFound from "pages/PageNotFound";


function App() {
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
        // "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        // "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
        // "https://cdn.dribbble.com/users/2064833/screenshots/15617802/media/4cd01198351986470bd21eab23c725ef.png",
        // "https://cdn.dribbble.com/users/941250/screenshots/15371856/media/904116f0aa12bf80b184f26f2a60a802.png",
        // "https://cdn.dribbble.com/users/2064833/screenshots/15608248/media/7354ddbb3ac6091d7164efee378f40e5.png",
      ],
      idrPrice: 35000,
      usdPrice: 24,
      buyoutIdr: 1230000,
      buyoutUsd: 99,
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
      buyoutIdr: 1000000,
      buyoutUsd: 79,
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
      buyoutIdr: 1450000,
      buyoutUsd: 120,
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
      buyoutIdr: 1150000,
      buyoutUsd: 89,
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

const userAuth = localStorage.getItem("userId");
console.log(userAuth);

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/uikits">
        <UIKits data={theValue} />
      </Route>
      <Route path="/detail/:id">
        <Detail data={theValue} />
      </Route>
      <Route path="/:id/custom-request">
        <CustomRequest datanya={theValue} />
      </Route>
      <Route path="/custom-design" component={CustomDesign}></Route>
      <Route path="/:id/paid-download">
        <PaidDownload data={theValue} />
      </Route>
      <Route path="/payment-confirm" component={PaymentConfirm}></Route>
      <Route path="/pricing-option" component={PricingOption}></Route>
      
      <Route path="/admin-home-page" component={UICollection}/>
      <ProtectedRoute path="/admin/login-page" component={Login} isAuth={!userAuth} />
      <ProtectedRoute path="/admin/register-page" component={Register} isAuth={!userAuth} />
      <Route path="/admin/add-kit" component={AddUIKit} />
      <Route path="/admin-downloaded">
        <UIDownloaded data={theValue}/>
      </Route>
      <Route path="/admin/preview/:id">
        <UIPreview data={theValue} />
      </Route>
      <Route path="/preview/downloaded/:id">
        <DonwloadDetail data={theValue} />
      </Route>
      <Route path="/admin-custom-request">
        <UICustomRequest data={theValue} />
      </Route>
      <Route path="/preview/custom/:id">
        <CustomDetail data={theValue} />
      </Route>
      <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
