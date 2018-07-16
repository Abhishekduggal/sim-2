import React from "react";

import { Switch, Route } from "react-router-dom";

import DashBoard from "./components/DashBoard/DashBoard";
import Wizard from "./components/Wizard/Wizard";
import StepOne from "./components/StepOne/StepOne";
import StepTwo from "./components/StepTwo/StepTwo";
import StepThree from "./components/StepThree/StepThree";

export default (
  <Switch>
    <Route exact path="/" component={DashBoard} />
    <Route path="/wizard/step1" component={StepOne} />
    <Route path="/wizard/step2" component={StepTwo} />
    <Route path="/wizard/step3" component={StepThree} />
  </Switch>
);
