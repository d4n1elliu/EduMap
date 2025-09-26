import Background from './Background';
import Footer from './Footer';

export default function About() {
    return (
        // Main Layout
        <Background>
            <div className="w-full max-w-6xl px-6 pt-28 mx-auto flex-1">
                <main className="flex-1">
                    {/* Team Section */}
                    <section className="text-center mb-10 space-y-5">
                        <div className="mx-auto max-w-xl rounded-lg bg-white shadow-2xl px-8 md:px5 py-5 md:py-8 shadow text-center">
                            <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-8">Meet The Team! </h1>
                            <p className="text-lg font-semibold md:text-xl text-gray-700 max-w-3xl mx-auto">Daniel Liu (14430779)</p>
                            <p className="text-lg font-semibold md:text-xl text-gray-700 max-w-3xl mx-auto">Julian Alcazaren (24608263)</p>
                            <p className="text-lg font-semibold md:text-xl text-gray-700 max-w-3xl mx-auto">Robert Ly (24561680)</p>
                            <p className="text-lg font-semibold md:text-xl text-gray-700 max-w-3xl mx-auto">Deeva Sood (14243214)</p>
                            <p className="text-lg font-semibold md:text-xl text-gray-700 max-w-3xl mx-auto">Vidanalage Ineshka De Mel (14540645)</p>
                            <p className="text-lg font-semibold md:text-xl text-gray-700 max-w-3xl mx-auto">Sophie Supharath Gnoukhanthone (14241994)</p>
                        </div>
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
        </Background>
    )
}