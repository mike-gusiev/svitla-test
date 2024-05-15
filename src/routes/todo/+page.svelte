<script>
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';

    import TodoList from './TodoList.svelte';
    import TodoForm from './TodoForm.svelte';

    let todos = writable([]);
    let date = new Date();
    let options = { weekday: 'long', month: 'long', day: 'numeric' };
    let formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

    function addTodo(newTodo) {
        if (newTodo.trim() !== '') {
            $todos = [...$todos, { text: newTodo, done: false }];
        }
    }

    function toggleDone(index) {
        let updatedTodos = [...$todos];
        updatedTodos[index].done = !updatedTodos[index].done;
        $todos = updatedTodos;
    }

    setContext('todos', todos);
    setContext('addTodo', addTodo);
    setContext('toggleDone', toggleDone);
</script>

<svelte:head>
    <title>To Do</title>
</svelte:head>

<main class="min-h-screen bg-ivory grid justify-items-center items-center">
    <section class="w-96 py-8 bg-white shadow-md">
        <div class="px-4 flex flex-col gap-y-4 font-semibold">       
            <h1 class="text-4xl text-stormCloud">{date.toLocaleString('default', { month: 'long' })}</h1>
            <p class="text-xl text-center text-lavenderBlue">{formattedDate}</p>
        </div>
        <hr class="my-8 w-full border-t-4" />


        <TodoList />
        <TodoForm />
    </section>
</main>