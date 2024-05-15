<script>
    export let tab;
    export let activeTab;
    export let setActiveTab;
</script>

<li role="presentation">
    <button class="relative m-0 px-4 py-2 cursor-pointer transition-colors duration-300 text-gray-500 hover:text-white active:text-white border-transparent hover:border-white active:border-white" 
    on:click={() => setActiveTab(tab)} 
    class:active={activeTab === tab} 
    aria-label={tab} 
    aria-current={activeTab === tab} 
    role="tab" 
    tabindex="0">
        {tab}
        <span class="absolute inset-x-0 bottom-0 h-0.5 bg-transparent transition-all duration-300 ease-out hover:bg-white active:bg-white" class:active={activeTab === tab}></span>
    </button>
</li>