import React from "react"

function Table() {
    const tableHeading = [
        {
            name: "Avatar",
            icon: "👤"
        },
        {
            name: "Name",
            icon: "📛"
        },
        {
            name: "Status",
            icon: "✅"
        }
    ]
    const tableData = [
        {
            avatar: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-128.png",
            user: "Alice",
            status: "Active"
        },
        {
            avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-128.png",
            user: "Devi",
            status: "Inactive"
        }
    ]

    return(<div className="mx-auto max-w-2xl mb-5">
        <h3 className="text-xl font-bold">📊User Data</h3>
        <table className="border border-collapse mt-3 w-full">
            <thead>
                <tr>{tableHeading.map((data, index) => {
                    return(
                        <td key={index} className="p-2 bg-gray-300 border border-gray-400">{data.icon}{data.name}</td>
                    )
                })}</tr>
            </thead>
            <tbody>{tableData.map((data, index) => {
                return(
                    <tr key={index} className="text-center">
                        <td className="border border-gray-400 p-2"><img src={data.avatar} alt="Avatar-Image" className="w-10 mx-auto" /></td>
                        <td className="border border-gray-400">{data.user}</td>
                        <td className={`border border-gray-400 ${data.status === "Active" ? "text-green-600" : "text-red-600"}`}>{data.status}</td>
                    </tr>
                )
            })}</tbody>
        </table>
    </div>)
}

export default Table