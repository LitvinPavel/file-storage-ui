export default {
    methods: {
        expandEnter(el) {
            el.style.height = el.scrollHeight + 'px';
        },
        expandAfterEnter(el) {
            el.style.height = 'auto';
        },
        expandBeforeLeave(el) {
            if (this.isCollapsed) {
                el.style.display = 'none';
                return;
            }
            el.style.height = el.scrollHeight + 'px';
        }
    }
};
