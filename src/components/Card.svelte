<script>
    export let title;
</script>

<style>
    .container {
        background: white;
        box-shadow: 0 0.1px 0px rgba(0, 0, 0, 0.02),
            0 0.1px 0px rgba(0, 0, 0, 0.028), 0 0.3px 0px rgba(0, 0, 0, 0.035),
            0 0.4px 0px rgba(0, 0, 0, 0.042), 0 0.8px 0px rgba(0, 0, 0, 0.05),
            0 2px 0px rgba(0, 0, 0, 0.07);
        padding: 0.5rem;
        border-radius: 0.25rem;
        margin-bottom: 0.5rem;
    }
</style>

<div class="container">
    <p>{title}</p>
</div>
