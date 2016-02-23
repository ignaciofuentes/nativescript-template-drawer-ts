import {BasePage} from "../../shared/BasePage";
import {topmost} from "ui/frame";

class HomePage extends BasePage{
    fun = () => {
        let page = topmost().currentPage;
        let logo = page.getViewById("logo");
        logo.animate({
            rotate: 3600,
            duration: 3000
        });
    }
}
module.exports = new HomePage();
