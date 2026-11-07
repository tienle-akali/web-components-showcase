# Web Components Showcase

Ứng dụng nhỏ để so sánh cùng một giao diện User Card được viết bằng năm công nghệ web component. Mỗi thẻ hiển thị tên, email và nút đếm lượt thích.

## Công nghệ

- Vanilla JavaScript
- Lit
- FAST
- Svelte
- Stencil (có package riêng trong `packages/stencil-card`)
- Vite để chạy và build showcase

## Yêu cầu

- Node.js
- pnpm

## Chạy môi trường phát triển

Chạy tại thư mục gốc:

```bash
pnpm install
pnpm dev
```

Lệnh `pnpm dev` build package Stencil trước khi khởi động Vite. Mở URL được Vite hiển thị trong terminal để xem showcase.

Nếu sửa source Stencil khi server đang chạy, build lại package để cập nhật custom element:

```bash
pnpm --filter stencil-card build
```

## Build production

Build ứng dụng và xem thử bản production:

```bash
pnpm build
pnpm preview
```

Lệnh `pnpm build` build package Stencil trước, sau đó tạo bản production bằng Vite. `pnpm preview` phục vụ nội dung trong thư mục `dist`; hãy chạy build trước.

## Cấu trúc chính

```text
index.html                  Trang showcase và các custom element
src/index.js                Nạp các implementation vào ứng dụng
src/vanilla/user-card.js    Vanilla JavaScript
src/lit/user-card.ts        Lit
src/fast/user-card.ts       FAST
src/svelte/UserCard.svelte  Svelte
packages/stencil-card/      Package Stencil riêng và source component
```

## Các custom element

Trang hiện tại nạp và hiển thị các thẻ sau:

```html
<vanilla-card name="Tien Dev" email="vanilla@example.com"></vanilla-card>
<lit-card name="Tien Dev" email="lit@example.com"></lit-card>
<stencil-card name="Tien Dev" email="stencil@example.com"></stencil-card>
<fast-card name="Tien Dev" email="fast@example.com"></fast-card>
<svelte-card name="Tien Dev" email="svelte@example.com"></svelte-card>
```

Các component nhận thuộc tính `name` và `email`, có giá trị mặc định nếu không truyền. Component Stencil được build từ `packages/stencil-card` và tự đăng ký custom element khi module `dist/components/stencil-card.js` được import trong `src/index.js`.
