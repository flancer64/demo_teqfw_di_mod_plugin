// frontend code cannot use traditional npm packages
export default function Demo_Main_Plugin_Front(spec) {
    // get module's default export (function)
    const fnShared = spec['Demo_Main_Plugin_Shared#'];
    return {title: fnShared('plugin front')};
}
