<script>
    import MenuSVG from './assets/svgs/MenuSVG.svelte';
    import PlusSVG from './assets/svgs/PlusSVG.svelte';
    import SVGContainer from './SVGContainer.svelte';

    let name = 'Things To Do';
    let description;
    let newCard = false;
</script>

<style type="text/scss">
    .container {
        display: grid;
        width: 20rem;
        padding: 0.5rem;
        background: hsl(228, 14%, 93%);
        border-radius: 0.25rem;
        box-shadow: 0 12.5px 10px rgba(0, 0, 0, 0.025), 0 100px 80px rgba(0, 0, 0, 0.05);
        margin: 0 1rem;
        flex-shrink: 0;
        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
        .options-btn {
            color: #172b4d;
            background: inherit;
            border: none;
            cursor: pointer;
            &:hover {
                background: hsl(227, 13%, 87%);
            }
        }
        .header {
            display: grid;
            grid-template-columns: 1fr auto;
        }
        input {
            width: 100%;
            background: inherit;
            color: #172b4d;
            border: 3px solid transparent;
            font-weight: 600;
            cursor: pointer;
            &:focus {
                background: white;
                border: 3px solid hsl(202, 100%, 38%);
                cursor: text;
            }
        }
    }
</style>

<div class="container">
    <div class="header">
        <input bind:value={name} />
        <button class="options-btn">
            <SVGContainer>
                <MenuSVG />
            </SVGContainer>
        </button>
    </div>
    {#if newCard}
        <textarea bind:value={description} />
        <button on:click={() => (newCard = false)}>Okay</button>
    {:else}
        <button on:click={() => (newCard = !newCard)}>
            <SVGContainer>
                <PlusSVG />
            </SVGContainer>
            Add a card</button>
    {/if}
</div>
