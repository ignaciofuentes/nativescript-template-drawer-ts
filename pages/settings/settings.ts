import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";

let vm = new Observable({ blackBackground: false });
class SettingsPage extends BasePage {    
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }
};
export = new SettingsPage();