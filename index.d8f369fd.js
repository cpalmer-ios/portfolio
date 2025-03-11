// Defines a debounce function to limit the rate at which a function can fire.
window.debounce = (func, delay)=>{
    let timerId; // Holds a reference to the timeout between calls.
    return (...args)=>{
        clearTimeout(timerId); // Clears the current timeout, if any, to reset the debounce timer.
        timerId = setTimeout(()=>{
            func.apply(this, args); // Calls the passed function after the specified delay with the correct context and arguments.
        }, delay);
    };
};
// Define TextSplitter in the global scope
window.TextSplitter = class {
    constructor(element, options = {}){
        this.element = element;
        this.options = options;
        this.init();
    }
    init() {
        // Initialize SplitType on the element
        this.splitInstance = new SplitType(this.element, {
            types: this.options.splitTypeTypes || 'words, chars'
        });
    }
    getChars() {
        return this.splitInstance ? this.splitInstance.chars : [];
    }
    getWords() {
        return this.splitInstance ? this.splitInstance.words : [];
    }
    revert() {
        if (this.splitInstance) this.splitInstance.revert();
    }
};

//# sourceMappingURL=index.d8f369fd.js.map
