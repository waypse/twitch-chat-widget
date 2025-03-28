<script>
  import { flip } from "svelte/animate";
  import { fly } from "svelte/transition";
  import { addMessage, sendAlert } from "./lib/event";
  import messages from "./lib/chat";
  import ChatMessage from "./components/ChatMessage.svelte";
  import AlertMessage from "./components/AlertMessage.svelte";

  const rand = () => {
    return Math.random().toString(36).substr(2); // remove `0.`
  };

  window.addEventListener("onEventReceived", function (obj) {
    // @ts-ignore
    const { listener, event } = obj.detail;

    // needed because alerts and messages don't have the same structure
    // therefore some don't have a msgId
    // so we need to generate a unique key for each message
    // to avoid svelte's key collision
    const token = rand() + rand(); // to make sure the key is unique

    if (listener === "subscriber-latest") {
      $messages = [{ ...event, messageType: "alert", token }, ...$messages];
    }

    if (listener === "message") {
      $messages = [{ ...event, messageType: "message", token }, ...$messages];
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

  // Remove unnecessary messages
  $: $messages.length >= 20 && $messages.pop() && ($messages = $messages);
</script>

{#if import.meta.env.MODE === "development"}
  <div class="debug-actions">
    <button on:click={addMessage(null)}>add default message</button>
    <button on:click={addMessage("sub")}>add sub message</button>
    <button on:click={addMessage("mod")}>add mod message</button>
    <button on:click={addMessage("broadcaster")}>add broadcaster message</button
    >
    <button on:click={sendAlert}>send alert</button>
    <button on:click={addMessage("emote-only")}>emote-only</button>
  </div>
{/if}
<div class="chat">
  {#each $messages as message (message.token)}
    <div animate:flip={{ duration: 200 }} in:fly={{ x: 100, duration: 200 }}>
      {#if message.messageType === "alert"}
        <AlertMessage {message} />
      {:else}
        <ChatMessage {message} />
      {/if}
    </div>
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
    overflow: hidden;
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
</style>
