<script>
  import ChatMessage from "./components/ChatMessage.svelte";
  import { messages, addMessage } from "./lib/stores/chat";

  window.addEventListener("onEventReceived", function (obj) {
    // @ts-ignore
    const { listener, event } = obj.detail;

    if (listener === "subscriber-latest") {
      $messages = [{ ...event, messageType: "alert" }, ...$messages];
    }

    if (listener === "message") {
      $messages = [{ ...event, messageType: "message" }, ...$messages];
    }

    if (listener === "delete-message") {
      $messages = $messages.filter(
        (msg) => msg.data.msgId !== event.data.msgId
      );
    }

    if (listener === "delete-messages") {
      $messages = $messages.filter(
        (msg) => msg.data.userId !== event.data.userId
      );
    }
  });

  $: $messages.length >= 20 && $messages.pop() && ($messages = $messages);
</script>

{#if import.meta.env.MODE === "development"}
  <div class="debug-actions">
    <button on:click={addMessage(null)}>add default message</button>
    <button on:click={addMessage("sub")}>add sub message</button>
    <button on:click={addMessage("mod")}>add mod message</button>
    <button on:click={addMessage("broadcaster")}>add broadcaster message</button
    >
  </div>
{/if}
<div class="chat">
  {#each $messages as message (message.data.msgId)}
    {#if message.messageType === "alert"}
      <div class="debug">
        <pre>{JSON.stringify(message, null, 2)}</pre>
      </div>
    {:else}
      <ChatMessage {message} />
    {/if}
  {/each}
</div>

<style>
  .chat {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    width: 100vw;
    box-sizing: border-box;
    padding: 30px;
    padding-right: 0;
    row-gap: 1.5rem;
  }

  .debug-actions {
    position: fixed;
    top: 0;
    right: 0;
    padding: 10px;
    background-color: blue;
    border-radius: 10px;
    z-index: 1000;
  }
  .debug-actions button {
    padding: 10px;
    background-color: white;
    border: none;
    border-radius: 5px;
  }

  .debug {
    background-color: white;
    padding: 10px;
    color: black;
  }
</style>
