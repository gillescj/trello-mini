<script>
    import { boardStore } from "../store/stores";
    import PlusSVG from "../assets/svgs/PlusSVG.svelte";
    import CancelSVG from "../assets/svgs/CancelSVG.svelte";
    import SVGContainer from "./SVGContainer.svelte";
    import Card from "./Card.svelte";
    import TextAreaAuto from "./TextAreaAuto.svelte";
    import Options from "./Options.svelte";
    export let id = "list-0";
    export let name = "Things To Do";
    export let cards = [
        { title: "Here is a card title for testing", createdAt: 1 },
    ];
    let newCard = false;
    let cardTitle;

    $: boardStore.updateName(id, name);

    function onRemoveList() {
        boardStore.removeList(id);
    }

    function onMoveList(event) {
        boardStore.moveList(id, event.detail.where);
    }

    function onSortCardOrder(event) {
        boardStore.setCardOrder(id, event.detail.order);
        boardStore.sortList(id);
    }

    const onKeydown = (event) => {
        if (event.code === "Enter") {
            document.activeElement.blur();
        }
    };

    const addCard = () => {
        newCard = false;
        if (cardTitle.length > 0) {
            cards = [...cards, { title: cardTitle, createdAt: Date.now() }];
        }
        cardTitle = "";

        boardStore.updateCardList(id, cards);
    };

    const cancelNewCard = () => {
        newCard = false;
        cardTitle = "";
    };
</script>

<style type="text/scss">
    .container {
        display: grid;
        width: 17rem;
        font-size: 14px;
        padding: 0.4rem;
        background: hsl(228, 14%, 93%);
        border-radius: 0.25rem;
        box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.02),
            0 0.1px 0px rgba(0, 0, 0, 0.028), 0 0.3px 0px rgba(0, 0, 0, 0.035),
            0 0.4px 0px rgba(0, 0, 0, 0.042), 0 0.8px 0px rgba(0, 0, 0, 0.05),
            0 2px 0px rgba(0, 0, 0, 0.07);
        margin: 0 0.25rem;
        flex-shrink: 0;
        &:first-child {
            margin-left: 0.5rem;
        }
        .header {
            display: grid;
            grid-template-columns: 1fr auto;
        }

        textarea {
            box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.02),
                0 0.1px 0px rgba(0, 0, 0, 0.028),
                0 0.3px 0px rgba(0, 0, 0, 0.035),
                0 0.4px 0px rgba(0, 0, 0, 0.042),
                0 0.8px 0px rgba(0, 0, 0, 0.05), 0 2px 0px rgba(0, 0, 0, 0.07);
        }

        .new-card-options {
            display: flex;
            justify-content: space-between;
            button {
                margin: 0;
            }
        }
        .new-card-btn {
            display: grid;
            grid-template-columns: auto 1fr;
            justify-content: start;
            grid-gap: 0.5rem;
            background: inherit;
            border: none;
            margin-bottom: 0;
            cursor: pointer;
            .add-card-text {
                text-align: start;
            }
            &:hover {
                background: hsl(227, 13%, 87%);
            }
        }

        .add-card-btn {
            justify-self: start;
            background: #61bd4f;
            border: none;
            color: white;
            margin-right: 0.5rem;
            padding: 0.5rem 0.75rem;
            cursor: pointer;
        }
        .cancel-btn {
            border: none;
            background: inherit;
            cursor: pointer;
            &:hover {
                background: hsl(227, 13%, 87%);
            }
        }
    }
</style>

<div class="container">
    <div class="header">
        <TextAreaAuto bind:value={name} on:keydown={onKeydown} />
        <Options
            on:moveList={onMoveList}
            on:removeList={onRemoveList}
            on:sortCardOrder={onSortCardOrder} />
    </div>
    {#each cards as card}
        <Card title={card.title} />
    {/each}
    {#if newCard}
        <textarea
            bind:value={cardTitle}
            placeholder="Enter a title for this card..." />
        <div class="new-card-options">
            <button class="add-card-btn" on:click={addCard}>Add Card</button>
            <button class="cancel-btn" on:click={cancelNewCard}>
                <SVGContainer>
                    <CancelSVG />
                </SVGContainer>
            </button>
        </div>
    {:else}
        <button class="new-card-btn" on:click={() => (newCard = !newCard)}>
            <SVGContainer>
                <PlusSVG />
            </SVGContainer>
            <div class="add-card-text">Add a card</div>
        </button>
    {/if}
</div>
