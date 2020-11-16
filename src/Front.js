// front code cannot use 'import' statements
export default function Demo_Main_Plugin_Front(spec) {
    const fnShared = spec['Demo_Main_Plugin_Shared#'];
    return {title: fnShared('plugin front')};
}
