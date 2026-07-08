<script setup lang="ts">
import avatarPlaceholder from '@/assets/images/avatar-placeholder.svg'

withDefaults(defineProps<{ src?: string; alt: string; size?: string }>(), { size: '96px' })
</script>

<template>
  <img
    :src="src ?? avatarPlaceholder"
    :alt="alt"
    class="rounded-full object-cover"
    :style="{ width: size, height: size }"
  />
</template>
