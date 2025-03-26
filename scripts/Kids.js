import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (onClick) => {
        const clickEvent = onClick.target

        if (clickEvent.dataset.type === "child") {
            window.alert(`${clickEvent.dataset.name}'s wish is ${clickEvent.dataset.wish}`)
        }
    }
)

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
                    data-type="child" data-wish="${child.wish}"
                    data-name="${child.name}">
                    ${child.name}</li>`
    }

    html += "</ol>"
    return html
}

