import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable} from "data/observable";

class SettingsPage extends BasePage {
    constructor(){
        super();
        this.viewModel.set("blackBackground", false);
    }
};
module.exports = new SettingsPage();