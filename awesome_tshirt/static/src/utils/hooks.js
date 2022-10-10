/** @odoo-module **/

const { onMounted, onPatched, onWillUnmount, useRef } = owl.hooks;

export function useEffect(effect, computeDependencies) {
    let cleanup = () => null;
    let dependencies;
    onMounted(() => {
        dependencies = computeDependencies();
        cleanup = effect(...dependencies);
    });

    onPatched(() => {
        const newDeps = computeDependencies();
        const shouldReapply = newDeps.some((val, i) => val !== dependencies[i]);
        if (shouldReapply) {
            dependencies = newDeps;
            if (cleanup) {
                cleanup();
            }
            cleanup = effect(...dependencies);
        }
    });

    onWillUnmount(() => cleanup && cleanup());
}

export function useAutofocus(name) {
    let ref = useRef(name);
    useEffect(
        (el) => el && el.focus(),
        () => [ref.el]
    );
}

export function useAutofocusSimple(name) {
    const ref = useRef(name);
    onMounted(() => ref.el && ref.el.focus());
}
