const inputValue = document.getElementById("input-value")
const convertBtn = document.getElementById("convert-btn")
const containerUnit = document.getElementById("container-unit")

const units = [
    {
        type: "Length",
        name: "meter",
        name2: "feet",
        convert1: (value) => value * 3.28084,
        convert2: (value) => value / 3.28084
    },
    {
        type: "Volume",
        name: "liter",
        name2: "gallon",
        convert1: (value) => value * 0.264172,
        convert2: (value) => value / 0.264172
    },
    {
        type: "Mass",
        name: "kilogram",
        name2: "pound",
        convert1: (value) => value * 2.20462,
        convert2: (value) => value / 2.20462
    }
]

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

const render = (value) => {
    value = !value ? 0 : inputValue.value;
    inputValue.value = value;

    let content = "";
    for (let i = 0; i < units.length; i++) {
        content += 
        `
            <div>
                <h2>${units[i].type} (${capitalizeFirstLetter(units[i].name)} - ${capitalizeFirstLetter(units[i].name2)})</h2>
                <p>${value} ${units[i].name} = ${units[i].convert1(value).toFixed(3)} ${units[i].name2} | ${value} ${units[i].name2} = ${units[i].convert2(value).toFixed(3)} ${units[i].name}</p>
            </div>
        `
    }
    containerUnit.innerHTML = content
}
render()

convertBtn.addEventListener("click", () => {
    const value = inputValue.value;
    render(value);
})