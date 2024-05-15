<script>
    import { onMount } from 'svelte';
    import { fly, fade } from 'svelte/transition';
    
    import menuIcon from '$lib/images/menu-icon.svg';
    import photo1 from '$lib/images/model-photo-1.jpg';
    import photo2 from '$lib/images/model-photo-2.jpg';
    import photo3 from '$lib/images/model-photo-3.jpg';

    const socialLinks = [
        { name: 'FB', url: 'https://facebook.com' },
        { name: 'PIN', url: 'https://pinterest.com' },
        { name: 'IG', url: 'https://instagram.com' }
    ];
    const FADE_DURATION = 3000;
    const FLY_DURATION = 1800;

    let languageOptions = [
        { name: 'ENG', selected: true },
        { name: 'FR', selected: false }
    ];
    let isPageLoaded = false;

    onMount(() => isPageLoaded = true);

    function selectLanguage(name) {
        languageOptions = languageOptions.map(option => ({...option, selected: option.name === name}));
    }
</script>

<svelte:head>
    <title>Web Design</title>
</svelte:head>

<main class="flex h-screen bg-amber-50">
    <header class="relative h-full w-full md:w-3/5 bg-black">
        {#if isPageLoaded}
            <img
                src={photo1}
                alt="Model posing in summer collection"
                class="object-cover absolute size-full"
                transition:fade={{ duration: FADE_DURATION }}
            />
        {/if}
        <nav class="h-1/3 w-full relative z-10">
            <div class="p-12 pl-16 flex text-white">
                <button type="button" aria-label="Open menu">
                    <img src={menuIcon} alt="Menu icon" height="20" width="20" class="mr-8" />
                </button>
                <span class="text-2xl font-semibold">Menu</span>
            </div>
        </nav>
        <div class="h-2/3 ml-16 text-white relative z-10">
            <div class="mb-24 flex flex-wrap gap-16 justify-between">
                <h4 class="font-medium text-md">Summer<br />Collection<br />2020</h4>
                {#if isPageLoaded}
                    <div
                        class="mr-16 text-md font-semibold flex items-center"
                        transition:fade={{ duration: FADE_DURATION }}
                    >
                        Next
                        <span class="mx-8 w-28 h-0.5 bg-white"></span>
                        Previous
                    </div>
                {/if}
            </div>
            <h1 class="text-start text-8xl md:text-9xl font-serif">Summer<br />2020</h1>
        </div>
        <div class="absolute bottom-16 left-16 z-20">
            {#each socialLinks as link (link.name)}
                <button class="mr-8 font-semibold text-white transition-colors">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name}
                    </a>
                </button>
            {/each}
        </div>
        {#if isPageLoaded}
            <div class="absolute bottom-16 right-16 gap-32 text-white text-8xl hidden md:flex">
                <button class="opacity-50" transition:fly={{ x: -600, duration: FLY_DURATION }} aria-label="Dot 1">.</button>
                <button class="opacity-50" transition:fly={{ x: -400, duration: FLY_DURATION }} aria-label="Dot 2">.</button>
                <button transition:fly={{ x: -200, duration: FLY_DURATION }} aria-label="Dot 3">.</button>
            </div>
        {/if}
    </header>

    <section class="h-full w-2/5 relative hidden md:block">
        <div class="mt-4 mr-8 text-right">
            {#each languageOptions as option (option.name)}
                <button class="mb-6 p-6 font-bold transition-colors" class:text-gray-300={!option.selected} on:click={() => selectLanguage(option.name)}>
                    {option.name}
                </button>
            {/each}
        </div>
        {#if isPageLoaded}
            <img
                src={photo2}
                alt="Model posing 2"
                class="absolute w-1/3 top-40 lg:w-1/3 right-1/4"
                transition:fly={{ y: -400, duration: FLY_DURATION }}
            />
            <img
                src={photo3}
                alt="Model posing 3"
                class="absolute h-1/3 bottom-16 left-14"
                transition:fly={{ x: -200, duration: FLY_DURATION }}
            />
        {/if}
        <div class="absolute -right-40 top-1/2 items-center flex rotate-90 font-bold">
            Ref. 6687/787
            <span class="mx-16 w-28 h-0.5 bg-black"></span>
            White loose dress
        </div>
        {#if isPageLoaded}
            <button
                class="absolute bottom-16 right-16 bg-amber-50 uppercase font-bold border border-black px-16 py-4
                transition-colors duration-200 ease-in-out hover:bg-black hover:text-white text-nowrap"
                transition:fade={{ duration: FADE_DURATION }}
            >
                Shop Now
            </button>
        {/if}
    </section>
</main>