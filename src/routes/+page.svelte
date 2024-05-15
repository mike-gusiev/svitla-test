<script>
    let links = [
        { name: 'Navigation', url: '/navigation' },
        { name: 'Gradient', url: '/gradient' },
        { name: 'Web Design', url: '/webdesign' },
        { name: 'To Do', url: '/todo' },
    ];
</script>

<main class="min-h-screen bg-blue-500 flex items-center justify-center">
    <nav class="p-6">
        <ul class="flex space-x-8">
            {#each links as link (link.url)}
                <li class="p-4 bg-white rounded shadow-md">
                    <a href={link.url} class="font-bold">
                        {link.name}
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</main>