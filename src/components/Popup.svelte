<script>
    let windowWidth;
    let horizontalOffset = "left";
    function setHorizontalOffset(element) {
        if (element.getBoundingClientRect().right > innerWidth - 20) {
            horizontalOffset = "right";
        }
    }
</script>

<style lang="scss">
    .wrapper {
        position: relative;
    }
    .container {
        position: absolute;
    }
</style>

<svelte:window bind:innerWidth={windowWidth} />

<div class="wrapper">
    <div
        class="container"
        use:setHorizontalOffset
        style="{horizontalOffset}: 0">
        <slot />
    </div>
</div>
