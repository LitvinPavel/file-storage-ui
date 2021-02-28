<template>
    <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center relative">
        <slot name="default" />
        <span class="absolute bottom-0 -mb-2">
            <slot name="sub" />
        </span>
    </button>
</template>

<script>
export default {
    name: "fs-btn"
}
</script>