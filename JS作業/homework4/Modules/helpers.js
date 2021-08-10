function $g (cssselector) {
    // 單筆 node
    if(cssselector.includes('#')) {
        return document.querySelector(cssselector);
    }
    
    // 多筆 nodelist
    let nodelist = document.querySelectorAll(cssselector);

    return nodelist.length == 1 ? nodelist[0] : nodelist ; 

}

function $c(element) {
    return document.createElement(element);
}

export {$g};

