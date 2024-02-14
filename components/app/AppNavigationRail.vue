<template>
    <div
        @wheel.prevent="e => e.preventDefault()"
        @touchmove.prevent="e => e.preventDefault()"
        class=" w-[64px] top-0 left-0 h-full fixed border-r-[0.5px] border-opacity-30  border-r-colorOutlineDark"
    >
        <div class="flex-col h-fit mt-12">
            <h4 class="text-xl font-bold rotate-90 cursor-pointer">Notes</h4>
        </div>
        <div class="flex flex-col mt-12">

            <button
                v-Ripple
                @click="onClickActionButton"
                :aria-label="createNote"
                class="
                        m-auto
                        flex cursor-pointer
                        min-h-[48px] min-w-[48px] 
                        bg-colorPrimaryLight dark:bg-colorPrimaryDark
                        text-colorOnPrimaryLight dark:text-colorOnPrimaryDark
                        rounded-full 
                        shadow-sm 
                        opacity-70 hover:opacity-100"
            >

                <Icon
                    class="m-auto pointer-events-none"
                    name="mdi:plus"
                    size="24px"
                />
            </button>
        </div>
        <div class="flex flex-col w-full py-[16px] space-y-2 absolute bottom-0 items-center">
            <IconButton
                v-for="n in menuItems"
                class="w-10 h-10"
                size="22px"
                :name="n.name"
                :icon="n.icon"
            />
        </div>
    </div>
</template>
<script setup>
import Note from '~/classes/Note';
import useNotesStore from '~/stores/useNotesStore';
const menuItems = [

    {
        "name": "Search",
        "icon": "ic:outline-search",
        "path": ""
    },

    {
        "name": "Trash",
        "icon": "ic:outline-delete",
        "path": ""
    },
    {
        "name": "Setting",
        "icon": "ic:outline-settings",
        "path": ""
    },
    {
        "name": "About & Feedback",
        "icon": "ic:outline-info",
        "path": ""
    },
]
const emit = defineEmits(["onClickMenuItem", "name"]);
const notesStore = useNotesStore()

function onClickActionButton() {
    notesStore.addNote(
        new Note(
            notesStore.notesList.value,
            `Title ${notesStore.getLength()}`,
            `Basically, what I need is a computed property that returns true when the window.innerwidth is equal or lower than 768px and false when it's higher than 768px.What I did:`,
            Date.now(),
            false,
        )
    );

}
</script>