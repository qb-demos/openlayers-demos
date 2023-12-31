<template>
  <el-menu default-active="2"
           router
           class="el-menu-vertical"
           :collapse="menuCollapse">
    <el-sub-menu v-for="menu in menus"
                 :key="menu.label"
                 :index="menu.label">
      <template #title>
        <el-icon>
          <Files />
        </el-icon>
        <span>{{ menu.label }}</span>
      </template>
      <el-menu-item v-for="item in menu.children"
                    :key="item.index"
                    :index="item.index">{{ item.label }}</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import useAppStore from '../../store/modules/app'
import { Files } from '@element-plus/icons-vue'

const menuCollapse = computed(() => useAppStore().menuCollapse)
const menus = ref([])
menus.value = [
  {
    label: 'Basics',
    children: [
      { label: 'index', index: '/1-1' }
    ]
  },
  {
    label: 'Vector Data',
    children: [
      { label: '2-1', index: '/2-1' },
      { label: 'Drag', index: '/2-2' },
      { label: 'Modify', index: '/2-3' },
      { label: 'Draw', index: '/2-4' },
      { label: 'Snap', index: '/2-5' },
      { label: 'Colorful', index: '/2-6' }
    ]
  },
  {
    label: 'GeoTIFF Rendering',
    children: [
      { label: 'index', index: '/3-1' }
    ]
  },
  {
    label: 'Vector Tiles and Styles',
    children: [
      { label: 'index', index: '/4-1' }
    ]
  },
  {
    label: 'WebGL Point Rendering',
    children: [
      { label: 'index', index: '/5-1' }
    ]
  }
]
</script>

<style lang="scss" scoped>
.el-menu-vertical {
  height: 100%;
  overflow-y: auto;
  border-right: 0;
  display: flex;
  flex-direction: column;

  &:not(.el-menu--collapse) {
    width: 240px;
  }

  .brand {
    height: 60px;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: pink;
  }

  .empty {
    flex: 1;
  }
}
</style>
