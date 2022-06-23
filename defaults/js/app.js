const mobileHeaderRender = () => {
    const headerItems = document.getElementById("#header_link_items");
    const mobileMenu = document.getElementById("#mobileHeaderMenu");
    mobileMenu.addEventListener("click", () => {
        if(headerItems.classList.contains("close")) {
            headerItems.classList.remove("close")
            headerItems.classList.add("open")
        } else if(headerItems.classList.contains("open")) {
            headerItems.classList.remove("open")
            headerItems.classList.add("close")
        } else {
            headerItems.classList.add("open")
        }
    })
}

mobileHeaderRender();