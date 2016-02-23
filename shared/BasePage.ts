import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Observable, EventData} from "data/observable";
import {View} from "ui/core/view";

let appViewModel = new Observable({selectedPage: "home"});
export abstract class BasePage {
    //implement this function in the inheriting pages to set their specific binding context
    abstract mainContentLoaded(args:EventData);
    
    loaded(args){
        let page = <Page>args.object;
        page.bindingContext = appViewModel;   
    }
    
    toggleDrawer(){
        let page = <Page>topmost().currentPage;
        let drawer = <any>page.getViewById("drawer");
        drawer.toggleDrawerState();
    }
    navigate(args){
        let pageName = args.view.text.toLowerCase();
        appViewModel.set("selectedPage", pageName);
        topmost().navigate("pages/" + pageName + "/" + pageName);
    }
}