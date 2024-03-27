<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Button } from "~/components/ui/button";

import techmap from "@/assets/techmap.json";
const categories = techmap.categories;
</script>

<template>
  <div class="px-8 md:px-12 lg:px-16 mt-4">
    <p class="text-sm">カテゴリごとに必要なツール、フレームワークをまとめたテックマップです。</p>
    <Card class="mt-4 rounded-lg" v-for="(category, index) in categories" :key="index">
      <CardHeader class="bg-card rounded-t-lg">
        <CardTitle>
          <div class="flex items-center gap-2">
            {{ category.name }}
            <Popover>
              <PopoverTrigger as-child>
                <button><Icon name="lucide:info" clas="size-4"/></button>
              </PopoverTrigger>
              <PopoverContent class="w-80 dark:bg-popover">
                <p class="text-sm">{{ category.description }}</p>
              </PopoverContent>
            </Popover>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent class="bg-card rounded-b-lg">
        <div class="overflow-hidden rounded-lg shadow-sm border bg-card">
          <div class="flex flex-wrap -mb-px -mr-px" >
            <div class="p-4 border-dashed border -mt-px -ml-px flex flex-col bg-card" v-for="(item, itemIndex) in category.items" :key="`item-${itemIndex}`">
              <div class="flex items-center gap-1 mb-2 text-muted-foreground">
                <p class="text-sm">
                  {{ item.label }}
                </p>
                <Popover>
                  <PopoverTrigger as-child>
                    <button><Icon name="lucide:info" class="size-3.5"/></button>
                  </PopoverTrigger>
                  <PopoverContent class="w-80 dark:bg-popover">
                    <p class="text-sm text-muted-foreground">{{ item.description }}</p>
                  </PopoverContent>
                </Popover>
              </div>
              <div class="flex flex-1 flex-wrap xl:flex-nowrap justify-center items-center gap-3" >
                <Popover v-for="(subItem, subItemIndex) in item.items" :key="`subItem-${subItemIndex}`">
                  <PopoverTrigger as-child>
                    <button class="text-center p-2 rounded-md hover:bg-accent min-w-[75px]">
                      <Icon :name="subItem.icon" class="size-6"/>
                      <span class="text-xs block mt-2 text-muted-foreground whitespace-nowrap">{{ subItem.label }}</span>
                    </button>
                  </PopoverTrigger>
                  <PopoverContent class="w-80 dark:bg-popover">
                    <div class="flex items-center justify-between mb-3">
                      <Icon :name="subItem.icon" class="size-7"/>
                      <a :href="subItem.url" target="_blank" class="rounded-md gap-1 p-1.5 px-2 text-xs inline-flex items-center text-muted-foreground bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700">
                        公式サイト
                        <Icon name="lucide:external-link" class="size-3"/>
                      </a>
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-semibold mb-1.5 whitespace-nowrap">{{subItem.label}}</p>
                      <p class="text-sm text-muted-foreground">{{subItem.description}}</p>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
