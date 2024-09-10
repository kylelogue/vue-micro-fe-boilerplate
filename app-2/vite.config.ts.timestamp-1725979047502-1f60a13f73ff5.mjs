// vite.config.ts
import { defineConfig } from "file:///Users/kyle.logue/Code/vue-micro-fe-boilerplate/app-2/node_modules/.pnpm/vite@5.4.3_sass-embedded@1.78.0/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/kyle.logue/Code/vue-micro-fe-boilerplate/app-2/node_modules/.pnpm/@vitejs+plugin-vue@5.1.3_vite@5.4.3_sass-embedded@1.78.0__vue@3.5.4_typescript@5.6.2_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import federation from "file:///Users/kyle.logue/Code/vue-micro-fe-boilerplate/node_modules/.pnpm/@originjs+vite-plugin-federation@1.3.5/node_modules/@originjs/vite-plugin-federation/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    federation({
      name: "app-1",
      filename: "remoteEntry.js",
      exposes: {
        //   './BasketInfo': './src/components/BasketInfo.vue',
        //   './BuyButton': './src/components/BuyButton.vue',
      },
      shared: ["vue", "pinia"]
    })
  ],
  build: {
    minify: false
    // target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva3lsZS5sb2d1ZS9Db2RlL3Z1ZS1taWNyby1mZS1ib2lsZXJwbGF0ZS9hcHAtMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2t5bGUubG9ndWUvQ29kZS92dWUtbWljcm8tZmUtYm9pbGVycGxhdGUvYXBwLTIvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2t5bGUubG9ndWUvQ29kZS92dWUtbWljcm8tZmUtYm9pbGVycGxhdGUvYXBwLTIvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCBmZWRlcmF0aW9uIGZyb20gJ0BvcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIHZ1ZSgpLFxuICAgICAgICBmZWRlcmF0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6ICdhcHAtMScsXG4gICAgICAgICAgICBmaWxlbmFtZTogJ3JlbW90ZUVudHJ5LmpzJyxcbiAgICAgICAgICAgIGV4cG9zZXM6IHtcbiAgICAgICAgICAgICAgICAvLyAgICcuL0Jhc2tldEluZm8nOiAnLi9zcmMvY29tcG9uZW50cy9CYXNrZXRJbmZvLnZ1ZScsXG4gICAgICAgICAgICAgICAgLy8gICAnLi9CdXlCdXR0b24nOiAnLi9zcmMvY29tcG9uZW50cy9CdXlCdXR0b24udnVlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaGFyZWQ6IFsndnVlJywgJ3BpbmlhJ11cbiAgICAgICAgfSlcbiAgICBdLFxuICAgIGJ1aWxkOiB7XG4gICAgICAgIG1pbmlmeTogZmFsc2VcbiAgICAgICAgLy8gdGFyZ2V0OiBbXCJjaHJvbWU4OVwiLCBcImVkZ2U4OVwiLCBcImZpcmVmb3g4OVwiLCBcInNhZmFyaTE1XCJdXG4gICAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlWLFNBQVMsb0JBQW9CO0FBQzlXLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUV2QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxJQUFJO0FBQUEsSUFDSixXQUFXO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUE7QUFBQTtBQUFBLE1BR1Q7QUFBQSxNQUNBLFFBQVEsQ0FBQyxPQUFPLE9BQU87QUFBQSxJQUMzQixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsUUFBUTtBQUFBO0FBQUEsRUFFWjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
