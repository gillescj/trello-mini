<script>
    import { boardStore } from "../store/stores";
    import CardOptionsDropdown from "./CardOptionsDropdown.svelte";
    import Popup from "./Popup.svelte";
    export let title;
    export let createdAt;
    export let id;
    export let listID;

    let open = false;

    const onRemoveCard = () => {
        boardStore.removeCard(listID, createdAt);
    };

    function onMoveCard(event) {
        boardStore.moveCard(listID, id, event.detail.where);
    }
</script>

<style lang="scss">
    .container {
        background: white;
        box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.02),
            0 0.1px 0px rgba(0, 0, 0, 0.028), 0 0.3px 0px rgba(0, 0, 0, 0.035),
            0 0.4px 0px rgba(0, 0, 0, 0.042), 0 0.8px 0px rgba(0, 0, 0, 0.05),
            0 2px 0px rgba(0, 0, 0, 0.07);
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
        cursor: pointer;
        p {
            padding: 0.5rem;
        }
    }
</style>

<div class="container">
    <p on:click={() => (open = !open)}>{title}</p>
    {#if open}
        <Popup>
            <CardOptionsDropdown
                on:moveCard={onMoveCard}
                on:removeCard={onRemoveCard}
                on:exitPopup={() => (open = false)} />
        </Popup>
    {/if}
</div>
