<script>
    import Tab from './Tab.svelte';

    export let tabs;
    
    let activeTab = '';

    function setActiveTab(tab) {
        activeTab = tab;
    }
</script>

<ul class="flex justify-center list-none p-0" role="tablist">
    {#each tabs as tab (tab)}
        <Tab {tab} {activeTab} {setActiveTab} />
    {/each}
</ul>