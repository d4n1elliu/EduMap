import Footer from './Footer';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-300 via-blue-100 via-orange-100 to-orange-300">
            <div className="w-full max-w-6xl px-6 pt-28 mx-auto flex-1">
                <main className="flex-1">
                    <section className="text-center mb-10 space-y-5">
                        <h1 className="text-5xl md:text-6xl font-extrabold text-blue-500 mb-8">Meet The Team! </h1>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Daniel Liu (14430779)</p>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Julian Alcazaren (24608263)</p>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Robert Ly (24561680)</p>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Deeva Sood (14243214)</p>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Vidanalage Ineshka De Mel (14540645)</p>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">Sophie Supharath Gnoukhanthone (14241994)</p>
                    </section>
                </main>
            </div>
            <Footer/>
        </div>
    )
}