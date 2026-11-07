# Web Components Showcase

Ứng dụng nhỏ để so sánh cùng một giao diện User Card được viết bằng nhiều công nghệ web component. Mỗi thẻ hiển thị tên, email và nút đếm lượt thích.

## Công nghệ

- Vanilla JavaScript
- Lit
- FAST
- Svelte
- Stencil (có package riêng trong `packages/stencil-card`)
- Vite để chạy và build showcase

## Chạy dự án

Cần cài Node.js và pnpm. Tại thư mục gốc:

```bash
pnpm install
pnpm dev
```

Mở URL được Vite hiển thị trong terminal để xem showcase.

Build bản production và xem thử:

```bash
pnpm build
pnpm preview
```

Lệnh `pnpm build` build package Stencil trước, sau đó build ứng dụng Vite.

## Cấu trúc chính

```text
index.html                  Trang showcase và các custom element
src/index.js                Nạp các implementation vào ứng dụng
src/vanilla/user-card.js    Vanilla JavaScript
src/lit/user-card.ts        Lit
src/fast/user-card.ts       FAST
src/svelte/UserCard.svelte  Svelte
packages/stencil-card/      Package Stencil riêng
```

## Custom element

Các implementation dùng chung thuộc tính `name` và `email`, với giá trị mặc định nếu không truyền. Các thẻ trong trang hiện tại là:

```html
<vanilla-card name="Tien Dev" email="vanilla@example.com"></vanilla-card>
<lit-card name="Tien Dev" email="lit@example.com"></lit-card>
<fast-card name="Tien Dev" email="fast@example.com"></fast-card>
<svelte-card name="Tien Dev" email="svelte@example.com"></svelte-card>
```

Stencil được build trong lệnh build tổng, nhưng import trong `src/index.js` và phần tử `<stencil-card>` trong `index.html` hiện đang tắt. Vì vậy, thẻ Stencil chưa hiển thị trong showcase.
