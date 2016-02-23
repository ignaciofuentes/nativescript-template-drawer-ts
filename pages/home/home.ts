import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";

let vm = new Observable({ myText: 'This is the home page' });
class HomePage extends BasePage{
    
    mainContentLoaded(args:EventData){
        let view = <View>args.object;
        view.bindingContext = vm;
    }
    
    fun(){
        let page = topmost().currentPage;
        let logo = page.getViewById("logo");
        logo.animate({
            rotate: 3600,
            duration: 3000
        });
    }
}
module.exports = new HomePage();
