<script>
    import { getContext } from 'svelte';
    
    import faceSmile from '$lib/images/face-smile.svg';
    import faceNeutral from '$lib/images/face-neutral.svg';

    export let todo;
    export let index;

    const toggleDone = getContext('toggleDone');
</script>

<li class="mb-4 flex justify-between gap-x-8">
    <button class={`text-stormCloud overflow-auto ${todo.done ? 'line-through opacity-50' : ''}`} on:click={() => toggleDone(index)}>{todo.text}</button>
    <img src={todo.done ? faceSmile : faceNeutral} alt={todo.done ? 'Done' : 'Not Done'} class="w-6 h-6" />
</li>