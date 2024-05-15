<script>
    import TabList from './TabList.svelte';
</script>

<svelte:head>
    <title>Navigation</title>
</svelte:head>

<div class="flex justify-center items-center min-h-screen bg-gradient-to-b from-deepIndigo via-darkNavy to-royalIndigo">
    <nav>
        <TabList tabs={['Animation', 'Branding', 'Illustration']} />
    </nav>
</div>