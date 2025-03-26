import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

document.addEventListener(
    "click",
    (onClick) => {
        const clickEvent = onClick.target

        if (clickEvent.dataset.type === "celebrity") {
            window.alert(`${clickEvent.dataset.name} is a ${clickEvent.dataset.sport} star`)
        }
    }
)


export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    data-name="${celebrity.name}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}
