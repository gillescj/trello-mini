<script>
    const placeholderText = 'Enter List Name';
    export let value = '';
    function resize({ target }) {
        target.style.height = '1px';
        target.style.height = `${target.scrollHeight}px`;
    }

    function textAreaResize(el) {
        resize({ target: el });
        el.style.overflow = 'hidden';
        el.addEventListener('input', resize);

        return {
            destroy: () => el.removeEventListener('input', resize),
        };
    }
</script>

<style type="text/scss">
    textarea {
        padding: 0.5rem;
        width: 100%;
        background: inherit;
        color: #172b4d;
        border: none;
        outline: 3px solid transparent;
        font-weight: 600;
        cursor: pointer;
        resize: none;
        overflow: none;
        &:focus {
            background: white;
            outline: 3px solid hsl(202, 100%, 38%);
            cursor: text;
        }
    }
</style>

<textarea placeholder={placeholderText} bind:value use:textAreaResize />

<!-- https://svelte.dev/repl/ead0f1fcd2d4402bbbd64eca1d665341?version=3.14.1 -->
