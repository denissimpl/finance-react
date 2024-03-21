export const validate: (a:string, b:string) => string[] = (category:string, amount:string) => {
    const errorArr:string[] = []
    const categoryIncludesNumbers:Boolean = /[0-9]/.test(category);
    const stringInAmount:Boolean = isNaN(amount)
    if (categoryIncludesNumbers) {
        errorArr.push("Нельзя использовать цифры в категории")
    }
    if (stringInAmount) {
        errorArr.push("В цене можно использовать только цифры")
    }
    if (category.length < 3) {
        errorArr.push("Категория должна быть не меньше 3 символов")
    }
    return errorArr
}

export const makeDate: () => string = () => {
    const dateNow = new Date()
    return `${dateNow.getFullYear()}-${dateNow.getMonth()+1<10?"0"+(dateNow.getMonth()+1):dateNow.getMonth()+1}-${dateNow.getDate()<10?"0"+dateNow.getDate():dateNow.getDate()}`
}