<script>
    import { getContext } from 'svelte';
    
    import TodoItem from './TodoItem.svelte';

    const todos = getContext('todos');
</script>

<ul class="px-4">
    {#each $todos as todo, index (index)}
        <TodoItem {todo} {index} />
    {/each}
</ul>