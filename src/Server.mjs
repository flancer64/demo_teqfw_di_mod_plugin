// server side code can use traditional npm packages but cannot use browser API
import $path from 'path';
import $url from 'url';

// use server side stuff (just useless demo)
const {path: currentScript} = $url.parse(import.meta.url);
const pathScript = $path.dirname(currentScript);

export default function Demo_Main_Plugin_Server(spec) {
    // get module's default export (function)
    const shared = spec['Demo_Main_Plugin_Shared#'];
    return function (req, res) {
        // just use server side stuff
        res.setHeader('Content-Type', 'application/json; charset=UTF-8');
        res.end(JSON.stringify({data: shared(pathScript)}));
    }
}
