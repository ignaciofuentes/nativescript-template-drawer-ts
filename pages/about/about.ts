import {BasePage} from "../../shared/BasePage";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";

let vm = new Observable();
class AboutPage extends BasePage{
    mainContentLoaded(args:EventData){
        //set the bindingContext for the AboutPage content here
        let view = <View>args.object;
        view.bindingContext = vm;
    }
}

export = new AboutPage();
