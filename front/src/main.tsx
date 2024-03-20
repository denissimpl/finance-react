import React from "react"
import { Root, createRoot } from "react-dom/client"
import App from "./App"
import { Provider } from "react-redux"
import { store } from "./redux"

const container: HTMLElement | null = document.getElementById("root")

if (container) {
  const root: Root = createRoot(container)

  root.render(
      <Provider store={store}>
        <App/>
      </Provider>,
  )
} else {
  throw new Error(
      "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}
