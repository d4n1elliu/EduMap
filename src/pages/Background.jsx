export default function Background({children}) {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-800 via-blue-300 via-orange-300 to-orange-800">
            {children}
        </div>
    )
}