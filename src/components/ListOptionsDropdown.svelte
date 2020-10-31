<script>
    import SVGContainer from './SVGContainer.svelte';
    import CancelSVG from '../assets/svgs/CancelSVG.svelte';

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    function onClosePopup() {
        dispatch('exitPopup');
    }
</script>

<style lang="scss">
    .container {
        display: grid;
        grid-gap: 0.5rem;
        background: white;
        padding: 0.5rem 0;
        border-radius: 0.25rem;
        box-shadow: 0 8px 16px -4px rgba(9, 30, 66, 0.25), 0 0 0 1px rgba(9, 30, 66, 0.08);
        header {
            display: grid;
            margin: 0 0.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(9, 30, 66, 0.13);
            h4 {
                color: #5e6c84;
                grid-row: 1;
                grid-column: 1;
                z-index: 1;
                text-align: center;
                font-weight: 600;
                align-self: center;
            }
            .exit-btn {
                grid-row: 1;
                grid-column: 1;
                z-index: 2;
                justify-self: flex-end;
                border: none;
                border: none;
                background: inherit;
                margin: 0;
                padding: 0;
                cursor: pointer;
                &:hover {
                    background: hsl(227, 13%, 93%);
                }
            }
        }
        ul {
            display: grid;
            width: 19rem;
            li {
                cursor: pointer;
                padding: 0.5rem;
                &:hover {
                    background: hsl(227, 13%, 93%);
                }
            }
        }
    }
</style>

<div class="container">
    <header>
        <h4>List Actions</h4>
        <button class="exit-btn" on:click={onClosePopup}>
            <SVGContainer>
                <CancelSVG />
            </SVGContainer>
        </button>
    </header>
    <ul>
        <li>Move List Left</li>
        <li>Move List Right</li>
        <li>Remove from Board</li>
    </ul>
</div>
