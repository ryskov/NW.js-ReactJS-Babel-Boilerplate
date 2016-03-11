export default class Utils {
    static loadCSS(id, filepath) {
        if (!document.getElementById(id)) {
            let head = document.getElementsByTagName('head')[0];
            let link = document.createElement('link');
            
            link.id = id;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = filepath;
            link.media = 'all';
            
            head.appendChild(link);
        }
    }
    
    static makeUnselectable(node) {
        if (node.nodeType == 1) {
            node.setAttribute("unselectable", "on");
        }
        var child = node.firstChild;
        while (child) {
            this.makeUnselectable(child);
            child = child.nextSibling;
        }
    }
};
