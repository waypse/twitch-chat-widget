<script>
  import ChatMessage from "./lib/ChatMessage.svelte";
  import { messages } from "./stores/chat";

  window.addEventListener("onEventReceived", function (obj) {
    // @ts-ignore
    const { listener, event } = obj.detail;

    if (listener === "message") {
      $messages = [...$messages, event];
    }

    if (listener === "delete-message") {
      $messages = $messages.filter(
        (msg) => msg.data.msgId !== event.data.msgId
      );
    }

    if (listener === "delete-messages") {
      $messages = $messages.filter(
        (msg) => msg.data.msgId !== event.data.msgId
      );
    }
  });
</script>

<div class="chat">
  {#each $messages as message}
    <ChatMessage {message} />
  {/each}
</div>

<style>
  .chat {
    display: flex;
    flex-direction: column-reverse;
    height: 100vh;
    width: 100vw;
  }
</style>
