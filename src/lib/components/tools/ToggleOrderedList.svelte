<script>
  import { classNames } from '$lib/util';
  import { wrapInList } from 'prosemirror-schema-list';

  export let editorView;
  export let editorState;

  $: schema = editorState.schema;
  $: disabled = !wrapInList(schema.nodes.ordered_list)(editorView.state);

  function handleClick() {
    wrapInList(schema.nodes.ordered_list)(editorState, editorView.dispatch);
    editorView.focus();
  }
</script>

<button
  on:click={handleClick}
  {disabled}
  class={classNames(
    'text-white hover:bg-white hover:text-black',
    'sm:mx-1 rounded-full p-2 disabled:opacity-30'
  )}
>
  <slot />
</button>
