import layer from "./layout.tpl";
import './css.scss';
import { resolve } from "url";

export default class BasicLayout {
    
    render(res) {
        console.log("redner",res)
        return layer(res)
    }

    static getInstance() {
        if (!BasicLayout.instance) {
            BasicLayout.instance = new BasicLayout()
        }
        return BasicLayout.instance
    }
}