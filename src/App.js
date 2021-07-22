import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "assets/scss/style.scss";
// global scss

import LandingPage from "pages/LandingPage/index";
import HireUs from "pages/HireUs";
import UIKits from "pages/UIKits/UIKits";
import CustomRequest from "pages/CustomRequest/CustomRequest";
import PaidDownload from "pages/PaidDownload/PaidDownload";
import Detail from "pages/DetailKits/Detail";
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
      <Route exact path="/" component={LandingPage} />
      <Route path="/uikits" component={UIKits} />
      <Route path="/pricing-option" component={PricingOption} />
      <Route path="/hire-us" component={HireUs} />
      <Route path="/detail/:id" component={Detail} />
      <Route path="/:id/custom-request" component={CustomRequest} />
      <Route path="/:id/paid-download" component={PaidDownload} />

      {/* Route admin here */}

      <ProtectedRoute path="/admin/login-page" component={Login} isAuth={!userAuth} />
      <ProtectedRoute path="/admin/register-page" component={Register} isAuth={!userAuth} />
      <Route path="/admin-home-page" component={UICollection}/>
      <Route path="/admin-downloaded" component={UIDownloaded}/>
      <Route path="/admin-custom-request" component={UICustomRequest} />
      <Route path="/admin/add-kit" component={AddUIKit} />
      <Route path="/admin/preview/:id" component={UIPreview} />
      <Route path="/preview/downloaded/:id" component={DonwloadDetail} />
      <Route path="/preview/custom/:id" component={CustomDetail} />
      <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
