<template>
    <teleport to="#app">
        <transition name="slide-fade">
            <div v-if="modelValue" class="snackbar" :class="mode">
                <i class="icon">{{icon}}</i>
                <p>{{ message }}</p>
            </div>
        </transition>
    </teleport>
</template>

<script>
    export default {
        name: 'Snackbar',
        props: ['modelValue', 'mode', 'message', 'ttl'],
        emits: ['update:modelValue'],
        data() {
            return {
                visible: false
            }
        },
        computed: {
            icon() {
                switch (this.mode) {
                    case 'success': return 'check_circle_outline'; break;
                    case 'info': return 'info_outline'; break;
                    case 'warn': return 'warning_amber'; break;
                    case 'error': return 'error_outline'; break;
                }
            },
            timeoutMs() {
                return this.ttl || 3000;
            }
        },
        watch: {
            modelValue(newValue, oldValue) {
                if (newValue) {
                    setTimeout(() => {
                        this.$emit('update:modelValue', false);
                    }, this.timeoutMs);
                }
            }
        }
    }
</script>

<style lang="scss">
    .snackbar {
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);
        display: flex;
        align-items: center;
        padding: 8px 16px 8px 8px;
        z-index: 10;
        color: white;

        & i {
            margin-right: 16px;
        }

        & p {
            margin: 0;
            font-weight: 500;
        }

        &.success {
            background-color: #4caf50;
        }

        &.info {
            background-color: #2196f3;
        }

        &.warn {
            background-color: #ff9800;
        }

        &.error {
            background-color: #f44336;
        }
    }

    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(-50%) translateY(-10px);
        opacity: 0;
    }
</style>