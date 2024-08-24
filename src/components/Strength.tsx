type strengthProps = {
    password: string
}

function Strength({ password }: strengthProps) {

    let text: string = ""

    if (password.length < 4) {
        text = "Poor"
    } else if (password.length < 7) {
        text = "good"
    } else if (password.length < 10) {
        text = "medium"
    } else if (password.length < 15) {
        text = "strong"
    } else if (password.length < 20) {
        text = "unbreakable"
    }

    return (
        <p className=" mx-10 text-red-600 text-sm">{text}</p>
    )
}

export default Strength