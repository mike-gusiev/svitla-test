<script>
    import logo from '$lib/images/bing-logo.svg'
</script>

<svelte:head>
    <title>Gradient</title>
</svelte:head>

<main class="flex justify-center items-center min-h-screen bg-gradient-to-b from-skyBlue via-lightLilac to-lightCyan" aria-label="Main Content">
    <section class="py-16 px-24 flex flex-col gap-y-8 bg-white rounded-largeRadius shadow-md">
        <img src={logo} alt="Bing Logo" class="w-48 h-auto" />
        <p class="text-3xl text-center">Bing</p>
    </section>
</main>