<script>
    import MenuSVG from "../assets/svgs/MenuSVG.svelte";
    import ListOptionsDropdown from "./ListOptionsDropdown.svelte";
    import Popup from "./Popup.svelte";
    import SVGContainer from "./SVGContainer.svelte";

    let open = false;
</script>

<style lang="scss">
    button {
        margin-top: 0.3rem;
        color: #172b4d;
        background: inherit;
        border: none;
        cursor: pointer;
        &:hover {
            background: hsl(227, 13%, 87%);
        }
    }
</style>

<div>
    <button class="options-btn" on:click={() => (open = !open)}>
        <SVGContainer>
            <MenuSVG />
        </SVGContainer>
    </button>
    {#if open}
        <Popup>
            <ListOptionsDropdown
                on:moveList
                on:removeList
                on:sortCardOrder
                on:exitPopup={() => (open = false)} />
        </Popup>
    {/if}
</div>
