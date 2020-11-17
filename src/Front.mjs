// frontend code cannot use traditional npm packages but can use browser API
export default class Demo_Main_Plugin_Front {
    title

    constructor(spec) {
        // get module's default export (function)
        const fnShared = spec['Demo_Main_Plugin_Shared#'];
        this.title = fnShared('plugin front')
    };

    out(selector) {
        const elOut = self.document.querySelector(selector);
        elOut.innerHTML = JSON.stringify({frontPlugin: this.title});
    }
}
