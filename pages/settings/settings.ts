import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import { Page } from "ui/page";

let vm = new Observable();
class SettingsPage extends BasePage {    
    loaded(args:EventData){
        let page = <Page>args.object;
        vm.set("blackBackground", false);
        vm.set("selectedPage", "settings");
        page.bindingContext = vm;
    }
};
export = new SettingsPage();