<script>
    import MenuSVG from '../assets/svgs/MenuSVG.svelte';
    import PlusSVG from '../assets/svgs/PlusSVG.svelte';
    import CancelSVG from '../assets/svgs/CancelSVG.svelte';
    import SVGContainer from './SVGContainer.svelte';
    import Card from './Card.svelte';

    export let name = 'Things To Do';
    export let cards = [{ title: 'Here is a card title for testing', order: 1 }];
    let newCard = false;
    let cardTitle;

    const onKeydown = (event) => {
        if (event.code === 'Enter') {
            document.activeElement.blur();
        }
    };

    const addCard = () => {
        newCard = false;
        if (cardTitle.length > 0) {
            cards = [...cards, { title: cardTitle, order: cards.length + 1 }];
        }
        cardTitle = '';
    };

    const cancelNewCard = () => {
        newCard = false;
        cardTitle = '';
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
        box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.02), 0 0.1px 0px rgba(0, 0, 0, 0.028),
            0 0.3px 0px rgba(0, 0, 0, 0.035), 0 0.4px 0px rgba(0, 0, 0, 0.042),
            0 0.8px 0px rgba(0, 0, 0, 0.05), 0 2px 0px rgba(0, 0, 0, 0.07);
        margin: 0 0.25rem;
        flex-shrink: 0;
        &:first-child {
            margin-left: 0.5rem;
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
            padding: 0.2rem;
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

        textarea {
            box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.02), 0 0.1px 0px rgba(0, 0, 0, 0.028),
                0 0.3px 0px rgba(0, 0, 0, 0.035), 0 0.4px 0px rgba(0, 0, 0, 0.042),
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
        <input bind:value={name} on:keydown={onKeydown} />
        <button class="options-btn">
            <SVGContainer>
                <MenuSVG />
            </SVGContainer>
        </button>
    </div>
    {#each cards as card}
        <Card title={`${card.order} ${card.title}`} />
    {/each}
    {#if newCard}
        <textarea bind:value={cardTitle} placeholder="Enter a title for this card..." />
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
            <SVGContainer class="plus-svg-container">
                <PlusSVG />
            </SVGContainer>
            <div class="add-card-text">Add a card</div>
        </button>
    {/if}
</div>
