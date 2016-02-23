import {topmost} from "ui/frame";
import {Observable} from "data/observable";
import {Page} from "ui/page";

var appViewModel = new Observable();
appViewModel.set("selectedPage" , "home");

export class BasePage {
    viewModel:Observable = appViewModel;
    
    loaded = (args)=>{
        let page = <Page>args.object;
        page.bindingContext = appViewModel;   
    }
    
    toggleDrawer = ()=> {
        let page = <Page>topmost().currentPage;
        let drawer = <any>page.getViewById("drawer");
        drawer.toggleDrawerState();
    }
    navigate = (args)=> {
        let pageName = args.view.text.toLowerCase();
        appViewModel.set("selectedPage", pageName);
        topmost().navigate("pages/" + pageName + "/" + pageName);
    }
    
}