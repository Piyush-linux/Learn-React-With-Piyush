> https://youtu.be/W7up-w1QYpw?list=PLPppPPmk0i3j_DW1T-UbryDVhBDgaAfEp : 44.m

[[TOC]]
- setup: react, Tailwind
- components
- image, assets, fonts, css
- 

# React + TypeScript + Vite

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

---

## Dev Setup
```
git clone <repo>
cd <repo>
yarn
yarn dev
```

---

## Init Setup
```sh
# react > tsx
yarn create vite  
# Tailwind
https://tailwindcss.com/docs/guides/vite 
```



## Components

/App.tsx
```tsx
function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar/>
      {/* COntent */}
      <div className="text-xl">Hello</div>
      {/* Footer */}
      
    </>
  )
}
```

/components/Navbar.tsx
```tsx
export default function Navbar() {
  return (
    <ul>
      <li> Logo </li>
      <li> Itm 2 </li>
      <li> Itm 3 </li>
    </ul>
  )
  }
```

## Public Dir

- publix/images/logo.svg
```html
<img src="/images/logo.svg" alt="Logo" />
```

## Google Fonts

- index.css : Global CSS Module




## UI
- tailwindLib : https://www.hyperui.dev/components/marketing/headers

