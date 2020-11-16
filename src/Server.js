// server side code can use traditional npm packages
import isModule from 'is-module';


export default function Demo_Main_Plugin_Server(spec) {
    const shared = spec['Demo_Main_Plugin_Shared#'];
    return function (req, res) {
        // just use server side stuff
        isModule('import isModule from \'is-module\';');
        // then use injected function
        console.log(shared('plugin server'));
    }
}
