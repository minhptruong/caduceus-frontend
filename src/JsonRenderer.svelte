<script lang="ts">
    import { capitalCase } from "change-case";
    import { onMount } from "svelte";

    export let json: Record<string, any>;

    let keyValues: Record<string, string> = {};
    let keys: string[] = Object.keys(keyValues);
    $: keys = Object.keys(keyValues);

    function setKeyValue(
        key: string,
        value: any,
        results: Record<string, string>,
    ) {
        results[key] = JSON.stringify(value);
    }

    function init() {
        const keys = Object.keys(json);
        keys.forEach((key) => {
            setKeyValue(key, json[key], keyValues);
        });

        keyValues = { ...keyValues }
    }

    onMount(() => {
        init();
    });
</script>

{#each keys as property}
    <p><b>{capitalCase(property)}:</b> {keyValues[property]}</p>
{/each}
