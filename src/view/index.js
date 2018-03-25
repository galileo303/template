import BasicLayout from "component/basicLayout";
// import layer from "layer/layout.tpl";
import 'css/css.scss';
export default class Main {
    constructor() {
        setTimeout(() => {
            this.data = {
                name: "thisisname",
                data: [
                    { "data": "wang" },
                    { "data": "li" },
                    { "data": "zhao" },
                    { "data": "chen" },
                ]
            }
        }, 500);
       this.aa = "78o"
    }
    render() {
        let aa = "asd"
        const aaa = BasicLayout.getInstance()
        return aaa.render(this.data)
     }
    
    static getInstance() {
        if (!Main.instance) {
            Main.instance = new Main();
        }
        return Main.instance;
    }

}