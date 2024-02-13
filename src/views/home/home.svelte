<script lang="ts">
    import Chat from "../chat/chat.svelte";
    import LeftNav from "../left-nav/left-nav.svelte";
</script>

<div class="home">
    <div class="left-nav">
        <LeftNav />
    </div>
    <div class="chat">
        <Chat />
    </div>
</div>

<style>

.home {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100%;
}
.left-nav {
 flex: 1;
 background-color: black;
}

.chat {
    flex: 3;
    background-color: white;
}
</style>