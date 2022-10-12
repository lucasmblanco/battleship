const assignListener = (container, functionality) => {
    container.forEach(element => {
        element.addEventListener('click',functionality)
    });
}

const assignListenerPerElement = (container, functionality) => {
    container.addEventListener('click', functionality)
}


export {assignListener, assignListenerPerElement, } 