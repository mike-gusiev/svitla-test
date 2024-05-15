<script>
    import { getContext } from 'svelte';

    let newTodo = '';

    const addTodo = getContext('addTodo');
</script>

<form on:submit|preventDefault={() => addTodo(newTodo)} class="p-4 flex flex-col">
    <input type="text" bind:value={newTodo} class="relative top-8 px-4 py-2 border border-lavenderBlue rounded text-lavenderBlue placeholder:text-lavenderBlue" placeholder="Add Task" />
    <button type="submit" class="relative top-16 w-1/2 self-center mt-2 p-2 bg-green-500 rounded-3xl text-white font-semibold">Add</button>
</form>