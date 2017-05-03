import {topmost} from "ui/frame";
import {Page} from "ui/page";
import {Observable, EventData} from "data/observable";
import { RadSideDrawer } from "nativescript-telerik-ui/sidedrawer";

let page:Page;
let drawer:any;
export abstract class BasePage {    
    toggleDrawer(){
        let page = topmost().currentPage;
        drawer = <RadSideDrawer>page.getViewById("drawer");
        drawer.showDrawer();
    }
    navigate(args){
        drawer.closeDrawer();
        let pageName = args.view.text.toLowerCase();
        topmost().navigate("pages/" + pageName + "/" + pageName);
    }
}