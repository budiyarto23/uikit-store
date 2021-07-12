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

import ProtectedRoute from "pages/ProtectedRoute";
import PageNotFound from "pages/PageNotFound";


function App() {

const userAuth = JSON.parse(localStorage.getItem("userId"));
console.log(userAuth);

  return (
    <Router>
      <Switch>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/uikits" component={UIKits} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/:id/custom-request" component={CustomRequest} />
      <Route path="/custom-design" component={CustomDesign}></Route>
      <Route path="/:id/paid-download" component={PaidDownload} />
      <Route path="/payment-confirm" component={PaymentConfirm}></Route>
      <Route path="/pricing-option" component={PricingOption}></Route>

      {/* Route Admin here */}

      <Route path="/admin-home-page" component={UICollection}/>
      <ProtectedRoute path="/admin/login-page" component={Login} isAuth={!userAuth} />
      <ProtectedRoute path="/admin/register-page" component={Register} isAuth={!userAuth} />
      <ProtectedRoute path="/admin-downloaded" component={UIDownloaded} isAuth={userAuth} />
      <Route path="/admin/add-kit" component={AddUIKit} />
      {/* <Route path="/admin-downloaded" component={UIDownloaded} /> */}
      <Route path="/admin/preview/:id" component={UIPreview} />
      <Route path="/preview/downloaded/:id" component={DonwloadDetail} />
      <Route path="/preview/custom/:id" component={CustomDetail} />
      <Route path="/admin-custom-request" component={UICustomRequest} />
      <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
