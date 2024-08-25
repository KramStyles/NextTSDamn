export default function UserLayout({children}: { children: React.ReactNode}) {
    return (
        <div>
            <h1>I am layout inside the user directory.</h1>
            {children}
            <footer>I am footer of the user directory.</footer>
        </div>
    )
}